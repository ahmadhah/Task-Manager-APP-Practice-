const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')


app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(4000, () => {
    console.log('Example app listening on port 3000!')
})