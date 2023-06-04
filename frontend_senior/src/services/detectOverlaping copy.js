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

		console.log(
			'current: ',
			currentZeroBasedTime,
			currentEndPeriod,
			currentEvent.id
		)
		console.log('next: ', nextZeroBasedTime, nextEndPeriod, nextEvent.id)

		/* first event: check if the next event start before current finishes  */
		if (currentEndPeriod < nextZeroBasedTime && i === 0) {
			currentEvent.width = 100
		}
		/*  we've reached the second event    */
		if (i > 0) {
			const previousEvent = events[i - 1]
			const previousZeroBasedTime = previousEvent.timeInMinutes.totalMinutes
			const previousEndPeriod = previousZeroBasedTime + previousEvent.duration

			/* if current event ends before next one starts   */
			if (currentEndPeriod > nextZeroBasedTime) {
				currentEvent.width = 100 / ratioDivision - 0.2
				/* if current event starts before the previous one ends move it to the left   */
				if (currentZeroBasedTime < previousEndPeriod) {
					currentEvent.left = 100 / ratioDivision
				}
				/*  if next event starts before current event finishes  */
				if (currentEndPeriod > nextZeroBasedTime) {
					nextEvent.width = 100 / ratioDivision - 0.2
				}
			}
		}
		console.log('start new loop')
		i++
	}
	// console.log(events)
	return events
}

export default detectOverlaping
