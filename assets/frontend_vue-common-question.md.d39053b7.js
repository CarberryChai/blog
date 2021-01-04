import{l as e,f as a,G as t}from"./framework.5c8a4622.js";const o='{"title":"Vue 常见题目","description":"","frontmatter":{},"headers":[{"level":3,"title":"1、Vue 中重置组件的 data","slug":"_1、vue-中重置组件的-data"},{"level":3,"title":"2、写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？","slug":"_2、写-react-vue-项目时为什么要在列表组件中写-key，其作用是什么？"},{"level":3,"title":"3、计算属性（computed）、方法调用、watch的区别？","slug":"_3、计算属性（computed）、方法调用、watch的区别？"},{"level":3,"title":"4、双向数据响应原理（v-model）?","slug":"_4、双向数据响应原理（v-model）"}],"relativePath":"frontend/vue-common-question.md","lastUpdated":1609742544038}',n={},s=t('<h1 id="vue-常见题目"><a class="header-anchor" href="#vue-常见题目" aria-hidden="true">#</a> Vue 常见题目</h1><h3 id="_1、vue-中重置组件的-data"><a class="header-anchor" href="#_1、vue-中重置组件的-data" aria-hidden="true">#</a> 1、Vue 中重置组件的 data</h3><blockquote><p>说实话，这样的场景还是比较少遇到的，可能下面说的是一种情况</p><p><img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/image-20200801084553735-uRXhyy.png" alt="image-20200801084553735"></p><p>但也可以把表单字段全部存在某个对象中，例如在<code>data</code>中定义一个 form 对象，把表单的字段全部存进去，重置时也简单：</p><p><code>this.form = {}</code></p><p>回到正题，重置<code>data</code>数据可以这样：</p><div class="language-js"><pre><code>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div></blockquote><h3 id="_2、写-react-vue-项目时为什么要在列表组件中写-key，其作用是什么？"><a class="header-anchor" href="#_2、写-react-vue-项目时为什么要在列表组件中写-key，其作用是什么？" aria-hidden="true">#</a> 2、写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？</h3><h3 id="_3、计算属性（computed）、方法调用、watch的区别？"><a class="header-anchor" href="#_3、计算属性（computed）、方法调用、watch的区别？" aria-hidden="true">#</a> 3、计算属性（<code>computed</code>）、方法调用、<code>watch</code>的区别？</h3><p>计算属性：<strong>有缓存，只有在相关的响应式依赖发生改变时才会重新求值。</strong></p><p>方法调用：假如在模板中调用方法，每当出发重新渲染时，调用方法将总会再次执行。</p><p>Watch：常用于监听某一数据变化执行一些异步或者开销较大的操作，比如方法调用。</p><blockquote><p>实际项目中用到的<code>watch</code>场景，在订单提交页面，选择地址会出发运费发生变化，运费变化会影响订单金额，这时会用<code>watch</code>监听这一变化去请求后端接口获取合适的优惠券</p></blockquote><h3 id="_4、双向数据响应原理（v-model）"><a class="header-anchor" href="#_4、双向数据响应原理（v-model）" aria-hidden="true">#</a> 4、双向数据响应原理（<code>v-model</code>）?</h3><p><code>v-model</code>双向数据绑定本质就是一个语法糖，model =&gt; view 绑定就是view绑定一个响应式数据，数据变化就更新视图；</p><p>View =&gt; model 绑定就是监听用户输入事件，更新model</p>',12);n.render=function(t,o,n,c,d,p){return e(),a("div",null,[s])};export default n;export{o as __pageData};
