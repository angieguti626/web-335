/**
 * Title: whatabook_installationscript.js
 * Author: BSON Builders
 * Date: 13 October 2024
 * Description: MongoDB Shell Installation Scripts for the WhatABook database.
 */

/**
 * Database and Collection clean-up.
 */
db.dropDatabase();
db.books.drop();
db.users.drop();
db.wishlist.drop()

/**
 * Create Book documents.
 */

const book1 = {
  "bookId": "b1001",
  "title": "The Enchanted Forest",
  "genre": "Fantasy",
  "author": "Elara Moonshadow"
};

const book2 = {
  "bookId": "b1002",
  "title": "Mysteries of the Deep",
  "genre": "Adventure",
  "author": "James Powell"
};

const book3 = {
  "bookId": "b1003",
  "title": "Hatchet",
  "genre": "Adventure",
  "author": "Gary Paulsen"
};

const book4 = {
  "bookId": "b1004",
  "title": "Harry Potter and the Half-Blood Prince",
  "genre": "Fantasy",
  "author": "J.K. Rowling"
};

const book5 = {
  "bookId": "b1005",
  "title": "The Secret History",
  "genre": "Dark Academia",
  "author": "Donna Tartt"
};

const book6 = {
  "bookId": "b1006",
  "title": "If We Were Villians",
  "genre": "Dark Academia",
  "author": "M.L. Rio"
};

const book7 = {
  "bookId": "b1007",
  "title": "The Great Gatsby",
  "genre": "Fiction",
  "author": "F. Scott Fitzgerald"
};

const book8 = {
  "bookId": "b1008",
  "title": "To Kill a Mockingbird",
  "genre": "Fiction",
  "author": "Harper Lee"
};

const book9 = {
  "bookId": "b1009",
  "title": "Treasure Island",
  "genre": "Adventure",
  "author": "Robert Louis Stevenson"
};

const book10 = {
  "bookId": "b1010",
  "title": "Alice’s Adventures in Wonderland",
  "genre": "Fantasy",
  "author": "Libby Hamilton"
};

/**
 * Create User documents.
 */
const user1 = {
  "userId": "c1001",
  "firstName": "Luna",
  "lastName": "Starlight"
};

const user2 = {
  "userId": "c1002",
  "firstName": "Orion",
  "lastName": "Skywalker"
};

const user3 = {
  "userId": "c1007",
  "firstName": "Angelica",
  "lastName": "Gutierrez"
};

const user4 = {
  "userId": "c1008",
  "firstName": "Amanda",
  "lastName": "Rovey"
};

const user5 = {
  "userId": "c1009",
  "firstName": "Malcolm",
  "lastName": "Abdullah"
};

/**
 * Create Wishlist documents.
 */
const wishlist1 = {
  "userId": "c1007", 
  "bookId": [ "b1001", "b1002", "b1003", "b1004", "b1005" ]
};

const wishlist2 = {
  "userId": "c1008", 
  "bookId": [ "b1003", "b1004", "b1005", "b1006", "b1007" ]
};

const wishlist3 = {
  "userId": "c1009", 
  "bookId": [ "b1003", "b1007", "b1008", "b1009", "b10010" ]
};

/**
 * Insert the newly created documents.
 */
db.books.insertMany([book1, book2, book3, book4, book5, book6, book7, book8, book9, book10]);
db.users.insertMany([user1, user2, user3, user4, user5]);
db.wishlist.insertMany([wishlist1, wishlist2, wishlist3]);
