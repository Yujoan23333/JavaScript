//可以在数组保存对象。您可以在数组中保存函数。你甚至可以在数组中保存数组：

var cars = ["Saab", "Volvo", "BMW"];

var x = cars.length;
//向数组添加新元素的最佳方法是使用 push() 方法：
//也可以使用 length 属性向数组添加新元素：
function push() {
  cars.push("DaZhong");
  var a = cars[cars.length - 1];
  console.log(a);

  cars[cars.length] = "YiQi";
  var b = cars[cars.length - 1];
  console.log(b);
}

//如何确定标识符是否是数组
/*
    typeof 运算符返回 "object"，因为 JavaScript 数组属于对象。
    ECMAScript 5 定义了新方法 Array.isArray()：
    假如对象由给定的构造器创建，则 instanceof 运算符返回 true：
*/

//JavaScript 方法 toString() 把数组转换为数组值（逗号分隔）的字符串。
function toString() {
  var a = cars.toString();
  console.log(a);
}

//join() 方法也可将所有数组元素结合为一个字符串。还可以规定分隔符：
function join() {
  var a = cars.join();
  console.log(a);
}

//shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。
//unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素：
function shift() {
  cars.shift();
  var a = cars.toString();
  console.log(a);
}

//既然 JavaScript 数组属于对象，其中的元素就可以使用 JavaScript delete 运算符来删除：
//但使用 delete 会在数组留下未定义的空洞。请使用 pop() 或 shift() 取而代之。

//使用 splice() 来删除元素
//通过聪明的参数设定，您能够使用 splice() 在数组中不留“空洞”的情况下移除元素：
function splice() {
  cars.splice(1, 1);
  //第一个参数（0）定义新元素应该被添加（接入）的位置。
  //第二个参数（1）定义应该删除多个元素。
  var a = cars.toString();
  console.log(a);
}

//concat() 方法通过合并（连接）现有数组来创建一个新数组
//方法不会更改现有数组。它总是返回一个新数组。
function concat() {
  var cars_duplication = ["BWM", "Apple"];
  var a = cars.concat(cars_duplication);
  a = a.toString();
  console.log(a);
}

//slice() 方法用数组的某个片段切出新数组。
//可接受两个参数，比如 (1, 3)。该方法会从开始参数选取元素，直到结束参数（不包括）为止。
function slice() {
  var a = cars.slice(1);
  a = a.toString();
  console.log(a);
}

//sort() 方法是最强大的数组方法之一
//reverse() 方法反转数组中的元素。
function sort() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var a = fruits.sort();
  console.log(fruits);
}

//升序排序：
function shengxu() {
  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function (a, b) {
    return a - b;
  });
}

//降序排序：
function jiangxu() {
  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function (a, b) {
    return b - a;
  });
}

//您可以使用 Math.max.apply 来查找数组中的最高值：
//您可以使用 Math.min.apply 来查找数组中的最低值：
function Max_Min() {
  var value = [1, 2, 3, 4, 5];
  var a = Math.max.apply(null, value);
  console.log(a);
  var b = Math.min.apply(null, value);
  console.log(b);
}

//forEach() 方法为每个数组元素调用一次函数（回调函数）
function forEach() {
  var txt = "";
  var number = [1, 2, 3];
  number.forEach(disposal);
  function disposal(value) {
    txt = txt + value + " ";
  }
  console.log(txt);
}

//map() 方法通过对每个数组元素执行函数来创建新数组。
function map() {
  var numbers1 = [45, 4, 9, 16, 25];
  var numbers2 = numbers1.map(myFunction);

  function myFunction(value) {
    return value * 2;
  }
  console.log(numbers2);
}

//filter() 方法创建一个包含通过测试的数组元素的新数组。
function filter() {
  var numbers = [45, 4, 9, 16, 25];
  var over18 = numbers.filter(myFunction);

  function myFunction(value) {
    return value > 18;
  }
  console.log(over18);
}

//every() 方法检查所有数组值是否通过测试。
//some() 方法检查某些数组值是否通过了测试。
function every() {
  var numbers = [45, 4, 9, 16, 25];
  var allOver18 = numbers.every(myFunction);

  function myFunction(value) {
    return value > 18;
  }
  console.log(allOver18);
}

//indexOf() 方法在数组中搜索元素值并返回其位置。
//Array.lastIndexOf() 与 Array.indexOf() 类似，但是从数组结尾开始搜索。

//findIndex() 方法返回通过测试函数的第一个数组元素的索引。
function findIndex() {
  var numbers = [4, 9, 16, 25, 29];
  var first = numbers.findIndex(myFunction);

  function myFunction(value) {
    return value > 18;
  }
  console.log(first);
}

findIndex();
