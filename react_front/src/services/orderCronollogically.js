/** Returns the events in chronologgical order based on the starting time
 * @param {array} events - unordered array of events
 * @returns {array} - sorted array of events
 */
function orderCronologically(events) {

	/**
	 * Sorts events based on their time start in ascending order.
	 * @param {Object} a - The first event to compare.
	 * @param {Object} b - The second event to compare.
	 * @returns {number} A negative number if `a` is less than `b`, a positive number if `a` is greater than `b`, or 0 if they are equal.
	 */
	const sortByTimeStart = (a, b) => {
		/**
		 * The starting time in minutes for the first event.
		 * @type {number}
		 */
		const timeA = a.timeInMinutes.totalMinutes
		/**
		 * The starting time in minutes for the second event.
		 * @type {number}
		 */
		const timeB = b.timeInMinutes.totalMinutes
		return timeA - timeB
	}

	const orderedEvents = events.sort(sortByTimeStart)

	return orderedEvents
}

export default orderCronologically
