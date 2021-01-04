# input number 的那些坑

想必大家在做移动端表单输入的时候一定被`input` `type=number`坑过，本来我能期望用户能够按照我们希望的那样输入数字不要其他乱七八糟的字符，结果事与愿违😳。 

## type number属性

`input`元素的tpe `number`是用来让用户输入一个数字的，在pc端的浏览器设置`type='number'`会阻止用户输入非数字字符，这个属性是可以决定输入行为，它背后设定了一些验证机制。可惜在移动端，设置`type='number'`并没什么卵用，还是可以输入非数字字符。

```html
<input type="number" placeholder="请填写数字" />
```



<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/IMG_0088-uWAC3J.PNG" style="zoom:30%;" />

## inputmode属性

`inputmode`属性是干嘛的呢？

> The `inputmode` content attribute is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) that specifies what kind of input mechanism would be most helpful for users entering content.  ——[标准](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode)

w3c标准是这样写的，说人话就是`inputmode`决定了键盘的显示方式，跟type属性不一样的地方并不决定一些内置行为。

### Numeric

```html
<input type='text' inputmode='numeric' />
```

当想要用户输入整数时，可以设置numeric属性

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/IMG_0089-Mpf9Oa.PNG" style="zoom:33%;" />

### Decimal

```html
<input type='text' inputmode='decimal' />
```

输入带小数点的数字

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/2TFuvA-D8fdV7.png" style="zoom:30%;" />

### Tel

```html
<input type='text' inputmode='tel' />
```

输入电话号码

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/Wi2oqQ-JeFN79.png" style="zoom:30%;" />

### Email

```html
<input type='text' inputmode='email' />
```

输入邮箱

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/DafQzg-VLHBo3.png" style="zoom:30%;" />

**其他的属性值还有`url`、`search`** 

引用：

1、[https://css-tricks.com/everything-you-ever-wanted-to-know-about-inputmode/](https://css-tricks.com/everything-you-ever-wanted-to-know-about-inputmode/)

2、[https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode)