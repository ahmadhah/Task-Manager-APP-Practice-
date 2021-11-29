const connectDB = require('./DB/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorhandler')
//* to access to sercret variables
require('dotenv').config()

//? Middlewares
app.use(express.json()) //* if you dont use it,,, then you will not get data in req.body
app.use(express.static('./public')) //*for adding our html files

app.use('/api/v1/tasks', tasks)
app.use(notFound) //* if route doesnot exist then not found page will be shown
app.use(errorHandlerMiddleware)//* by default jo error handler use hota,, wo html file wala page return krta ar 
//* hmari app ko rok deta,,, so custom error handler use krty ,,, ta ky agr task create krty wkt agr
//* koi empty object agr send krain to wo itna bara error na dy
const port = process.env.PORT || 4000;

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