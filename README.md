# MongoDB $inc Operator Error: Non-Numeric Field
This repository demonstrates a common error when using the MongoDB `$inc` operator: attempting to increment a field that is not a number.  The `$inc` operator is designed to increment numeric fields.  If the target field is a string or other non-numeric type, it will result in an error or unexpected behavior. 

**The bug:** The script attempts to increment the quantity field when it's a string.

**Solution:** Ensure the quantity field is of type number before applying $inc. The solution involves casting the field or using the correct operator for string fields. 
