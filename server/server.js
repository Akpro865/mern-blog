const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const { verify } = require('./middleware/auth')

connectDB()
app.use(express.json())
app.use(errorHandler)
app.use(cors())

// routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/blogs', require('./routes/blogs'))
app.use('/api/categories', require('./routes/categories'))

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT, () =>{
	console.log("app connected")
})
