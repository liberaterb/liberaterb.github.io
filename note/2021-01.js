var text20210120_00 = 
`
# 2021-01-20
> 该不该坚持呢该如何选择坚持的方式呢真难先坚持一段时间吧毕竟还没有钱

> plan
1. ★★★★★ vue.js
2. ★★★★☆ js基础
3. ★★★☆☆ HTML5
4. ★★★☆☆ CSS
5. ★★★☆☆ webpack
6. ★★★☆☆ node.js
7. ★★★☆☆ typescript
8. ★★☆☆☆ sass less
9. ★★☆☆☆ 小程序
10. ★★☆☆☆ react
11. ★☆☆☆☆ electron

## 复习vue-router
### 基础
* HTML:
  ~~~ html
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  ~~~
  
* JS
  模块化编程 -> Vue.use(VueRouter)
  ~~~ javascript
  const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

  // 3. 创建 router 实例，然后传 'routes' 配置
  // 你还可以传别的配置参数, 不过先这么简单着吧。
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

  // 4. 创建和挂载根实例。
  // 记得要通过 router 配置参数注入路由，
  // 从而让整个应用都有路由功能
  const app = new Vue({
    router
  }).$mount('#app')
  ~~~

`

var text20210121_00 = 
`
# 混入 (mixin)

~~~ javascript
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

// 这样 myMixin 混入对象的所有options都被“混入”到 Component 组件中
~~~
> 关键字： <span style="font-size:26px">mixins</span>

> 当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

# options中相同属性合并

  1. options: data 在内部会进行递归合并，有同名属性时保留组件自身的。
  2. 同名钩子函数将合并为一个数组，因此都将被调用。但是，混入对象的钩子函数会在组件自身钩子之前被调用。
  3. 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，保留组件自身的。（与options：data不同的地方是不会进行递归？不过也没法递归，因为没有嵌套对象）

# 全局混入
> 谨慎使用，一般可以用来为自定义options”混入“

# 自定义选项合并策略
> 暂时不学
`

var text20210121_01 = 
`
# 自定义指令
* 有时候需要对普通 <span style="color: red">DOM 元素</span>进行<span style="color: red">底层操作</span>，这时候就会用到自定义指令

# 全局自定义指令


# 局部自定义指令

`

var text20210121_02 = 
`

* Vue会用 Object.defineProperty 将data中的所有属性转为getter/setter
* 这些getter/setter使Vue能够追踪依赖，在属性被访问和修改时通知变更
* 每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

> 对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。

> 向data的嵌套对象添加响应式property
* 可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式 property
* this.$set(object, propertyName, value) 是 Vue.set的别名
* 一次添加多个属性： this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })

> 对于数组
对于数组
Vue 不能检测以下数组的变动：

当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength
举个例子：

var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // 不是响应性的
vm.items.length = 2 // 不是响应性的
为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将在响应式系统内触发状态更新：

// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
你也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：

vm.$set(vm.items, indexOfItem, newValue)
为了解决第二类问题，你可以使用 splice：

vm.items.splice(newLength)
`


