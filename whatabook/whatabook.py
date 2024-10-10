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

# Display a list of books
def display_books():
    books = db.books.find()
    for book in books:
        print(f"Title: {book['title']}, Genre: {book['genre']}, Author ID: {book['author_id']}")

# Display a list of books by genre
def display_books_by_genre(genre):
    books = db.books.find({ "genre": genre })
    for book in books:
        print(f"Title: {book['title']}, Genre: {book['genre']}, Author ID: {book['author_id']}")

# Display a customer's wishlist by customerId
def display_wishlist(customer_id):
    customer = db.users.find_one({ "_id": ObjectId(customer_id) })
    if customer:
        for order in customer['orders']:
            print(f"Order ID: {order['order_id']}, Order Date: {order['orderDate']}")
            for detail in order['orderDetails']:
                book = db.books.find_one({ "_id": detail['book_id'] })
                print(f"Book Title: {book['title']}, Quantity: {detail['quantity']}, Price: {detail['price']}")
    else:
        print("Invalid customer ID")

# Main function with basic error handling
def main():
    while True:
        print("\nOptions:")
        print("1. Display a list of books")
        print("2. Display a list of books by genre")
        print("3. Display a customer's wishlist by customerId")
        print("4. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            display_books()
        elif choice == '2':
            print("Genres: Fantasy, Adventure, Dark Academia, Fiction")
            genre = input("Enter genre: ")
            display_books_by_genre(genre)
        elif choice == '3':
            customer_id = input("Enter customer ID: ")
            display_wishlist(customer_id)
        elif choice == '4':
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()