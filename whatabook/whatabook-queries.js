/**
 * Title: whatabook_queries.js
 * Author: BSON Builders
 * Date: 13 October 2024
 * Description: MongoDB Queries for the WhatABook database.
 */

// Query to display a list of books
db.books.find().pretty();

// Query to display a list of books by genre
db.books.find({ genre: 'Fantasy' })

// Query to display a list of books by author
db.books.find({ author: 'J.K. Rowling' })

// Query to display a book by bookID
db.books.findOne({ bookId: 'b1001' })

// Query to display a wishlist by userId
db.wishlist.findOne({ userId: 'c1007' })

// Add books to a customer’s wishlist.
db.wishlist.updateOne({ customerId: 'c1001'}, {$addToSet: { bookId: { $each: ['b1010']}}})

// Remove book from a customer’s wishlist
db.wishlist.updateOne({ customerId: 'c1001'}, {$pull: { bookId: 'b1010' }})