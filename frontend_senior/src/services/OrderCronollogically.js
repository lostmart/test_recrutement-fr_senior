function orderCronologically(events) {
	/** Returns the events in chronologgical order based on the starting time
	 * @param {array} events - unordered array of events
	 * @returns {array} - sorted array of events
	 */

	const sortByTimeStart = (a, b) => {
		/**
		 * @param {object} - each event from the input array
		 */
		const timeA = a.timeInMinutes.totalMinutes
		const timeB = b.timeInMinutes.totalMinutes
		return timeA - timeB
	}

	const orderedEvents = events.sort(sortByTimeStart)

	console.log(orderedEvents)
	return orderedEvents
}

export default orderCronologically
