//Using express object
const express = require('express')

//Express app
const app = express()

//Port
const port = 3000

//Initial path
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/launchx', (req, res) => {
    res.send('Welcome to Launch X')
})

//Return an object
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: 'Explorer', msg: 'Hello'}
    res.send(explorer)
})

//Start this app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})