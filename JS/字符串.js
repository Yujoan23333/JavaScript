var first = "Hello";
var last = "Kitty";

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

replace();
