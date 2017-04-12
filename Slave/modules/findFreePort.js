
var http = require('http')
var Promise = require('bluebird')
function findPort (configPort, promise) {
  return new Promise(function (resolve, reject) {
    let arrayOfPromise = []
    let minPort = configPort.minPort
    let maxPort = configPort.maxPort

    for (var port = minPort; port < maxPort; port++) {
      arrayOfPromise.push(launchServer(port))
    }
    Promise.all(arrayOfPromise.map(function (promise) {
      return promise.reflect()
    })).each(function (port) {
      if (port.isFulfilled()) {
        resolve(port.value())
      }
    })
    //
    // Promise.all(arrayOfPromise.map(promise => promise.catch(error => error)))
    // .then(port => {
    //   resolve(port[0])
    // })
  })
}

function launchServer (port) {
  return new Promise(function (resolve, reject) {
    var servertest = http.createServer(function (req, res) {})
    servertest.on('error', (msg) => {
      reject()
    })
    servertest.listen(port, _ => {
      servertest.close(_ => {
        resolve(port)
      })
    })
  })
}
 module.exports = findPort
