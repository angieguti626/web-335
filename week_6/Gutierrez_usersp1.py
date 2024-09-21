"""
Title: Gutierrez_usersp1.py
Author: Angelica Gutierrez
Date: 8 September 2024
Description: Hands-On 4.2: Python with MongoDB, Part I
"""

# import the mongo client
from pymongo import MongoClient
import datetime

# connection string
client = MongoClient("mongodb+srv://web335_user:s3cret@cluster0.lujih.mongodb.net/web335DBretryWrites=true&w=majority")

# configure a variable to access the web335DB
db = client['web335DB']

# code to display all documents in the collection
print("\n All Documents:")
cursor = db.users.find({}, {"firstName": 1, "lastName": 1})
for user in cursor:
    print(user)

# code to display document where employeeId is 1011
print("\n EmployeeID is 1011:")
print(db.users.find_one({"employeeId": "1011"}))

# code to display document where lastName is Mozart
print("\n Last Name Mozart")
print(db.users.find_one({"lastName": "Mozart"}))