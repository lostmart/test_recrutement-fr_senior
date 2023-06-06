const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const eventsRoutes = require('./routes/events')

// MIDDLEWARE
// CORS headers (public API)
app.get((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	)
	next()
})

// intro to the app
app.get('/', (req, res, next) => {
	res.json({
		msg: "Welcome 🙌 ! Make a get request to '/api/events' to get events information ",
	})
	next()
})

// uses the router for API/STUFF
app.use('/api/events', eventsRoutes)

module.exports = app
