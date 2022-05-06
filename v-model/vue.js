class Vue {
  constructor(obj_instance) {
    this.$data = obj_instance.data
    Observer(this.$data)
    Compile(obj_instance.el, this)
  }
}

function Observer (data_instance) {
  if (!data_instance || typeof data_instance !== 'object') return
  const Dep = new Dependency()
  Object.keys(data_instance).forEach(key => {
    let value = data_instance[key]
    Observer(value)
    Object.defineProperty(data_instance, key, {
      enumerable: true,
      configurable: true,
      get () {
        // console.log(`访问了属性 ${key}, value 为 ${value}`)
        // 订阅者加入到依赖实例的数组
        Dependency.temp && Dep.addSub(Dependency.temp)
        return value
      },
      set (newVal) {
        value = newVal
        // console.log(newVal)
        Dep.notify()
        Observer(newVal)
      }
    })
  })
}
function Compile (element, vm) {
  vm.$el = document.querySelector(element)
  let fragment = document.createDocumentFragment()
  let Child
  while (Child = vm.$el.firstChild) {
    fragment.appendChild(Child)
  }
  fragment_compile(fragment)
  vm.$el.appendChild(fragment)
  function fragment_compile (node) {
    const rule = /\{\{\s*(\S+)\s*\}\}/
    if (node.nodeType === 3) {
      const xxx = node.nodeValue
      let result_regex = rule.exec(node.nodeValue)
      if (result_regex) {
        const value = result_regex[1].split('.').reduce((total, current) => {
          return total[current]
        }, vm.$data)
        node.nodeValue = xxx.replace(rule, value)
        // 创建订阅者
        new Watcher(vm, result_regex[1], newValue => {
          node.nodeValue = xxx.replace(rule, newValue)
        })
      }
    }
    if (node.nodeType === 1 && node.nodeName === "INPUT") {
      // 将attributes转为数组
      let attr = [...node.attributes]
      attr.forEach(i => {
        if (i.nodeName === 'v-model') {
          const value = i.nodeValue.split('.').reduce((total, current) => total[current], vm.$data)
          node.value = value
          new Watcher(vm, i.nodeValue, newValue => {
            node.value = newValue
          })
          node.addEventListener('input', (e) => {
            const arr1 = i.nodeValue.split('.')
            const arr2 = arr1.slice(0, arr1.length - 1)
            const final = arr2.reduce((total, current) => total[current], vm.$data)
            final[arr1[arr1.length - 1]] = e.target.value
          })
        }
      })
    }
    node.childNodes.forEach(item => fragment_compile(item))
  }
}

// 依赖 - 收集和通知订阅者
class Dependency {
  constructor() {
    this.subscribers = []
  }
  addSub (sub) {
    this.subscribers.push(sub)
  }
  notify () {
    this.subscribers.forEach(sub => sub.update())
  }
}

// 订阅者
class Watcher {
  constructor(vm, key, callback) {
    this.vm = vm
    this.key = key
    this.callback = callback
    // 临时属性 触发getter
    Dependency.temp = this
    key.split('.').reduce((total, current) => {
      return total[current]
    }, vm.$data)
    Dependency.temp = null
  }
  update () {
    let value = this.key.split('.').reduce((total, current) => {
      return total[current]
    }, this.vm.$data)
    this.callback(value)
  }
}