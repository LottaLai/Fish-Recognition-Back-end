const Koa = require('koa')
const koa_static = require('koa-static-router')
const cors = require('@koa/cors');

const app = new Koa()

const nutriotions = require('./routes/nutritions.js')

app.use(cors());
app.use(nutriotions.routes())

let port = process.env.PORT || 10888
app.listen(port)
