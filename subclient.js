// 接收消息的客户端；
var mqtt = require('mqtt')
let options = {
	clientId: 'test-id',
	connectTimeout: 600000,
	clean: true,
}
var client2 = mqtt.connect('mqtt://127.0.0.1:8083', options)
console.log(client2)
//订阅主题为test的消息
client2.subscribe('test', {qos: 1}, function (err) {
	if (!err) {
		console.log('订阅主题成功')
	} else {
		console.log(err)
	}
})

client2.on('message', function (top, message) {
	console.log(message.toString(), 'success')
})
