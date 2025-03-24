require('dotenv').config();

const express = require('express')
const expressProxy = require('express-http-proxy')

const app = express()


app.use('/ai', expressProxy(`http://localhost:${process.env.AI_PORT}`))
app.use('/projects', expressProxy(`http://localhost:${process.env.PROJECT_PORT}`))
app.use('/users', expressProxy(`http://localhost:${process.env.USER_PORT}`))



app.listen(process.env.PORT, () => {
    console.log(`Gateway server listening on port ${process.env.PORT}`)
})