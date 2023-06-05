const detectOverlaping = (events) => {
	/**
	 * @param {array} events -
	 */

	/* GLOBAL VARIABLES  */
	let eventsPerRow = [] // determine the umber of events that will share the same row

	/*  FUNCTIONS  */

	const mergeArrays = (arr) => {
		const merged = []

		// Iterate through each array in the input
		for (let i = 0; i < arr.length; i++) {
			let currentArray = arr[i]
			let found = false

			// Check if the current array already exists in the merged array
			for (let j = 0; j < merged.length; j++) {
				if (currentArray.some((val) => merged[j].includes(val))) {
					// Merge the arrays if there are common values
					merged[j] = Array.from(new Set([...merged[j], ...currentArray]))
					found = true
					break
				}
			}

			// If the current array doesn't exist in the merged array, add it as a new array
			if (!found) {
				merged.push(currentArray)
			}
		}

		return merged
	}

	const adjustEventsInRow = (eventsArray) => {
		eventsArray.forEach((events) => {
			if (events.length > 1) {
				events.forEach((event, indx) => {
					const eventCount = events.length

					event.width = 99.3 / eventCount
					if (indx > 0) {
						event.left = (100 / events.length) * indx
						console.log(indx)
					}
				})
			}
		})
	}

	for (let i = 0; i < events.length - 1; i++) {
		/* current event  */
		const currentEvent = events[i]
		// console.table({
		// 	'event ID': currentEvent.id,
		// 	'event index': i,
		// 	'event starting time': currentEvent.zeroBasedTimeInMinutes,
		// 	'check event': events[i].id + 1,
		// })
		for (let indx = i + 1; indx < events.length; indx++) {
			const followingEvent = events[indx]
			// console.table({
			// 	'event ID': currentEvent.id,
			// 	'check event': followingEvent.id,
			// })
			if (
				currentEvent.finishingTimeInMinutes >=
				followingEvent.zeroBasedTimeInMinutes
			) {
				const newArr = [currentEvent, followingEvent]
				eventsPerRow.push(newArr)
			} else {
				const newArr = [currentEvent]
				eventsPerRow.push(newArr)
				// console.log(newArr)
			}
			/* last event is not being included in the else part !!  */
		}
	}

	// console.log(mergeArrays(eventsPerRow))

	adjustEventsInRow(mergeArrays(eventsPerRow))

	return events
}

export default detectOverlaping
