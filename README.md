# study-data-reactive

# 数据响应式原理

`object.defineProperty()` 数据劫持/数据代理
`object.defineProperty()`方法会直接在一个对象上定义一个新属性,或者修改一个对象都现有属性,并返回此对象
`object.defineProperty()`方法可以设置一些额外隐藏的属性,比如`writable`

`getter/setter` 需要变量周转才能工作 `temp`

`defineReactive` 函数 (构建了一个闭包环境)

`Observer`将一个正常的 object 转换为每个层级的属性都是响应式(可以被侦测的)的 object

## 数组如何形成响应式

`push` `pop` `shift` `unshift` `splice` `sort` `reserve` 这七种方法被改写了

## 依赖

`依赖` : 需要用到数据的地方,称为依赖

在 `getter` 中收集依赖,在 `setter` 中触发依赖

`Dep类` : 把依赖收集的代码封装成一个 Dep 类,它专门用来管理依赖,`每个 Observer 的实例,成员中都有一个 Dep 的实例`

`Watcher` : Watcher 是一个中介,数据发生变化时通过 Watcher 中转,通知组件

代码实现的巧妙之处 :
Watcher 把自己设置到全局的一个指定位置,然后读取数据,因为读取了数据,所以会触发这个数据的 getter,在 getter 中就能得到当前正在读取数据的 watcher,并把这个 watcher 收集到 Dep 中

![Image text](https://github.com/tucky18/study-data-reactive/blob/main/img/%E6%95%B0%E6%8D%AE%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.png)
