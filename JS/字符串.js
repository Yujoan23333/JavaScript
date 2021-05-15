var first = "Hello";
var last = "Kitty";

/*
  所有字符串方法都会返回新字符串。它们不会修改原始字符串。
  正式地说：字符串是不可变的：字符串不能更改，只能替换。
*/

//indexOf() 方法返回字符串中指定文本首次出现的索引（位置）：未找到文本返回-1
function indexof() {
  var a = first.indexOf("ll");
  console.log(a);
}

//lastIndexOf() 方法返回指定文本在字符串中最后一次出现的索引：未找到文本返回-1
//支持第二个参数，由后往前检索
function lastIndexOf() {
  var a = first.lastIndexOf("l");
  console.log(a);
}

//search() 方法搜索特定值的字符串，并返回匹配的位置：
//search() 方法无法设置第二个开始位置参数。
//indexOf() 方法无法设置更强大的搜索值（正则表达式）。
function search() {
  var a = first.search("l");
  console.log(a);
}

//slice() 提取字符串的某个部分并在新字符串中返回被提取的部分。
//该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。
//如果省略第二个参数，则该方法将裁剪字符串的剩余部分：
function slice() {
  var a = first.slice(2, 4);
  console.log(a);
}

//substring() 方法类似于 slice()。不同之处在于 substring() 无法接受负的索引。
//substr() 类似于 slice()。不同之处在于第二个参数规定被提取部分的长度。

//replace() 方法用另一个值替换在字符串中指定的值：
//replace() 方法不会改变调用它的字符串。它返回的是新字符串。
//默认地，replace() 只替换首个匹配：
function replace() {
  var a = first.replace("He", "abcde");
  console.log(a);
  console.log(first);
}

//通过 toUpperCase() 把字符串转换为大写：
//通过 toLowerCase() 把字符串转换为小写：
function toUpperCase() {
  var a = first.toUpperCase();
  console.log(a);
  var a = first.toLowerCase();
  console.log(a);
}

//concat() 连接两个或多个字符串：
function concat() {
  var a = first.concat("", last);
  console.log(a);
}

//trim() 方法删除字符串两端的空白符：
function trim() {
  var a = "   abc   ";
  var b = a.trim();
  console.log(b);
}

//charAt() 方法返回字符串中指定下标（位置）的字符串：
function charAt() {
  var a = first.charAt(1);
  console.log(a);
}

//字符串最好不使用属性访问

//可以通过 split() 将字符串转换为数组：
function split() {
  var a = first.split();
  console.log(a);
}

split();
