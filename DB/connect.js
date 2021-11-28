const mongoose = require('mongoose')


const connectDB = (url) => {
    mongoose.connect(url)
        .then(() => {
            console.log('MongoDB Connected...')
        })
        .catch(err => {
            console.log(err)
        })
}

// connectDB(url)

module.exports = connectDB;

// mongoose.connect(url, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
// }
// ).then(() => { console.log('connected to database') })
//     .catch(err => { console.log(err) })