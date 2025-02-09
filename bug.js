```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{quantity: -1}});
//The quantity field is not of Number type, it's a string. 
```