# 前端部署的一点经验

现在普遍采用的前后端分离的开发模式，这样的话前后端也会分开部署，加快开发进度。

下面以单页应用部署到 centos 7 的 nginx 服务器上为例，记录一下自己学习的过程。

## 准备条件

1. VMware Fusion （虚拟机容器）
2. Centos 7 Linux 系统镜像 （网址：[](http://mirrors.aliyun.com/centos/7/isos/x86_64/)）

具体的在虚拟机下安装 Centos 可以看[这个教程](https://mp.weixin.qq.com/s/WeZLtfrMdnISpX3v5WpJfA)

对于以 create-react-app 脚手架生成的工程来说

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/image-20200612143335920-CzqrPH.png" alt="image-20200612143335920" style="zoom:50%;" />

只需要`yarn build`就可以了，之后会在当前目录生成一个 build 文件夹，接下来我们压缩这个文件夹

```bash
tar -vczf build.tar.gz build
```

在命令行运行这个命令会把 build 文件夹压缩成.tar.gz 文件

下面用`sftp`上传到我们的目标服务器，此处就是我本地的 192.168.0.101 主机，`sftp`和`ssh`命令很像

```bash
# 以root用户连接到服务器，输入密码
sftp root@192.168.0.101
# ls显示服务器文件列表
ls
# lls显示本地文件列表
lls
# cd 服务器上更改目录
cd
# lcd本地更改目录
lcd
# put filename 把本地当前路径下的filename文件上传到服务器当前路径
put build.tar.gz
# get filename 把服务器上文件下载到本地
```

这里我们运行`put build.tar.gz`上传到/root 目录

## 安装 nginx

下载 nginx 安装包，这里的是 nginx-1.19.8.tar.gz，用上面的方法用`sftp`命令上传到`root`目录

1. 在`/usr/local/`下创建`nginx`文件夹并进入

   ```bash
   cd /usr/local
   mkdir nginx
   cd nginx
   ```

   2. 将`nginx`安装包解压到`/usr/local/nginx`

   ```bash
   tar zxvf /root/nginx-1.19.8.tar.gz -C ./
   ```

解压完之后，/usr/local/nginx ⽬录中会出现⼀个 nginx-1.19.8 的⽬录

预先安装额外的依赖

```bash
yum -y install pcre-devel
yum -y install openssl openssl-devel
```

编译安装 nginx

```bash
cd nginx-1.19.8
./configure
make && make install
```

安装完成后，Nginx 的可执⾏⽂件位置位于

```bash
/usr/local/nginx/sbin/nginx
```

## 启动 nginx

```bash
cd /usr/local/nginx/sbin
./nginx
```

这时候我们去浏览器输入地址：192.168.0.101 发现访问不了

我们的宿主机地址是：192.168.0.102

在宿主机命令行下 `ping 192.168.0.101`是通的

在服务器 ping 宿主机`ping 192.168.0.102`也是通

在服务器 ping 百度`ping baidu.com`也是通的

在服务器上运行 `curl localhost`可以返回 welcome to nginx 的 index.html

最好发现是防火墙的问题！！！

防火墙没有开启 80 端口，修改防火墙配置

```bash
firewall-cmd --permanent --add-port=80/tcp
firewall-cmd --reload
```

然后到宿主机的浏览器刷新 192.168.0.101 地址发现可以访了。

## 单页应用的 nginx 配置修改

前后端分离的项目，前端本地开发一般都会在本地开启一个服务器，然后把 ajax 请求代理到后端服务器上去。

![image-20200612151311162](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/image-20200612151311162-WnH9ZZ.png)

上图就是我们开发经常用到的 webpack devServer 的 proxy 设置，把以`/api`开头的请求代理到`target`服务上，并对路径进行重写，实际请求去掉了/api。同理部署到生产环境 nginx 服务器上时也需要进行相似的配置。

```nginx

server {
    listen              80;
    server_name         abc.com;
    access_log  "pipe:rollback /data/log/nginx/access.log interval=1d baknum=7 maxsize=1G"  main;

    location ^~/api/ {
        proxy_set_header Host $host;
        proxy_set_header  X-Real-IP        $remote_addr;
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;

        rewrite ^/order/(.*)$ /$1 break;
        proxy_pass http://localhost:5000;
    }

}
```

通常单页应用如果用到路由的话，像 react-router 用 mode history 时，需要 nginx 这样配置

```nginx
  location / {
       root   /root/build;
       try_files $uri $uri/ /index.html;
  }
```
