const express = require('express')
const router = express.Router()

const mockData = require('../mockData/inputData')

// GET
router.get('/', (req, res) => {
	res.json({
		events: mockData,
	})
})

module.exports = router
