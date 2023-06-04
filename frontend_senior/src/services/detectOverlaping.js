const detectOverlaping = (events) => {
	/**
	 * @param {array} events -
	 */

	// events.map(callBack)

	let i = 0
	let ratioDivision = 2
	while (i < events.length - 1) {
		const currentEvent = events[i]
		const currentZeroBasedTime = currentEvent.timeInMinutes.totalMinutes
		const currentEndPeriod = currentZeroBasedTime + currentEvent.duration

		const nextEvent = events[i + 1]
		const nextZeroBasedTime = nextEvent.timeInMinutes.totalMinutes
		const nextEndPeriod = nextZeroBasedTime + nextEvent.duration

		console.log('current: ', currentZeroBasedTime, currentEndPeriod)
		console.log('next: ', nextZeroBasedTime, nextEndPeriod)
		/* affect the current   */
		if (currentEndPeriod < nextZeroBasedTime) {
			currentEvent.width = 100
		}
		if (i > 0) {
			const previousEvent = events[i - 1]
			const previousZeroBasedTime = previousEvent.timeInMinutes.totalMinutes
			const previousEndPeriod = previousZeroBasedTime + previousEvent.duration

			if (currentEndPeriod > nextZeroBasedTime) {
				currentEvent.width = 100 / ratioDivision - 0.2
				if (currentZeroBasedTime < previousEndPeriod) {
					currentEvent.left = 100 / ratioDivision
				}
				if (nextZeroBasedTime < currentEndPeriod) {
					nextEvent.width = 5
				}
			}
		}
		i++
	}
	// console.log(events)
	return events
}

export default detectOverlaping
