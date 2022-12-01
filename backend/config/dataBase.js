const mongoose = require('mongoose')
const {MONGO_URI} = process.env;

const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((connect) => {
        console.log(`Succefully connected to DB: ${connect.connection.host}`)
    })
    .catch((err) => {
        console.log("Your database connection is failed")
        console.log(err);
        process.exit(1)

    })
}

module.exports = connectDB