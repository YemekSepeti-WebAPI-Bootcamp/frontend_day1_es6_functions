const myOldObj = { key1: "value1", key2: "value2" };

myOldObj.key3 = "yeni atama";

const myNewObj = myOldObj;

const myObj = { ...myOldObj };

myOldObj.key1 = "value degisti";

console.log(myObj);
