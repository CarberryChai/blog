# 客户端访问 docker 部署 MySQL

首先介绍一个 docker 的可视化容器管理工具[**kitematic**](https://github.com/docker/kitematic), 非常好用，点一下，就能拉取镜像启动一个服务，例如 MySQL。

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/JgGk0j-Uw8JSX.png" style="zoom:50%;" />

点击右上角的`setting`的按钮就可以设置一下像`MYSQL_ROOT_PASSWORD`环境变量，当然还有一些其他设置。

## 1、进入容器

```bash
docker exec -it mysql bash
```

## 2、连接 mysql

```bash
mysql -u root -p
```

密码就是前面你设置的`MYSQL_ROOT_PASSWORD`环境变量的值。

## 3、修改 root 可以通过任何客户端连接

```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```

## 4、退出 mysql 连接

```bash
exit
```

之后就可以通过客户端连接了.
