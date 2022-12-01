const app = require('./app')
const {PORT} = process.env || 3000;

app.listen(PORT, () => {
    console.log(`Your app is running at ${PORT} port`)
})