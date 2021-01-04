# 阿里OSS小试

## 什么是OSS

oss，全程Object Storage Service，是一种云存储服务。[点击查看文档详情](https://help.aliyun.com/document_detail/31817.html?spm=a2c4g.11174283.2.5.789f7da2cKAB17)

### 下面来进行实践

1、首先当然是注册阿里云账号，购买OSS云存储服务，选标准存储就行，最便宜的，包年9块钱哟 :satisfied:

2、打开对象存储的控制台创建Bucket

![](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/iShot2020-04-30下午09.52.50-1588254876658.png)

bucket—翻译过来就是水桶，在这里可以理解为独一无二的名字，因为阿里云会把bucket和存储区域组合成一个域名，例如：bucket为xx-static，存储区域选择为华东杭州(oss-cn-hangzhou), 这样就会组合为<https://xx-static.oss-cn-hangzhou.aliyuncs.com>

3、hover右上角的头像，然后点击AccessKey管理，之后在跳转的页面点击开始使用子用户的AccessKey

![](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/iShot2020-04-30下午10.04.23-1588255474971.png)

4、创建子用户，这里其实就是创建一个用户组，给每个用户分发一定的权限，这样就可以使多人对同一个bucket存储进行管理

![](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/iShot2020-04-30下午10.11.42-1588256096968.png)

这里选择编程访问，确定之后选择你想分配给该用户的权限，我这里选择的使对对象存储的完全管理。之后会生成AccessKey ID和AccessKey Secret，记录下来，之后要用。

5、用nodejs编码上传文件

```javascript
'use strict'
const OSS = require('ali-oss')
const fs = require('fs')
const path = require('path')

const store = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: 'xxxxxx-**************',
  accessKeySecret: 'XXXXXXX-***********',
  bucket: 'your-bucket',
})
const staticPath = path.join(__dirname, '../app/public/static')
fs.promises.readdir(staticPath).then(files => {
  const uploads = files.map(file =>
    store.putStream(
      `images/${file}`,
      fs.createReadStream(staticPath + `/${file}`)
    )
  )
  Promise.all(uploads)
    .then(responses => {
      responses.forEach(res => console.log(res.url))
      console.log('upload success 😊')
    })
    .catch(errors => {
      console.log('upload fail:', errors, '😢')
    })
})
```

这里要用到阿里云存储的包--ali-oss，创建一个OSS实例，传入一个配置对象，填写前面几步你得到的信息。

之后我们读取要上传的静态文件的文件夹，遍历所有文件，然后调用`store`的实例方法`putStream`，次方法接受两个参数。第一个就是在bucket上的路径，这个你自己定，第二个参数是对要上传的文件创建一个可读流，这里我们采用了流式上传，你也可以不采用用`put`方法。`store.putStream`返回一个promise, 之后我们用`Promise.all`把所有的上传操作一起执行。

## 小结
