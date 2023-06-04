const detectOverlaping = (events) => {
	/**
	 * @param {array} events -
	 */

	/*    */
	let eventsPerRow = []
	let next = false

	/**
	 * Determines if the current finish time is greater than or equal to the next start time.
	 * @param {number} currentFinishTime - The finish time of the current event.
	 * @param {number} nextStartTime - The start time of the next event.
	 * @returns  {boolean} -  Returns true if the current finish time is greater than or equal to the next start time, otherwise returns false.
	 */

	const currentEndNextStart = (currentFinishTime, nextStartTime) => {
		if (currentFinishTime >= nextStartTime) return true
		else return false
	}

	for (let i = 0; i < events.length - 1; i++) {
		/* current event  */
		const currentEvent = events[i]

		/*  next event   */
		const nextEvent = events[i + 1]
		const nextZeroBasedTime = nextEvent.finishingTimeInMinutes
		const nextEndPeriod = nextEvent.zeroBasedTimeInMinutes

		/* detect first pass  */
		if (i === 0) {
			const startOverlap = currentEndNextStart(
				currentEvent.zeroBasedTimeInMinutes,
				nextZeroBasedTime
			)
			if (startOverlap) eventsPerRow.push(currentEvent)
			else next = true
		} else {
			/*  check overlap with previous event   */
			const previousEvent = events[i - 1]
			// const previousZeroBasedTime = previousEvent.timeInMinutes

			/* all the other passes   */
			const startOverlap = currentEndNextStart(
				currentEvent.finishingTimeInMinutes,
				currentEvent.zeroBasedTimeInMinutes
			)

			/*  check next event   */
			if (
				currentEvent.zeroBasedTimeInMinutes <
					previousEvent.timeInMinutes.totalMinutes + previousEvent.duration ||
				startOverlap
			) {
				eventsPerRow.push(currentEvent)
			} else {
				next = true
			}

			/*  check next event   */
		}

		/*  detectar ultimo pase  */

		if (i >= events.length - 2) {
			next = true
		}

		/**
		 * Adjusts the width and left position of events in a row if there are events present and a next event is available.
		 *
		 * @param {Array} eventsPerRow - An array of events in the current row.
		 * @param {boolean} next - Indicates if there is a next event available.
		 */
		const adjustEventsInRow = (eventsPerRow, next) => {
			if (eventsPerRow.length > 0 && next) {
				const eventCount = eventsPerRow.length
				const eventWidth = 99.8 / eventCount

				eventsPerRow.forEach((event, indx) => {
					event.width = eventWidth
					if (indx > 0) {
						event.left = eventWidth * indx
					}
				})

				next = false
			}
			eventsPerRow = []
		}

		adjustEventsInRow(eventsPerRow, next)
	}

	console.log(eventsPerRow)

	return events
}

export default detectOverlaping
