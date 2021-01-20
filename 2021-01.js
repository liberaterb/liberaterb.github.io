var text20210120 = 
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
  * <!-- 路由匹配到的组件将渲染在这里 -->
  * <router-view></router-view>
* JS
  模块化编程 -> Vue.use(VueRouter)
  ``` javascript
  const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

  // 3. 创建 router 实例，然后传 `routes` 配置
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
  ```

`
