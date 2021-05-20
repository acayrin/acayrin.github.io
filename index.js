const express = require('express')
const app = express()
const compression = require('compression')
// ===================================== Variables =====================================



// ===================================== Start express =====================================
app.use(compression())
app.use('/', express.static(__dirname + '/public'))
// ===================================== Start express =====================================



// ===================================== Start =====================================
app.listen(process.env.PORT || 3000)
// ===================================== Start =====================================
