import{l as e,f as a,G as s}from"./framework.5c8a4622.js";const r='{"title":"客户端访问 docker 部署 MySQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、进入容器","slug":"_1、进入容器"},{"level":2,"title":"2、连接 mysql","slug":"_2、连接-mysql"},{"level":2,"title":"3、修改 root 可以通过任何客户端连接","slug":"_3、修改-root-可以通过任何客户端连接"},{"level":2,"title":"4、退出 mysql 连接","slug":"_4、退出-mysql-连接"}],"relativePath":"backend/docker-client-deploy-mysql.md","lastUpdated":1609743247558}',n={},t=s('<h1 id="客户端访问-docker-部署-mysql"><a class="header-anchor" href="#客户端访问-docker-部署-mysql" aria-hidden="true">#</a> 客户端访问 docker 部署 MySQL</h1><p>首先介绍一个 docker 的可视化容器管理工具<a href="https://github.com/docker/kitematic" target="_blank" rel="noopener noreferrer"><strong>kitematic</strong></a>, 非常好用，点一下，就能拉取镜像启动一个服务，例如 MySQL。</p><img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/JgGk0j-Uw8JSX.png" style="zoom:50%;"><p>点击右上角的<code>setting</code>的按钮就可以设置一下像<code>MYSQL_ROOT_PASSWORD</code>环境变量，当然还有一些其他设置。</p><h2 id="_1、进入容器"><a class="header-anchor" href="#_1、进入容器" aria-hidden="true">#</a> 1、进入容器</h2><div class="language-bash"><pre><code>docker <span class="token builtin class-name">exec</span> -it mysql <span class="token function">bash</span>\n</code></pre></div><h2 id="_2、连接-mysql"><a class="header-anchor" href="#_2、连接-mysql" aria-hidden="true">#</a> 2、连接 mysql</h2><div class="language-bash"><pre><code>mysql -u root -p\n</code></pre></div><p>密码就是前面你设置的<code>MYSQL_ROOT_PASSWORD</code>环境变量的值。</p><h2 id="_3、修改-root-可以通过任何客户端连接"><a class="header-anchor" href="#_3、修改-root-可以通过任何客户端连接" aria-hidden="true">#</a> 3、修改 root 可以通过任何客户端连接</h2><div class="language-bash"><pre><code>ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="_4、退出-mysql-连接"><a class="header-anchor" href="#_4、退出-mysql-连接" aria-hidden="true">#</a> 4、退出 mysql 连接</h2><div class="language-bash"><pre><code><span class="token builtin class-name">exit</span>\n</code></pre></div><p>之后就可以通过客户端连接了.</p>',14);n.render=function(s,r,n,o,l,d){return e(),a("div",null,[t])};export default n;export{r as __pageData};