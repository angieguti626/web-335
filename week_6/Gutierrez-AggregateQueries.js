/*
Title: Gutierrez-AggregateQueries.js
Author: Angelica Gutierrez
Date: 22 September 2024
Description: Hands-On 6.1: Aggregate Queries
*/

// Displaying all students
db.students.find();

// Adding a new student
student = { firstName: 'Angelica', lastName: 'Gutierrez', studentId: 's1019', houseId: 'h1010' };
db.students.insertOne(student);

// Checking to see if it was added
db.students.findOne({ firstName: 'Angelica' });

// Updating student's house
db.students.updateOne({ studentId: 's1019' }, { $set: { houseId: 'h1008' } });

// Proving it was updated
db.students.findOne({ studentId: 's1019' });

// Deleting student created
db.students.deleteOne({ studentId: 's1019' });

// Checking to see if it was deleted
db.students.findOne({ studentId: 's1019' });

// Displaying all students by house
db.houses.aggregate([
    {
        $lookup:
        {
            from: 'students',
            localField: 'houseId',
            foreignField: 'houseId',
            as: 'student_docs'
        }
    }]);

// Displaying all students in Gryffindor
db.houses.aggregate([{
    $match: { houseId: 'h1007' }
},
{
    $lookup:
    {
        from: 'students',
        localField: 'houseId',
        foreignField: 'houseId',
        as: 'student_docs'
    }
}
]);

// Displaying all students with an Eagle mascot
db.houses.aggregate([{
    $match: { mascot: 'Eagle' }
},
{
    $lookup:
    {
        from: 'students',
        localField: 'houseId',
        foreignField: 'houseId',
        as: 'student_docs'
    }
}
]);