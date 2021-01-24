var text20210124_00 = 
`
# Vue composition-api
## setup option 方法
### ref 定义响应式数据 : number string boolean Array
### reactive 定义响应式对象（data）
### toRefs 对象解构 解构reactive对象

### computed
* let name = computed(() => prefix + suffix)
### readonly
### watchEffect 监听方法体内的响应式数据，初始化也会执行一次
### watch 与传统的watch一样
### 生命周期函数 无created beforeCreated 其他在传统的前面加个on
### props 参数带个props
### composition-api中provide inject实现父子组件传值时，父组件可以影响子组件，子组件可以影响父组件
 `

 var text20210124_01 = 
`
# Vue TypeScript
## string,number,boolean 像以前一样定义，直接赋值即可，vue-ts会自动检测类型，如果付给不同的值，ts会提示编译错误（如 Type 'number' is not assignable to type 'string'）
## object 定义一个interface规范，然后as实现它
~~~ typescript
// 先在vue实例外定义接口（规范类型）
interface Iform {
  xm: string;
  age: number;
}

// 再在data option中定义类实现这个接口
export default defineComponent({
  data () {
    return {
      form: {
        xm: 'lb',
        age: 20
      } as Iform
    }
  },

// 或者以下方式也行
interface Iform {
  xm: string;
  age: number;
}

const form: Iform = {
  xm: 'lb',
  age: 20
}

export default defineComponent({
  data () {
    return {
      form
    }
  },
~~~

## Array 
~~~ typescript
let empList: Array<string>
export default defineComponent({
  name: 'Home',
  data () {
    return {
      empList
    }
  },

// 第二种方式
let empList: string[]
export default defineComponent({
  name: 'Home',
  data () {
    return {
      empList
    }
  },
~~~
`
