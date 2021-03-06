# Vue 常见题目

### 1、Vue 中重置组件的 data

> 说实话，这样的场景还是比较少遇到的，可能下面说的是一种情况
>
> ![image-20200801084553735](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/image-20200801084553735-uRXhyy.png)
>
> 但也可以把表单字段全部存在某个对象中，例如在`data`中定义一个 form 对象，把表单的字段全部存进去，重置时也简单：
>
> `this.form = {}`
>
> 回到正题，重置`data`数据可以这样：
>
> ```js
> Object.assign(this.$data, this.$options.data())
> ```
### 2、写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

### 3、计算属性（`computed`）、方法调用、`watch`的区别？

计算属性：**有缓存，只有在相关的响应式依赖发生改变时才会重新求值。**

方法调用：假如在模板中调用方法，每当出发重新渲染时，调用方法将总会再次执行。

Watch：常用于监听某一数据变化执行一些异步或者开销较大的操作，比如方法调用。

> 实际项目中用到的`watch`场景，在订单提交页面，选择地址会出发运费发生变化，运费变化会影响订单金额，这时会用`watch`监听这一变化去请求后端接口获取合适的优惠券

### 4、双向数据响应原理（`v-model`）?

`v-model`双向数据绑定本质就是一个语法糖：

- model => view 绑定就是view绑定一个响应式数据，数据变化就更新视图；
- View => model 绑定就是监听用户输入事件，更新model

### 5、Vue2的响应式原理

![](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/Qt4Qt3-M2G5Qz.png)

当创建Vue实例时，Vue会遍历`data`选项，并利用`Object.defineProperty`方法为属性添加`getter`和`setter`对数据的读写进行劫持。并且在内部追踪依赖，在属性被访问和修改时通知变更。

每个组件实例都有相应的`Watcher`实例，称为渲染`Watcher`。它会在渲染的过程中把接触过的属性记录为依赖。之后当依赖性的`setter`触发时，会通知`watcher`，从而使与之关联的组件重新渲染。