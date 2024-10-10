/**
 * Title: whatabook_queries.js
 * Author: BSON Builders
 * Date: 09.30.2024
 * Description: MongoDB Queries for the WhatABook database.
 */

// 1. Display a list of books
// This query retrieves all books from the books collection.
db.books.find().pretty();

/**
 * Display a list of books by genre
 * This query retrieves books from the books collection that match the specified genre.
 * @param {string} genre - The genre of the books to retrieve.
 */
db.books.find({ genre: "Fantasy" }).pretty();

/**
 * Display a list of books by author
 * This query retrieves books from the books collection that match the specified author.
 * It uses the $lookup aggregation stage to join the books collection with the authors collection.
 * @param {ObjectId} author_id - The ObjectId of the author whose books to retrieve.
 */
db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "author"
    }
  },
  {
    $match: { "author._id": ObjectId("author_id_1") }
  }
]).pretty();

/**
 * Display a book by bookId
 * This query retrieves a book from the books collection that matches the specified bookId.
 * @param {ObjectId} book_id - The ObjectId of the book to retrieve.
 */
db.books.find({ _id: ObjectId("book_id_1") }).pretty();

/**
 * Display a wishlist by customerId
 * This query retrieves the wishlist (orders) of a customer from the users collection that matches the specified customerId.
 * @param {ObjectId} customer_id - The ObjectId of the customer whose wishlist to retrieve.
 */
db.users.find({ _id: ObjectId("user_id_1") }, { orders: 1 }).pretty();

/**
 * Add books to a customer’s wishlist
 * This query adds a book to a customer's wishlist (orders) in the users collection.
 * @param {ObjectId} customer_id - The ObjectId of the customer whose wishlist to update.
 * @param {ObjectId} book_id - The ObjectId of the book to add to the wishlist.
 * @param {number} quantity - The quantity of the book to add.
 * @param {number} price - The price of the book to add.
 */
db.users.updateOne(
  { _id: ObjectId("user_id_1") },
  {
    $push: {
      "orders.0.orderDetails": {
        book_id: ObjectId("book_id_2"),
        quantity: 1,
        price: 12.99
      }
    }
  }
);

/**
 * Remove book from a customer’s wishlist
 * This query removes a book from a customer's wishlist (orders) in the users collection.
 * @param {ObjectId} customer_id - The ObjectId of the customer whose wishlist to update.
 * @param {ObjectId} book_id - The ObjectId of the book to remove from the wishlist.
 */
db.users.updateOne(
  { _id: ObjectId("user_id_1") },
  {
    $pull: {
      "orders.0.orderDetails": { book_id: ObjectId("book_id_1") }
    }
  }
);