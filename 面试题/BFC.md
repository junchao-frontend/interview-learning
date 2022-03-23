# BFC

块级格式化上下文，它是指一个独立的块级渲染区域，只有block-level BOX参与
该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关

# 从一个现象开始说起

- 一个盒子不设置height，当内容子元素都浮动时，无法撑起自身
- 这个盒子没有形成BFC

# 如何创建BFC

- float的值不是none
- position不是static或者 relative
- display的不是inline-block flex 或者inline-flex
- overflow：hidden （这个最科学）


# BFC的其他作用
- BFC可以取消盒子margin的塌陷
- BFC可以阻止元素被浮动元素覆盖