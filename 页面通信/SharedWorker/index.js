var clients = []
onconnect = function (e) {
  let port = e.ports[0]
  clients.push(port)
  port.addEventListener('message', function (e) {
    for (let i = 0; i < clients.length; i++) {
      let temp = clients[i]
      temp.postMessage(e.data)
    }
  })
  port.start()
}