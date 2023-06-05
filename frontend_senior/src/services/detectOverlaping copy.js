const detectOverlaping = (events) => {
	/**
	 * @param {array} events -
	 */

	/* GLOBAL VARIABLES  */
	let eventsPerRow = [] // determine the umber of events that will share the same row
	let next = false // determine if we can start evaluation the following event
	let innerIndx = 0 // index to call recursive fn

	/*  FUNCTIONS  */

	/* function that calls itself  */
	const recursiveCheck = (currentEvent) => {
		/*  exit condition  */
		if (innerIndx >= events.length) {
			innerIndx = 0
			return true
		} else {
			if (currentEvent.id != events[innerIndx].id) {
				console.log('run check', currentEvent.id, events[innerIndx].id)
				if (
					currentEvent.zeroBasedTimeInMinutes ===
					events[innerIndx].zeroBasedTimeInMinutes
				) {
					eventsPerRow.push(currentEvent)
					console.log(currentEvent)
				}
			} else {
				console.log('el mismo')
			}

			innerIndx++
			recursiveCheck(currentEvent)
		}
	}

	/*  same starting time  */
	const sameStartingTime = (currentEvent, nextEvent) => {
		if (
			currentEvent.zeroBasedTimeInMinutes ===
				nextEvent.zeroBasedTimeInMinutes &&
			currentEvent.id != nextEvent.id
		) {
			return true
		}
	}

	/**
	 * Adjusts the width and left position of events in a row if there are events present and a next event is available.
	 *
	 * @param {Array} eventsPerRow - An array of events in the current row.
	 * @param {boolean} next - Indicates if there is a next event available.
	 */
	const adjustEventsInRow = (eventsPerRow, next) => {
		console.log(eventsPerRow)
		if (eventsPerRow.length > 0 && next) {
			const eventCount = eventsPerRow.length
			const eventWidth = 99.8 / eventCount

			/*  check ! ⚠️   */
			eventsPerRow.forEach((event, indx) => {
				event.width = eventWidth
				// if (indx > 0) {
				// 	event.left = 100 / 3
				// }
			})
		}
		eventsPerRow = []
	}

	for (let i = 0; i < events.length - 1; i++) {
		/* current event  */
		const currentEvent = events[i]

		/*  next event   */
		// const nextEvent = events[i + 1]
		// const nextZeroBasedTime = nextEvent.zeroBasedTimeInMinutes
		// const nextEndPeriod = nextEvent.zeroBasedTimeInMinutes

		/*  EVALUATE OVERLAP FOR EACH EVENT   */
		/* detect first pass  */
		if (i === 0) {
			const startOverlap = recursiveCheck(currentEvent)
			if (startOverlap) eventsPerRow.push(currentEvent)
			else next = true
		} else {
			/* all the other passes   */
			recursiveCheck(currentEvent)
		}
		console.log('outside! ', eventsPerRow, next)

		/* END OF EVALUATE OVERLAP FOR EACH EVENT   */

		/*  detectar ultimo pase  */

		// if (i >= events.length - 2) {
		// 	next = true
		// }

		adjustEventsInRow(eventsPerRow, next)

		// console.log(eventsPerRow, 'current : ', currentEvent.id)
	}

	return events
}

export default detectOverlaping
