const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use('/', express.static(path.join(__dirname, '/views')))
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/p5', express.static('node_modules/p5/lib'))
app.use('/jquery', express.static('node_modules/jquery/dist'))

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`)
})
