const connectDB = require('./DB/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
//* to access to sercret variables
require('dotenv').config()

//* if you dont use it,,, then you will not get data in req.body
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1/tasks', tasks)

const port = 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

start()