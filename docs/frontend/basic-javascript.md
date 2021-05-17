# Javascript 基础

## 1、scope

Scope in Javascript refers to the accessibility or visibility of variables. That is, which parts of a paragram have access to the variable or where the variable is visible.

作用域又分为两种，静态作用域和动态作用域。

大多数现代编程语言都采用静态作用域规则，如C/C++、C#、Python、Java、JavaScript....

静态作用域又叫词法作用域（Lexical Scope）， literally means that scope is determined at the [lexing time](https://en.wikipedia.org/wiki/Lexical_analysis) (generally referred to as compiling) rather than at runtime.

JavaScript 作用域主要分为三类：

- Global Scope
- Function Scope
- Block Scope

## 2、Call Stack、Event Loop、 Callback Queue

![](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/vdpaCc-qaUgCP.jpg)

**The call stack**

**Javascript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.**

**The Call Stack is a data structue which records basically where in the program we are.**

## 3、什么是requestIdleCallback ? 干什么用的？

> The `window.requestIdleCallback()` method queues a function to be called during a browser's idle periods. This enables developers to perform background and low priority work on the main event loop, without impacting latency-critical events such as animation and input response.

`requestIdleCallback`使浏览器在空闲时期调用的函数加入一个队列。它能够让开发者在主线程执行一些低优先级的任务，不会影响一些对延迟敏感的事件，比如动画、响应用户输入等。

## 4、JS原型、原型链的理解？

JS原型是指为其他对象提供共享属性访问的对象。在创建对象时，每个对象都包含一个隐式引用指向它的原型对象或者null。

原型也是对象，因此它也有自己的原型。这样就构成一个原型链。

> [进阶必读：深入理解 JavaScript 原型](https://zhuanlan.zhihu.com/p/87667349)

## 5、如何实现原型继承？

- 一种是通过`Object.create`或者`Object.setPrototypeOf`显式继承另一个对象，将它设置为原型。
- 另一种是通过构造函数，在使用`new`关键字实例化时，会自动继承构造函数（`constructor`）的`prototype`对象，作为实例的原型。
- 在ES2015中提供了class的风格，背后跟函数（`constructor`）工作方式一样，写起来更内聚一点。

