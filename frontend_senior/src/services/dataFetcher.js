import inputData from '../data/input.json'

/* helpers  */
import EventModel from '../services/EventModel'
import orderCronologically from './orderCronollogically'
import detectOverlaping from '../services/detectOverlaping'

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

/* data based using EventModel   */
const formattedData = inputData.map(formatData)

/* order the event list chronologgically in an ascending manner  */
export const orderedEvents = orderCronologically(formattedData)

/*  detects overlapin among events and adjust 
their widths and left position accordingly */
detectOverlaping(orderedEvents)

export default orderedEvents
