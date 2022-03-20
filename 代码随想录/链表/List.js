function ListNode(val) {
    this.val = val // 节点数据
    this.next = null // 节点指针域
}
function LinkList(arr) {
    if (arr === undefined) {
        this.head = null
        this.size = 0
    } else if (Array.isArray(arr)) {
        this.head = null
        this.size = arr.length
        this.generateList(arr)
    }
}
LinkList.prototype.generateList = function (arr) {
    let node = new ListNode(arr[0])
    this.head = node
    for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i])
        node = node.next
    }
}