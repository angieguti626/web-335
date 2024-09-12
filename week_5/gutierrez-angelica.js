/**
	Title: gutierrez-angelica.js
    Author: Angelica Gutierrez
    Date: 15 September 2024
    Description: MongoDB Shell Scripts for week 5 assignment
 */

// To find all users
db.users.find();


// ADDING USER
// Creating new user using all required fields
user = {
    firstName:'Pete',
    lastName:'Wentz',
    employeeId:1013,
    email: 'pwentz@me.com',
    dateCreated:new Date()
};
// Once user is in database, insert them
db.users.insertOne(user);


// UPDATE INFO
// Seeing current info before changes
db.users.findOne({
    lastName: 'Mozart'
});

// Setting email to new email
db.users.updateOne({
    lastName: 'Mozart'},
    {$set:{email:'mozart@me.com'}
});

// Checking to see if info updated
db.users.findOne({
    lastName: 'Mozart'
});


// DISPLAY CERTAIN INFO
// Set _id to 0 since we do not need ID
// Need to set firstName, lastName, and email to true to get info displayed
db.users.find({},{
    _id:0,
    firstName: true,
    lastName: true,
    email: true
});

