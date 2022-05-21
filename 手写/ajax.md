### 通过 XMLHttpRequest 构造函数创建一个异步对象 xmlhttp, IE6, IE5 使用 ActiveXObject 创建，创建的这个异步对象上有很多属性和方法，常用的有：

- onreadystatechange

监听异步对象请求状态码 readyState 的改变，每当 readyState 改变时，就会触发 onreadystatechange 事件

- readyState：请求状态码

- readyState 表示异步对象目前的状态，状态码从 0 到 4：
  0: 表示请求未初始化，还没有调用 open()
  1: 服务器连接已建立，但是还没有调用 send()
  2: 请求已接收，正在处理中（通常现在可以从响应中获取内容头）
  3: 请求处理中，通常响应中已有部分数据可用了，没有全部完成
  4: 当 readyState 状态码为 4 时，表示请求已完成；此阶段确认全部数据都已经解析完毕，可以通过异步对象的属性获取对应数据

- status：http 状态码

- http 状态码表示成功的 http 状态码有 xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status == 304

- responseText：后台返回的字符串形式的响应数据

- responseXML：后台返回的 XML 形式的响应数据
