//JavaScript 只有一种数值类型。书写数值时带不带小数点均可。
//JavaScript 数值始终是 64 位的浮点数
//整数（不使用指数或科学计数法）会被精确到 15 位。
//小数的最大数是 17 位，但是浮点的算数并不总是 100% 精准：
//在所有数字运算中，JavaScript 会尝试将字符串转换为数字：除了加法，因为加法被当作级联

var x = 3.14;
var y = 5;
var z = 3.14e5;

//NaN - 非数值 NaN 属于 JavaScript 保留词，指示某个数不是合法数。
//可使用全局 JavaScript 函数 isNaN() 来确定某个值是否是数：
//NaN 是数，typeof NaN 返回 number：
function NaN() {
  var a = x / "apple";
  console.log(a);
  var b = isNaN(a);
  console.log(b);
}

//Infinity （或 -Infinity）是 JavaScript 在计算数时超出最大可能数范围时返回的值。
//Infinity 是数：typeOf Infinity 返回 number。
function Infinity() {
  var a = x / 0;
  console.log(a);
}

//能够使用 toString() 方法把数输出为十六进制、八进制或二进制。
function toString() {
  var a = x.toString(16);
  console.log(a);
  console.log(x);
}

//toExponential() 返回字符串值，它包含已被四舍五入并使用指数计数法的数字。
function toExponential() {
  var a = x.toExponential(2);
  console.log(a);
}

//toFixed() 返回字符串值，它包含了指定位数小数的数字：
function toFixed() {
  var a = x.toFixed(3);
  console.log(a);
}

//toPrecision() 返回字符串值，它包含了指定长度的数字：
function toPrecision() {
  var a = x.toPrecision(5);
  console.log(a);
}

//Number() 可用于把 JavaScript 变量转换为数值：
function _Number() {
  var a = new Date("2019-04-15");
  var b = Number(a);
  console.log(b);
}

//parseInt() 解析一段字符串并返回数值。允许空格。只返回首个数字：
function _parseInt() {
  var a = parseInt("10.23");
  console.log(a);
}


var a = Number.MAX_VALUE
console.log(a);

