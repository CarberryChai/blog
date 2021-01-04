import{l as a,f as n,G as s}from"./framework.5c8a4622.js";const t='{"title":"移动端键盘采坑记录","description":"","frontmatter":{},"relativePath":"frontend/Note-mobile-keybord-bugs.md","lastUpdated":1609743247562}',p={},o=s('<h1 id="移动端键盘采坑记录"><a class="header-anchor" href="#移动端键盘采坑记录" aria-hidden="true">#</a> 移动端键盘采坑记录</h1><p>在移动端开发搜索框的时候，为了更好的用户体验，一定希望键盘右下角 Search 按钮能够显示。</p><img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/IMG_0312-iIjW16.jpg" style="zoom:50%;"><p>在iOS系统，必须由<code>form</code>标签且必须有<code>action</code>属性包裹着<code>&lt;input type=&quot;search&quot; /&gt;</code>标签，即：</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>search<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>贴一个正在开发的自己写的小项目的代码</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>head<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-wrapper<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSubmit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconfont icon-search<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n          <span class="token attr-name">v-focus</span>\n          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span>\n          <span class="token attr-name">required</span>\n          <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keyword<span class="token punctuation">&quot;</span></span>\n          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keyword<span class="token punctuation">&quot;</span></span>\n        <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-cancel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCancel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>取消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>至于Android系统，由于没有安卓手机，网上查了一下只需要</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>search<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>即可！</p>',10);p.render=function(s,t,p,e,c,u){return a(),n("div",null,[o])};export default p;export{t as __pageData};