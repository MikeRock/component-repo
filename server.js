import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import webPush from 'web-push'
import __ from 'colors/safe'
import dotenv from 'dotenv'
import multer from 'multer'

__.setTheme({custom:['bgYellow','grey']})
dotenv.config()

const app = express()
const upload = multer()
const PORT = process.env.PORT || 8080
const vapidPublicKey = 'BEMF_FKAfnLhdTWsZcGO2w7XP5FvDBzLFMg5rbxKs82IOrwSEZ46eucBXDN5WT28b25Dc9XQKCToBYZQTkeXbIc'
const vapidPrivateKey = 'J1Uwyt20M64XmVRNOvsGokfGuc7S7VR4O-9gdJ7ioCE'
webPush.setVapidDetails('mailto:test@test.com',vapidPublicKey, vapidPrivateKey)

app.use(express.static(path.resolve(__dirname,'build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))

app.post('/push',(req, res) => {
const subscriptionObj = req.body   
const payload = {
    title: "Test"
}  
webPush.sendNotification(subscriptionObj,JSON.stringify(payload)).then(r => {
    res.status(200)
    res.setHeader('Content-Type','application/json')
    res.json({success: true})
}).catch(err => {
    console.error(err)
    res.status(400)
    res.setHeader('Content-Type','application/json')
    res.json({error: err})
})
})
app.get('/manifest', (req, res) => {
    res.setHeader('Content-Type','application/json')
    res.sendFile(path.resolve(__dirname, 'build', 'manifest.json'))
})
app.get('/worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'worker.js'));
});
app.get("*", (req, res) => {
    res.sendFile(path.resolve('build/index.html'))
})
app.post('*',upload.fields([]), (req, res) => {
    res.send(200,"Success")

})

const server = app.listen(PORT, (err) => {
    console.log(__.custom(`SERVER RUNNING ON PORT ${server.address().port}`))
})
