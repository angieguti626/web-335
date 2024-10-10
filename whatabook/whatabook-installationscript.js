/**
 * Title: whatabook_installationscript.js
 * Author: BSON Builders
 * Date: 09.30.2024
 * Description: MongoDB Shell Installation Scripts for the WhatABook database.
 */

/**
 * Database and Collection clean-up.
 */
db.dropDatabase();
db.books.drop();
db.users.drop();
db.authors.drop();

/**
 * Create Book documents.
 */
const book1 = {
  "_id": ObjectId("book_id_1"),
  "title": "The Enchanted Forest",
  "genre": "Fantasy",
  "author_id": ObjectId("author_id_1")
};

const book2 = {
  "_id": ObjectId("book_id_2"),
  "title": "Mysteries of the Deep",
  "genre": "Adventure",
  "author_id": ObjectId("author_id_2")
};

const book3 = {
  "_id": ObjectId("book_id_3"),
  "title": "Hatchet",
  "genre": "Adventure",
  "author_id": ObjectId("author_id_3")
};

const book4 = {
  "_id": ObjectId("book_id_4"),
  "title": "Harry Potter and the Half-Blood Prince",
  "genre": "Fantasy",
  "author_id": ObjectId("author_id_4")
};

const book5 = {
  "_id": ObjectId("book_id_5"),
  "title": "The Secret History",
  "genre": "Dark Academia",
  "author_id": ObjectId("author_id_5")
};

const book6 = {
  "_id": ObjectId("book_id_6"),
  "title": "If We Were Villians",
  "genre": "Dark Academia",
  "author_id": ObjectId("author_id_6")
};

const book7 = {
  "_id": ObjectId("book_id_7"),
  "title": "The Great Gatsby",
  "genre": "Fiction",
  "author_id": ObjectId("author_id_7")
};

const book8 = {
  "_id": ObjectId("book_id_8"),
  "title": "To Kill a Mockingbird",
  "genre": "Fiction",
  "author_id": ObjectId("author_id_8")
};

const book9 = {
  "_id": ObjectId("book_id_9"),
  "title": "Treasure Island",
  "genre": "Adventure",
  "author_id": ObjectId("author_id_9")
};

const book10 = {
  "_id": ObjectId("book_id_10"),
  "title": "Alice’s Adventures in Wonderland",
  "genre": "Fantasy",
  "author_id": ObjectId("author_id_10")
};

/**
 * Create User documents.
 */
const user1 = {
  "_id": ObjectId("user_id_1"),
  "firstName": "Luna",
  "lastName": "Starlight",
  "email": "luna.starlight@example.com",
  "orders": [
    {
      "order_id": ObjectId(),
      "orderDate": ISODate("2024-09-29T00:00:00Z"),
      "orderDetails": [
        {
          "book_id": book1._id,
          "quantity": 1,
          "price": 15.99
        }
      ]
    }
  ]
};

const user2 = {
  "_id": ObjectId("user_id_2"),
  "firstName": "Orion",
  "lastName": "Skywalker",
  "email": "orion.skywalker@example.com",
  "orders": [
    {
      "order_id": ObjectId(),
      "orderDate": ISODate("2024-09-29T00:00:00Z"),
      "orderDetails": [
        {
          "book_id": book2._id,
          "quantity": 2,
          "price": 12.99
        }
      ]
    }
  ]
};

/**
 * Create Author documents.
 */
const author1 = {
  "_id": ObjectId("author_id_1"),
  "firstName": "Elara",
  "lastName": "Moonshadow"
};

const author2 = {
  "_id": ObjectId("author_id_2"),
  "firstName": "Drake",
  "lastName": "Stormrider"
};

const author3 = {
  "_id": ObjectId("author_id_3"),
  "firstName": "Gary",
  "lastName": "Paulsen"
};

const author4 = {
  "_id": ObjectId("author_id_4"),
  "firstName": "J.K.",
  "lastName": "Rowling"
};

const author5 = {
  "_id": ObjectId("author_id_5"),
  "firstName": "Donna",
  "lastName": "Tartt"
};

const author6 = {
  "_id": ObjectId("author_id_6"),
  "firstName": "M.L.",
  "lastName": "Rio"
};

const author7 = {
  "_id": ObjectId("author_id_7"),
  "firstName": "F. Scott",
  "lastName": "Fitzgerald"
};

const author8 = {
  "_id": ObjectId("author_id_8"),
  "firstName": "Harper",
  "lastName": "Lee"
};

const author9 = {
  "_id": ObjectId("author_id_9"),
  "firstName": "Robert Louis",
  "lastName": "Stevenson"
};

const author10 = {
  "_id": ObjectId("author_id_10"),
  "firstName": "Libby",
  "lastName": "Hamilton"
};

/**
 * Insert the newly created documents.
 */
db.books.insertMany([book1, book2]);
db.users.insertMany([user1, user2]);
db.authors.insertMany([author1, author2]);
