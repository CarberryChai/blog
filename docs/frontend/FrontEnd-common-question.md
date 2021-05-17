# 前端常见问题

### 1、如何实现一个元素的水平垂直居中

```html
<div class="container">
  <div class="box"></div>
</div>
```

绝对定位方法：

```scss
.container {
  postion: relative;
  .box {
    postion: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
```

flex 布局方法：

```scss
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 2、什么是防抖(debounce)和节流(throttle)，有哪些使用场景？

防抖，顾名思义，就是防止抖动。就是为了防止本来执行一次的事件执行多次。

常见的使用场景：

1. 登录、发送短信等，防止用户点击太快发送太多请求。
2. 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖

代码如下，可以看出来**防抖重在清零 `clearTimeout(timer)`**

```js
function debounce(fn, wait) {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn.bind(this, ...args), wait)
  }
}
```

节流，顾名思义，控制水的流量。控制事件发生的频率，如控制为 1s 发生一次，甚至 1 分钟发生一次。

常见的使用场景：

1. `scroll`事件，每隔一段时间计算一次位置信息等。
2. 浏览器播放事件，每隔一秒计算进度信息等。
3. input 框实时搜索并发送请求展示下来列表，每隔一段事件发送请求（也可以做防抖）

代码如下，可以看出来**节流重在加锁 `timer = timeout`**

```js
function throttle(fn, wait) {
  let timer
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, wait)
    }
  }
}
```

### 3、为什么要清除浮动呢？清除浮动的方式

清除浮动是为了清除浮动元素产生的影响。浮动的元素会使没有设置高度的父元素坍塌，从而影响页面后面的布局。

示例：

```html
<div class="box clear">
  <img
    src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/IMG_0047-pLH2OM.JPG"
  />
</div>
<style>
  .box {
    padding: 10px;
    background-color: #cd0000;
  }
  .box > img {
    float: left;
  }
  .clear:after {
    content: '';
    display: block;
    clear: both;
  }
</style>
```

清除浮动的方式：

1、设置父元素`.box`的高度。

2、父元素`.box`设为`BFC`， 例如：`overfloat: hidden;`等，

3、利用`clear`属性。

```css
.clear {
  content: '';
  display: block;
  clear: both;
}
```

### 4、CSS 实现两栏布局？

两栏布局指的是左边宽度固定，右边自适应。

```html
<div id="app">
  <div class="left">left</div>
  <div class="right">right</div>
</div>
```

①、float+margin

```scss
#app {
  .left {
    float: left;
    width: 100px;
    height: 600px;
  }
  .right {
    margin-left: 110px;
  }
}
```

②、flex

```scss
#app {
  display: flex;
  .left {
    height: 600px;
    flex: 0 100px;
  }
  .right {
    flex: auto;
  }
}
```

### 5、寄生式组合继承的实现？

```js
function Person(name) {
  this.name = name
}
Person.prototype.sayHello = function () {
  console.log(`Hello, ${this.name}!!`)
}
function Student(name, grade) {
  Person.call(this, name)
  this.grade = grade
}
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
Student.prototype.sayName = function () {
  console.log(`Your name is ${this.name}, Your grade is ${this.grade}`)
}
```

### 6、DOM 事件流

事件流包括三个阶段：**事件捕获阶段、目标阶段、事件冒泡阶段**。

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/dnIC4T-djLWiE.png" style="zoom:50%;" />

### 7、事件委托

事件委托本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到
目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。

使用事件代理我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件代理我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。

### 8、关于 const 和 let 声明的变量不在 window 上

在 ES5 中，顶层对象的属性和全局变量是等价的，`var`、`function`声明的全局变量，自然也在顶层对象上。

```js
var a = 10
function foo() {
  console.log('hello')
}
console.log(window.a) // 10
window.foo() // hello
```

但在 ES6 规定，`var`、`function`声明的全局变量，依然位于也在顶层对象上，但 `let`、`const`、`class`命令声明的全局变量，不属于顶层对象的属性。

```js
let a = 1
const b = 2
console.log(window.a) //undefined
console.log(window.b) //undefined
```

![](https://user-images.githubusercontent.com/20290821/53854366-2ec1a400-4004-11e9-8c62-5a1dd91b8a5b.png)

通过上图也可以看到，在全局作用域中，用 let 和 const 声明的全局变量并没有在全局对象中，只是一个块级作用域（Script）中

怎么获取？在定义变量的块级作用域中就能获取啊

### 9、分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景

结构：

`display: none`：会让元素从渲染树中消失，渲染的时候不占据任何空间，不能点击。

`visibility: hidden`：不会让元素从渲染树上消失，渲染元素占据空间，只是内容不可见，不能点击

`opacity: 0`：不会让元素从渲染树中消失，渲染元素继续占据空间，只是内容不可见，可以点击

> reference：[连接](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/100)

### 10、JavaScript 的数据类型

截止到 ES2020 JavaScript 有八种数据类型：

七种基本类型：`Undefined`、`Null`、`Boolean`、`Number`、`String`、`Symbol`和`BigInt`

一种引用类型：`Object`

### 11、如何获取 url 中?后面的参数？

```js
// 加入location.href = 'http://example.com/search?query=%40&name=carberry'
const url = new URL(window.location.href)
console.log(url.searchParams.toString()) // query=%40&name=carberry
console.log(url.searchParams.get('name')) // carberry
```

### 12、事件处理程序中，event.target、event.currentTarget 区别？

`event.target` ： 表示事件发生的目标元素，即真正引起事件发生的元素。

`event.currentTarget`：表示绑定事件处理程序的元素

```html
<div class="box">
  <button>click</button>
</div>
<script>
  // 上面html，点击click button
  document.addEventListener('click', e => {
    console.log(e.target) // 事件发生的button元素
    consoloe.log(e.currentTarget) // 绑定事件处理程序的document元素
  })
</script>
```

### 13、闭包

**闭包是由函数以及创建该函数的词法环境组合而成**，这个环境包含了这个闭包创建时所能访问的所有局部变量

### 14、原型，原型链

每个实例对象（object）都有一个私有属性（称之为**proto**）指向该对象构造函数的原型对象(`prototype`), 该原型对象也有一个属性(`__proto__`), 层层向上直到一个对象的原型对象为`null`，`null`没有原型，作为原型链的末尾。
几乎所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。

### 15、前端性能优化？

**减少资源（静态资源，后端加载数据）大小**

- 压缩代码（HTML/CSS/Js）
- 压缩图片
- Tree-Sharking 消除无用代码

**避免同一时间的过多次请求**

- CSS 实现雪碧图：使用 background-position 共享一张图
- 图片懒加载：监听滚动后 offsetTop，使用 data-src 替换 src（vue-lazyload 插件）
- 列表懒加载(分页加载)
- 路由懒加载
- 代码分包分块加载（webpack）
- 预加载技术

**利用缓存（空间换时间）**

- CDN 内容分发
- 浏览器缓存

### 16、for...in 与 for...of 有什么区别？

`for...in`：用于遍历一个对象的可枚举属性, 包括继承的可枚举属性; 遍历的是 key
`for...of`：用于遍历实现了迭代器接口的对象，即对象具有`[Symbol.iterator]`方法; 遍历的是 value(值)

### 17、密码的显示与隐藏

### 18、简单说一下对`this`的理解？

`this`是在函数被调用的时候指定的，它的取值取决于函数被调用的方式。

①、作为函数被调用

```js
function foo() {
  console.log(this)
}
```

### 19、`call`和`apply`的区别

这两个方法作用一模一样，都是给函数指定一个`this`取值，区别在于传参的形式不同。

`call`需要把传入的参数意义指定，而`apply`需要传入一个数组或者类数组。（ps: 此句说的都是第二个参数）

### 20、jsonp 的原理

jsonp是一种跨域通信的手段，它的原理其实很简单：

1. 首先是利用script标签的src的属性来实现跨域。
2. 通过将前端方法作为参数传递到服务端，然后有服务端注入参数之后再返回，实现前后端通信。
3. 由于script标签的src的属性限制，只能get请求。

> 前端事先定义一个用于接收数据的全局回调函数，这个函数名作为URL的一部分利用script标签src属性实现跨域，后端返回回调函数的执行，数据作为函数的参数，前端接收到响应会立即执行该回调。

```js
(function (global) {
    var id = 0,
        container = document.getElementsByTagName("head")[0];

    function jsonp(options) {
        if(!options || !options.url) return;

        var scriptNode = document.createElement("script"),
            data = options.data || {},
            url = options.url,
            callback = options.callback,
            fnName = "jsonp" + id++;

        // 添加回调函数
        data["callback"] = fnName;

        // 拼接url
        var params = [];
        for (var key in data) {
            params.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
        }
        url = url.indexOf("?") > 0 ? (url + "&") : (url + "?");
        url += params.join("&");
        scriptNode.src = url;

        // 传递的是一个匿名的回调函数，要执行的话，暴露为一个全局方法
        global[fnName] = function (ret) {
            callback && callback(ret);
            container.removeChild(scriptNode);
            delete global[fnName];
        }

        // 出错处理
        scriptNode.onerror = function () {
            callback && callback({error:"error"});
            container.removeChild(scriptNode);
            global[fnName] && delete global[fnName];
        }

        scriptNode.type = "text/javascript";
        container.appendChild(scriptNode)
    }

    global.jsonp = jsonp;

})(this);
```

### 21、懒加载和预加载

**懒加载也叫延迟加载，指的是在长网页中延迟加载图像，是一种很好优化网页性能的方式。** 用户滚动到他们之前，可视区域外的图像不会加载。这与图像预加载相反，在长网页中使用延迟加载将使网页加载更快。在某些情况下，它可以帮助减少服务器负载。常用于图片很多，页面很长的电商网站的场景。

优势：

- **提升用户体验**，不妨设想下，用户打开像手机淘宝长页面的时候，如果页面上所有的图片都需要加载，由于图片数目较大，等待时间较长，用户难免心生抱怨，这严重影响了用户体验。
- **减少无效资源的加载**，这样能明显减少服务器的压力和流量。
- **防止并发加载的资源过多会阻塞js的加载**，影响网站的正常使用。

预加载：

预加载简单来说就是将所有所需的资源提前请求加载到本地，这样后面再需要用到时就直接从缓存取资源

## 22、js执行会阻塞DOM树的解析和渲染，那么css加载会阻塞DOM树的解析和渲染吗？

- css加载不会阻塞DOM数的解析
- css加载会阻塞DOM树的渲染
- css加载会阻塞后面js语句的执行

[css加载会造成阻塞吗?](https://juejin.cn/post/6844903667733118983)

## 23、如何判断两个变量相等

`Object.is` 

[see detail](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

