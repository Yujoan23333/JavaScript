//取幂运算符（**）将第一个操作数提升到第二个操作数的幂
var x = 5;
var z = x ** 2;
z = Math.pow(x, 2);
console.log(z);

//数据类型
var x = true;
var length = 6;
var cars = ["Porsche", "Volvo", "BWM"];
var person = {
  firstname: "Bill",
  lastname: "Gates",
  age: 62,
  eyeColor: "blue",
};
var x = typeof null;
console.log(x);

//函数
var x = function () {
  var a = 1,
    b = 2;
  return a + b;
};
console.log(x());

/*类*/
var person = {
  firstName: "Bill",
  lastName: "Gates",
  id: 678,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
