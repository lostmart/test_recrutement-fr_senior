import inputData from '../data/input.json'

/* helpers  */
import EventModel from '../services/EventModel'
import orderCronologically from '../services/OrderCronollogically'
import detectOverlaping from '../services/detectOverlaping'

/**
 * Creates a new EventModel
 * Format data by creating an instance of the EventModel class with the provided event data.
 *  @param {Object} event - The event data to format.
 *  @returns {EventModel} - The formatted event as an instance
 */
const formatData = (event) => {
	const newEvent = new EventModel(event)
	return newEvent
}

const formattedData = inputData.map(formatData)

export const orderedEvents = orderCronologically(formattedData)

const rederReadyEvents = detectOverlaping(orderedEvents)

export default rederReadyEvents
