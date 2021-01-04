import{l as n,f as s,G as a}from"./framework.5c8a4622.js";const t='{"title":"LeetCode题解","description":"","frontmatter":{},"headers":[{"level":3,"title":"14、最长公共前缀","slug":"_14、最长公共前缀"}],"relativePath":"backend/LeetCode.md","lastUpdated":1609742544034}',p={},o=a('<h1 id="leetcode题解"><a class="header-anchor" href="#leetcode题解" aria-hidden="true">#</a> LeetCode题解</h1><h3 id="_14、最长公共前缀"><a class="header-anchor" href="#_14、最长公共前缀" aria-hidden="true">#</a> 14、最长公共前缀</h3><p>编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 <code>&quot;&quot;</code>。</p><p>示例1：</p><div class="language-"><pre><code>输入: [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]\n输出: &quot;fl&quot;\n</code></pre></div><p>示例2：</p><div class="language-"><pre><code>输入: [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]\n输出: &quot;&quot;\n解释: 输入不存在公共前缀。\n</code></pre></div><p>我的思路：</p><blockquote><p>首先查找前两个的公共前缀，得到的结果再跟第三个比较公共前缀，这样依次比较就可以得到所有元素的公共前缀。考虑一下边界情况，数组为null或者数组长度为0返回空字符串；在两两比较的过程当中，如果没有公共前缀，提前返回空字符串。</p></blockquote><p>Java实现：</p><div class="language-java"><pre><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">longestCommonPrefix</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>strs <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> strs<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> result <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">String</span> temp <span class="token operator">=</span> <span class="token function">getCommonPrefix</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n            result <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCommonPrefix</span><span class="token punctuation">(</span><span class="token class-name">String</span> first<span class="token punctuation">,</span> <span class="token class-name">String</span> second<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">StringBuilder</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>first<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> second<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>first<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> second<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                s<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>first<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                <span class="token keyword">break</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>执行结果：</p><p><img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/44JLZf-YyR2v2.png" alt=""></p>',13);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
