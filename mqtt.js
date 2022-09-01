var mosca = require('mosca') //构建服务器
// 此处配置mqtt的http客户端，尤为重要，http.port则为你HTTP访问端口，可以在网页上输入127.0.0.1:8888(端口)，能请求成功则配置成功
var MqttServer = new mosca.Server({
	port: 8083,
	http: {
		port: 8888,
		bundle: true,
		static: './',
	},
})

//监听链接
MqttServer.on('clientConnected', function (client) {
	console.log('client connected', client.id)
})

//监听mqtt的主题消息
MqttServer.on('published', function (packet, client) {
	//当客户端有连接的时候，发布主题消息
	var topic = packet.topic
	console.log(packet)
	switch (topic) {
		case 'test':
			console.log('message-publish', packet.payload.toString())
			//mqtt转发主题消息
			MqttServer.publish({
				topic: 'other',
				payload: '这是服务端发过来的消息！',
			})
			break
	}
})

MqttServer.on('ready', function () {
	console.log('mqtt is running....')
})
