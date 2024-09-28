"""
Title: Gutierrez_usersp2.py
Author: Angelica Gutierrez
Date: 29 September 2024
Description: Hands-On 5.2: Python with MongoDB, Part II
"""

# Import the MongoClient
from pymongo import MongoClient
import datetime 

# Build a connection string to connect to
client = MongoClient("mongodb+srv://web335_user:s3cret@bellevueuniversity.zv46c.mongodb.net/")

# Configure a variable to access the web335DB
db = client['web335DB']

# Create a new user document and added it to the users collection
gutierrez = {
    "firstName": "Angelica",
    "lastName": "Gutierrez",
    "employeeId": "1011",
    "email": "angieguti@me.com",
    "dateCreated": datetime.datetime.now()
}

# Insert the document into the users collection
gutierrez_user_id = db.users.insert_one(gutierrez).inserted_id
print(gutierrez_user_id)

# Prove the insert worked by searching the collection for the document
print("\n Displaying User:")
print(db.users.find_one({
  "employeeId": "1011"
}))


# Update the email address of the newly created user document
db.users.update_one(
  {"employeeId": "1011"},
  {"$set": {
      "email": "angie.guti@me.com"
  }}
)

# Prove the update worked by searching the collection for the user by employeeId
print("\n Updated Email:")
print(db.users.find_one({
  "employeeId": "1011"
}))

# Build a query to remove a user document
result = db.users.delete_one({
  "employeeId": "1011"
})

# Display the results of the query
print("\n Deleting:")
print(result)

# Prove the delete worked by searching the collection for the deleted document
print("\n Displaying User:")
print(db.users.find_one({
  "employeeId": "1011"
}))
