const detectOverlaping = (events) => {
	/**
	 * @param {array} events -
	 */

	/*    */
	let eventsPerRow = []

	const callBack = (event) => {
		for (let i = 0; i < events.length - 1; i++) {
			/* current event  */
			const currentEvent = events[i]
			const currentZeroBasedTime = currentEvent.timeInMinutes.totalMinutes
			const currentEndPeriod = currentZeroBasedTime + currentEvent.duration

			/*  next event   */
			const nextEvent = events[i + 1]
			const nextZeroBasedTime = nextEvent.timeInMinutes.totalMinutes
			const nextEndPeriod = nextZeroBasedTime + nextEvent.duration

			console.log(
				'current: ',
				currentZeroBasedTime,
				currentEndPeriod,
				currentEvent.id
			)
			console.log('next: ', nextZeroBasedTime, nextEndPeriod, nextEvent.id)

			if (currentEndPeriod >= nextZeroBasedTime) {
				currentEvent.width = 40
			} else {
			}
		}

		return event
	}

	const result = events.map(callBack)
	return result
}

export default detectOverlaping
