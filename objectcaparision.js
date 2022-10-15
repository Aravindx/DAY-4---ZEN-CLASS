//1.How to compare two JSON object have same properties

var obj1={name:"character 1",age:8};
var obj2={age:8,name:"character 2"};
var op=JSON.stringify(obj1)===JSON.stringify(obj2)



console.log(op)
