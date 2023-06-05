const detectOverlaping = (events) => {
	/**
	 * @param {array} events -
	 */

	/* GLOBAL VARIABLES  */
	let eventsPerRow = [] // determine the umber of events that will share the same row

	/*  FUNCTIONS  */

	/**
	 * @param {Array<Array>} arr - An array of arrays to merge.
	 *	@returns {Array<Array>} - The merged array.
	 * @returns
	 */
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

	/**
	 *Adjusts the width and position of events in a row.
	 * @param {Array<Array<Object>>} eventsArray - An array of arrays containing events.
	 */

	const adjustEventsInRow = (eventsArray) => {
		eventsArray.forEach((events) => {
			if (events.length > 1) {
				events.forEach((event, indx) => {
					const eventCount = events.length

					event.width = 99.9 / eventCount
					if (indx > 0) {
						event.left = (100 / events.length) * indx
					}
				})
			}
		})
	}

	for (let i = 0; i < events.length - 1; i++) {
		/* current event  */
		const currentEvent = events[i]
		for (let indx = i + 1; indx < events.length; indx++) {
			const followingEvent = events[indx]
			if (
				currentEvent.finishingTimeInMinutes >=
				followingEvent.zeroBasedTimeInMinutes
			) {
				const newArr = [currentEvent, followingEvent]
				eventsPerRow.push(newArr)
			} else {
				const newArr = [currentEvent]
				eventsPerRow.push(newArr)
			}
		}
	}

	adjustEventsInRow(mergeArrays(eventsPerRow))

	return events
}

export default detectOverlaping
