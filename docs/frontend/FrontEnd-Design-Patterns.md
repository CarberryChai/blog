# 设计模式

## 1、单例模式

定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

例如：登录浮窗，不管点击多少次登录按钮，页面只会创建一次登录浮窗

```js
function getSingle(fn) {
  let result
  return function (){
    return result || (result = fn.apply(this, arguments))
  }
}

const createSingleLoginLayer = getSingle(function () {
  const div = document.createElement('div')
  div.innerHTML = '登录'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
})
```

