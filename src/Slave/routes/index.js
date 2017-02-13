let express = require('express')
let HardwareController = require('../../../src/Slave/Controllers/hardwareController')
let router = express.Router()

/* GET home page. */
router.get('/hardware', (req, res, next) => {
  new HardwareController(req, res, next).getinfos()
})

module.exports = router
