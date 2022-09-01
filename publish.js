var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1:8083') //连接到服务端
var num = 1
var qtt = {} //定义消息（可以为字符串，对象等）

setInterval(function () {
	qtt.title = 'publish'
	qtt.text = '这是第' + num + '条测试消息'
	client.publish('test', JSON.stringify(qtt), {qos: 1, retain: true}) //hello mqtt +
	num++
	console.log('publish 发布了一条内容为text的消息')
}, 2000)
