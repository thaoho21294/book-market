const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const bookRouter = require('./routes/books')

require('dotenv').config({ path: '../.env' })

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, autoIndex: true })
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.use('/users', usersRouter)
app.use('/books', bookRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
