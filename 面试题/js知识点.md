1. 类数组转化为数组

- [].slice.call()
  [].slice.call( arguments )
  // 等效于
  Array.prototype.slice.call( arguments )
- Array.from()
- ES6 语法：展开运算符 [...arguments]
