```javascript
// Correct usage of $inc operator after ensuring the field is a number
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{quantity: -1}});
//Or, convert the string to number before updating.
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{ $set: { quantity: parseInt(quantity) -1 }});
```