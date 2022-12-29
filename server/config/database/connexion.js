const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('server success')
}).catch((error) => {
    console.log('server failed', error.message)
})