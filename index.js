const express = require('express');
const bodyParser = require('body-parser')
//创建服务
const app = express();

// 解析字符串格式的数据
// app.use(express.urlencoded({extended: false}));//4.16新增的中间件

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// 是get请求
// 路由第一个参数的规则
// 路径  是一个pathname
// 路径路径可以是字符串，字符串模式或正则表达式。
// 路径需要跟参数一完全匹配才可以进入路由的处理
// 那么就会执行第二个参数的回调，处理该请求

// 中间件做统一拦截
app.use(function (req, res, next) {
  console.log('requestTime:', Date.now())
  res.setHeader("content-type", "text/html;charset=utf-8")
  next()
})


app.get('/', (request, response) => {
  response.write('hello world');
  response.end();
});

app.get('/chatlist', (request, response) => {
  response.write('list');
  response.end();
});
app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('323')
  res.end()
});


// 启动服务
// 参数1: 端口号
// 参数2: 域名
// 参数3: 最大的连接数量
// app.listen(8000, 'localhost', 512, ()=>{})
app.listen(8000, (error) => {
  if (error) throw error;
  console.log('server is run: http://localhost:8000');
})


