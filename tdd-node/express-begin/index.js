const express = require('express')

const app = express()

const logger = (req, res, next) => {
    console.log('I am logger')
    next()
}

const logger2 = (req, res, next) => {
    console.log('I am logger 2')
    next()
}

app.use(logger)
app.use(logger2)

app.listen(3000, () => console.log('Server is running'))