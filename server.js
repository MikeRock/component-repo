import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import __ from 'colors/safe'

__.setTheme({custom:['bgYellow','grey']})

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(path.resolve(__dirname,'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))

app.get("*", (req, res) => {
    res.sendFile(path.resolve('build/index.html'))
})

const server = app.listen(PORT, (err) => {
    console.log(__.custom(`SERVER RUNNING ON PORT ${server.address().port}`))
})
