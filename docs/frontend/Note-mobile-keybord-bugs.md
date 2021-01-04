# 移动端键盘采坑记录

在移动端开发搜索框的时候，为了更好的用户体验，一定希望键盘右下角 Search 按钮能够显示。

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/IMG_0312-iIjW16.jpg" style="zoom:50%;" />



在iOS系统，必须由`form`标签且必须有`action`属性包裹着`<input type="search" />`标签，即：

```html
<form action>
	<input type='search' />
</form>
```

贴一个正在开发的自己写的小项目的代码

```html
<div class="head">
  <form class="search-wrapper" @submit.prevent="handleSubmit" action>
     <span class="iconfont icon-search" />
        <input
          v-focus
          v-model="text"
          type="search"
          required
          :placeholder="keyword"
          name="keyword"
        />
  </form>
	<span class="search-cancel" @click="handleCancel">取消</span>
</div>
```

至于Android系统，由于没有安卓手机，网上查了一下只需要

```html
<input type='search' />
```

即可！