let path = require('path')
let middlewaresAfter = require('./Middlewares/after')
let middlewaresBefore = require('./Middlewares/before')
let config = require('./config')
let ip = require('ip')
let findPort = require('./modules/findFreePort')

let index = require('./routes/index')
let users = require('./routes/users')

let express = require('express')

let app = express()
let server = require('http').createServer(app)
let io = require('socket.io')(server)
let ioClient = require('socket.io-client')

app.set('views', path.join(__dirname) + '/src/Slave/Views')
app.set('twig options', {
  strict_variables: false
})

app.set('view engine', 'twig')

middlewaresBefore(express, app, io)
app.use('/', index)
app.use('/users', users)

middlewaresAfter(express, app, io)

var promptly = require('promptly')
promptly.prompt('Use localhost:8081 (y)/(n)? ', { default: 'y' })
.then(function (value) { defaultAdress(value) })

function defaultAdress (value) {
  if (value === 'y' || value === 'yes' || value === '') {
    connect('http://localhost:8081')
  } else if (value === 'n' || value === 'no') {
    promptly.prompt('Where is the master node ? ', { default: 'http://localhost:8081' })
    .then(function (adress) {
      whereIsMaster(adress)
    })
  }
}

function whereIsMaster (adress) {
  let protocol = adress.split('://')[0]
  if (protocol === 'http' || protocol === 'https') {
    connect(adress)
  } else {
    promptly.prompt('Use http://(1) or https://(2) ? ', { default: 'http://' })
    .then(function (protocol, adress) {
      checkProtocol(protocol)
    })
  }
}

function checkProtocol (protocol, adress) {
  if (protocol === 'http' || protocol === 'http://' || protocol === '1') {
    connect('http://' + adress)
  } else if (protocol === 'https' || protocol === 'https://' || protocol === '2') {
    connect('https://' + adress)
  }

}
function connect (adress) {
  findPort({minPort: config.port.min, maxPort: config.port.max}).then((port) => {
  console.log('Slave connected on ', port)
    global.adressMaster = adress
    let socket = ioClient.connect(global.adressMaster)
    // On notifie a master que l'esclave se connecte
    socket.emit('slaveConnection', {ip: ip.address(), port: port})
    server.listen(port)
  }).catch((err) => {
    console.warn(err)
  })
