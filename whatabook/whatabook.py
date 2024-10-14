"""
Title: whatabook.py
Author: BSON Builders
Date: 13 October 2024
Description: Python program for queries
"""

from pymongo import MongoClient
from bson.objectid import ObjectId

# Connect to MongoDB
client = MongoClient("mongodb+srv://web335_user:s3cret@bellevueuniversity.zv46c.mongodb.net/")
db = client['WhataBook']

# Heading
print("- Welcome to WhatABook -")
print("Find your next favorite book here! \nTo begin select an option.")

# Display books function
def display_books():
    books = db.books.find()
    for book in books:
        print(f"Title: {book['title']}, Author: {book['author']}, Book ID: {book['bookId']}")

# Display a list of books by genre
def display_books_by_genre(genre):
    books = db.books.find({ "genre": genre })
    for book in books:
        print(f"Title: {book['title']}, Genre: {book['genre']}, Author: {book['author']}")

# Search books by Author
def search_books_by_author():
    author = input("Enter author (J.K. Rowling, F. Scott Fitzgerald):  ")
    books = db.books.find({"author": author})
    for book in books:
        print(f"Title: {book['title']}, Author: {book['author']}")

# Display book by bookID
def display_book_by_id():
    book_id = input("Enter book ID (b1001 - b1010): ")
    book = db.books.find_one({"bookId": book_id})
    print(f"Title: {book['title']}, Author: {book['author']}")

# Display a customer's wishlist by customerId
def display_wishlist():
    # Get customer ID from user
    user_id = input("Enter the user ID (c1007, c1008, c1009): ")
    # Create the pipeline to aggregate the data from the database collections
    pipeline = [
        {"$match": {"userId": user_id}},
        # Join the wishlistitems collection with the books collection
        {"$lookup": {"from": "books", "localField": "bookId", "foreignField": "bookId", "as": "book_info"}},
        {"$unwind": "$book_info"}
    ]
    # Aggregate the data
    wishlist_items = db.wishlist.aggregate(pipeline)
    # Get the count of wishlist items
    count = db.wishlist.count_documents({"userId": user_id})
    # Display the data
    if count == 0:
        print("No wishlist items found for customer ID:", user_id)
    else:
        print(f"Wishlist items for customer ID: {user_id}")
    # Loop through the wishlist items and display the data
    for item in wishlist_items:
        print(f"Book Title: {item['book_info']['title']}, Author: {item['book_info']['author']}")

# Main function with basic error handling
def main():
    while True:
        print("\nOptions:")
        print("1: Display Books")
        print("2: Display Books by Genre")
        print("3: Display Books by Author")
        print("4: Display Book by Book ID")
        print("5: Display Wishlist by Customer ID")
        print("6: Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            display_books()
        elif choice == '2':
            print("Genres Include: Fantasy, Adventure, Dark Academia, Fiction")
            genre = input("Enter genre: ")
            display_books_by_genre(genre)
        elif choice == '3':
            search_books_by_author()
        elif choice == '4':
            display_book_by_id()
        elif choice == '5':
            display_wishlist()
        elif choice == '6':
            print("Thank you!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()