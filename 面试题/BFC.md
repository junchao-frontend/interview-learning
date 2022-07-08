# BFC

块级格式化上下文，它是指一个独立的块级渲染区域，或者说是一个隔离的独立容器， 只有 block-level BOX 参与
该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关

# 从一个现象开始说起

- 一个盒子不设置 height，当内容子元素都浮动时，无法撑起自身
- 这个盒子没有形成 BFC

# 如何创建 BFC

- float 的值不是 none
- position 为 absolute 或 fixed
- display 为 inline-block，table-cell，table-caption，flex， inline-flex
- overflow：hidden （这个最科学）

# BFC 特性

- 内部的 Box 会在垂直方向上一个接一个的放置
- 垂直方向上的距离有 margin 决定
- bfc 的区域不会与 float 的元素区域 chongdie
- 计算 bfc 的高度时，浮动元素也参与计算
- bfc 就是页面是的一个独立容器 里面的子元素也不会影响外面元素

# BFC 的其他作用

- BFC 可以取消盒子 margin 的塌陷
- BFC 可以阻止元素被浮动元素覆盖
