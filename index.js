const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const app = express()
app.use(morgan('dev'))
app.use(compression())



app.listen(process.env.PORT || 5000)