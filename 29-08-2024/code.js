// Microsoft Windows [Version 10.0.22631.4037]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\Gurnoor Dhaliwal>mongosh
// Current Mongosh Log ID: 66d14176a2c69c5b1c2710bb
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


// To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
// You can opt-out by running the disableTelemetry() command.

// ------
//    The server generated these startup warnings when booting
//    2024-08-30T09:11:00.110+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> use newdb
// switched to db newdb
// newdb> db.createCollection("User")
// { ok: 1 }
// newdb> db.user.insertOne({name:"gurnoor",age:20,subject:"mongodb"})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d142d4a2c69c5b1c2710bc')
// }
// newdb> db.user.insertMany([{name:"gurii",age:21,subject:"math"},{name:"bob",age:32,subject:"english"},{name:"yash",age:12,subject:"punjabi"}]);
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d14427a2c69c5b1c2710bd'),
//     '1': ObjectId('66d14427a2c69c5b1c2710be'),
//     '2': ObjectId('66d14427a2c69c5b1c2710bf')
//   }
// }
// newdb> db.user.insertOne({date:ISODate()});
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d14489a2c69c5b1c2710c0')
// }
// newdb> db.user.find()
// [
//   {
//     _id: ObjectId('66d142d4a2c69c5b1c2710bc'),
//     name: 'gurnoor',
//     age: 20,
//     subject: 'mongodb'
//   },
//   {
//     _id: ObjectId('66d14427a2c69c5b1c2710bd'),
//     name: 'gurii',
//     age: 21,
//     subject: 'math'
//   },
//   {
//     _id: ObjectId('66d14427a2c69c5b1c2710be'),
//     name: 'bob',
//     age: 32,
//     subject: 'english'
//   },
//   {
//     _id: ObjectId('66d14427a2c69c5b1c2710bf'),
//     name: 'yash',
//     age: 12,
//     subject: 'punjabi'
//   },
//   {
//     _id: ObjectId('66d14489a2c69c5b1c2710c0'),
//     date: ISODate('2024-08-30T04:03:21.165Z')
//   }
// ]
// newdb> db.user.findOne({name:"gurii"});
// {
//   _id: ObjectId('66d14427a2c69c5b1c2710bd'),
//   name: 'gurii',
//   age: 21,
//   subject: 'math'
// }
// newdb> db.user.countDocuments({name:"harleen"})
// 0
// newdb> db.user.estimatedDocumentCount()
// 5
// newdb> db.createCollection("Student")
// { ok: 1 }
// newdb> db.student.insertMany([{Name:"Any",Age:12,Marks:84},{Name:"Robb",Age:13,Marks:67},{Name:"chloe",Age:15,Marks:78},{Name:"Charlie",Age:16,Marks:44}]);
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d14b26a2c69c5b1c2710c1'),
//     '1': ObjectId('66d14b26a2c69c5b1c2710c2'),
//     '2': ObjectId('66d14b26a2c69c5b1c2710c3'),
//     '3': ObjectId('66d14b26a2c69c5b1c2710c4')
//   }
// }
// newdb> db.student.estimatedDocumentCount()
// 4
// newdb> db.Student.updateMany({},{$set:{Marks:100}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// newdb> db.student.updateMany({},{$set:{Marks:100}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 4,
//   modifiedCount: 4,
//   upsertedCount: 0
// }
// newdb> db.student.updateMany({},{$set:{address:"Chitkara University"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 4,
//   modifiedCount: 4,
//   upsertedCount: 0
// }
// newdb> db.student.updateOne({Name:"Any"},{$set:{Grade:"A"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// newdb> db.student.updateOne({Name:"Robb"},{$set:{Grade:"B"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// newdb> db.student.updateOne({Name:"chloe"},{$set:{Grade:"A"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// newdb> db.student.updateOne({Name:"Charlie"},{$set:{Grade:"D"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// newdb> db.collection.find({age:{$eq:25},marks:{$eq:88}});

// newdb> db.student.find({Age:{$eq:13},Grade:{$eq:A}});
// ReferenceError: A is not defined
// newdb> db.student.find({Age:{$eq:13},Grade:{$eq:"A"}});

// newdb> db.student.find({Age:{$eq:13},Grade:{$eq:"B"}});
// [
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c2'),
//     Name: 'Robb',
//     Age: 13,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'B'
//   }
// ]
// newdb> db.student.find({Age:{$gte:12}}});
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:31)

// > 1 | db.student.find({Age:{$gte:12}}});
//     |                                ^
//   2 |

// newdb> db.student.find({Age:{$gte:12}});
// [
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c1'),
//     Name: 'Any',
//     Age: 12,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'A'
//   },
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c2'),
//     Name: 'Robb',
//     Age: 13,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'B'
//   },
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c3'),
//     Name: 'chloe',
//     Age: 15,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'A'
//   },
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c4'),
//     Name: 'Charlie',
//     Age: 16,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'D'
//   }
// ]
// newdb> db.student.find({Marks:{$et:A}});
// ReferenceError: A is not defined
// newdb> db.student.find({Marks:{$et:"A"}});
// MongoServerError[BadValue]: unknown operator: $et
// newdb> db.student.find({Marks:{$eq:"A"}});

// newdb> db.student.find({Grade:{$eq:"A"}});
// [
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c1'),
//     Name: 'Any',
//     Age: 12,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'A'
//   },
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c3'),
//     Name: 'chloe',
//     Age: 15,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'A'
//   }
// ]
// newdb> db.student.find({Age:{$not:{$eq:14}}}):
// Uncaught:
// SyntaxError: Missing semicolon. (1:38)

// > 1 | db.student.find({Age:{$not:{$eq:14}}}):
//     |                                       ^
//   2 |

// newdb> db.student.find({Age:{$not:{$eq:14}}});
// [
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c1'),
//     Name: 'Any',
//     Age: 12,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'A'
//   },
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c2'),
//     Name: 'Robb',
//     Age: 13,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'B'
//   },
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c3'),
//     Name: 'chloe',
//     Age: 15,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'A'
//   },
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c4'),
//     Name: 'Charlie',
//     Age: 16,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'D'
//   }
// ]
// newdb> db.student.find({Age:{$nor:{$eq:14}}});
// MongoServerError[BadValue]: unknown operator: $nor
// newdb> db.student.find({$nor:[{Age:14},Grade:"A"}]});
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:37)

// > 1 | db.student.find({$nor:[{Age:14},Grade:"A"}]});
//     |                                      ^
//   2 |

// newdb> db.student.find({$nor:[{Age:14},{Grade:"A"}]});
// [
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c2'),
//     Name: 'Robb',
//     Age: 13,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'B'
//   },
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c4'),
//     Name: 'Charlie',
//     Age: 16,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'D'
//   }
// ]
// newdb> db.student.find({$or:[{Age:14},{Grade:"A"}]});
// [
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c1'),
//     Name: 'Any',
//     Age: 12,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'A'
//   },
//   {
//     _id: ObjectId('66d14b26a2c69c5b1c2710c3'),
//     Name: 'chloe',
//     Age: 15,
//     Marks: 100,
//     address: 'Chitkara University',
//     Grade: 'A'
//   }
// ]
// newdb>
