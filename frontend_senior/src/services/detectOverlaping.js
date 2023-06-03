const detectOverlaping = (events) => {
	/**
	 * @param {array} events -
	 */

	const callBack = (event) => {
		/**
		 *
		 */
	}

	// events.map(callBack)
	for (let i = 0; i < events.length - 1; i++) {
		const currentEvent = events[i]
		const currentZeroBasedTime = currentEvent.timeInMinutes.totalMinutes

		const nextEvent = events[i + 1]
		const nextZeroBasedTime = nextEvent.timeInMinutes.totalMinutes

		if (currentZeroBasedTime === nextZeroBasedTime) {
			currentEvent.width = 50
		}
		if (i > 0) {
			const previousEvent = events[i - 1]
			const previousZeroBasedTime = previousEvent.timeInMinutes.totalMinutes
			if (previousZeroBasedTime === currentZeroBasedTime) {
				currentEvent.width = 50
				currentEvent.left = 50
			}
		}
		// console.log(currentZeroBasedTime, nextZeroBasedTime)
		// console.log(nextEvent)
	}
	console.log(events)
	return events
}

export default detectOverlaping
