import{l as n,f as s,G as a}from"./framework.5c8a4622.js";const t='{"title":"设计模式","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、单例模式","slug":"_1、单例模式"}],"relativePath":"frontend/FrontEnd-Design-Patterns.md","lastUpdated":1609742544034}',p={},o=a('<h1 id="设计模式"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1><h2 id="_1、单例模式"><a class="header-anchor" href="#_1、单例模式" aria-hidden="true">#</a> 1、单例模式</h2><p>定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。</p><p>例如：登录浮窗，不管点击多少次登录按钮，页面只会创建一次登录浮窗</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">getSingle</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> result\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> result <span class="token operator">||</span> <span class="token punctuation">(</span>result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> createSingleLoginLayer <span class="token operator">=</span> <span class="token function">getSingle</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>\n  div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;登录&#39;</span>\n  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>\n  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> div\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div>',5);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
