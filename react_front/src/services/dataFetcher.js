import axios from 'axios'
/*  mock data  */
import inputData from '../data/input.json'

/* helpers  */
import EventModel from '../services/EventModel'
import orderCronologically from './orderCronollogically'
import detectOverlaping from '../services/detectOverlaping'

const offlineMode = true
let formattedData

/**
 * Creates a new EventModel
 * Format data by creating an instance of the EventModel class with the provided event data.
 *  @param {Object} event - The event data to format.
 *  @returns {EventModel} - The formatted event as an instance
 *  @see EventModel {@link https://github.com/lostmart/test_recrutement-fr_senior/blob/master/Readme.md}
 */
const formatData = (event) => {
	const newEvent = new EventModel(event)
	return newEvent
}

/**
 * Fetches data from an API endpoint
 * @param {string} url - The URL of the API endpoint to fetch data from.
 * @returns {Promise<Array>} - A promise that resolves to an array of events.
 */
const fetchFromApi = async (url) => {
	const resData = await axios.get(url)
	return resData.data.events
}

// console.log(await fetchFromApi('http://localhost:5000/api/events'))

/* data based using EventModel   */
if (offlineMode) {
	formattedData = inputData.map(formatData)
} else {
	formattedData = await fetchFromApi('http://localhost:5000/api/events')
	// console.log(formattedData)
}

// formattedData = inputData.map(formatData)

/* order the event list chronologgically in an ascending manner  */
export const orderedEvents = orderCronologically(formattedData)

/*  detects overlapin among events and adjust 
their widths and left position accordingly */
detectOverlaping(orderedEvents)

export default orderedEvents
