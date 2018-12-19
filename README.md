# learn-webpack

### 初次运行命令，预览bundle.js
项目启动后：创建app.js，入口index.html
```
document.querySelector('#root').innerHTML = 'Hello World!';
```
index.html:
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>learn-webpack</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="root" id="root"></div>
</body>
<script src="./dist/bundle.js"></script>

</html>
```
执行webpack命令：
```
webpack ./app.js ./dist/bundle.js
```