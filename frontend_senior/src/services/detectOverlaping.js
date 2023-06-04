const detectOverlaping = (events) => {
	/**
	 * @param {array} events -
	 */

	/*    */
	let eventsPerRow = []
	let next = false
	let rendered = false

	/*  check overlaps in current endTime and next startinTime   */
	const endAndStart = (currentFinishTime, nextStartTime) => {
		if (currentFinishTime >= nextStartTime) return true
		else return false
	}

	// const callBack = (event, indx) => {
	// 	// for (let i = 0; i < events.length - 1; i++) {
	// 	// 	/* current event  */
	// 	// 	const currentEvent = events[i]
	// 	// 	const currentZeroBasedTime = currentEvent.timeInMinutes.totalMinutes
	// 	// 	const currentEndPeriod = currentZeroBasedTime + currentEvent.duration

	// 	// 	/*  next event   */
	// 	// 	const nextEvent = events[i + 1]
	// 	// 	const nextZeroBasedTime = nextEvent.timeInMinutes.totalMinutes
	// 	// 	const nextEndPeriod = nextZeroBasedTime + nextEvent.duration

	// 	// 	// console.log(
	// 	// 	// 	'current: ',
	// 	// 	// 	currentZeroBasedTime,
	// 	// 	// 	currentEndPeriod,
	// 	// 	// 	currentEvent.id
	// 	// 	// )
	// 	// 	// console.log('next: ', nextZeroBasedTime, nextEndPeriod, nextEvent.id)

	// 	// 	/* detect first pass  */
	// 	// 	// if (i === 0) {
	// 	// 	// 	console.log('first pass !')
	// 	// 	// }

	// 	// 	/* detect end of current event and start of next one */
	// 	// 	// if (currentEndPeriod >= nextZeroBasedTime) {
	// 	// 	// 	eventsPerRow.push(currentEvent)
	// 	// 	// } else {
	// 	// 	// 	eventsPerRow = []
	// 	// 	// }
	// 	// }

	// 	const currentEvent = event
	// 	const currentZeroBasedTime = currentEvent.timeInMinutes.totalMinutes
	// 	const currentEndPeriod = currentZeroBasedTime + currentEvent.duration

	// 	/* runs on first event only   */
	// 	if (indx === 0) {
	// 		/*  next event   */
	// 		const nextEvent = events[indx + 1]
	// 		const nextZeroBasedTime = nextEvent.timeInMinutes.totalMinutes

	// 		if (endAndStart(currentEndPeriod, nextZeroBasedTime))
	// 			eventsPerRow.push(currentEvent)
	// 	} else {
	// 		/*  run after the first pass  */
	// 		if (endAndStart(currentEndPeriod, nextZeroBasedTime)) {
	// 			console.log('increible !!')
	// 		}
	// 	}

	// 	/*  TEST NEXT EVENT   */
	// 	console.log(eventsPerRow, 'next loop !')
	// 	return event
	// }

	for (let i = 0; i < events.length - 1; i++) {
		/* current event  */
		const currentEvent = events[i]
		const currentZeroBasedTime = currentEvent.timeInMinutes.totalMinutes
		const currentEndPeriod = currentZeroBasedTime + currentEvent.duration

		/*  next event   */
		const nextEvent = events[i + 1]
		const nextZeroBasedTime = nextEvent.timeInMinutes.totalMinutes
		const nextEndPeriod = nextZeroBasedTime + nextEvent.duration

		// console.log(
		// 	'current: ',
		// 	currentZeroBasedTime,
		// 	currentEndPeriod,
		// 	currentEvent.id
		// )
		// console.log('next: ', nextZeroBasedTime, nextEndPeriod, nextEvent.id)

		/* detect first pass  */
		if (i === 0) {
			const startOverlap = endAndStart(currentEndPeriod, nextZeroBasedTime)
			if (startOverlap) eventsPerRow.push(currentEvent)
			else next = true
		} else {
			/*  previous event   */
			const previousEvent = events[i - 1]
			console.log(previousEvent.timeInMinutes)

			/* all the other passes   */
			const startOverlap = endAndStart(currentEndPeriod, nextZeroBasedTime)

			/*  check next event   */
			if (
				currentZeroBasedTime <
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

		/* detect end of current event and start of next one */
		// if (currentEndPeriod >= nextZeroBasedTime) {
		// 	eventsPerRow.push(currentEvent)
		// } else {
		// 	eventsPerRow = []
		// }

		// 	/*  TEST NEXT EVENT   */
		/*   modify widths and left positions         */
		if (eventsPerRow.length > 0 && next === true) {
			eventsPerRow.forEach((event, indx) => {
				event.width = 99.8 / eventsPerRow.length
				if (indx > 0) {
					event.left = (99.8 / eventsPerRow.length) * indx
				}
			})
			next = false
			rendered = true
			eventsPerRow = []
		}

		// if (rendered && !next) {
		// 	eventsPerRow = []
		// }

		console.log(eventsPerRow, 'current: ', currentEvent.id)
	}

	return events
}

export default detectOverlaping
