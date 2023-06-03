class MinutesFormat {
	/**
	 * @constructor
	 * @param {string} time -  Starting time of each event
	 */
	constructor(time) {
		this.time = time ?? null
	}

	/**
	 * Return the number of minutes based on the hours provided
	 * the minutes calculated are based on the start of the day (9 AM)
	 * {@link https://github.com/lostmart/test_recrutement-fr_senior/blob/master/Readme.md}
	 * @returns {number}
	 */
	get hoursToMinutes() {
		const hoursOnly = this.time.slice(0, 2)
		const hoursFromStartDay = parseInt(hoursOnly) - 9
		return hoursFromStartDay * 60
	}

	/**
	 * Return the number of minutes based on the minutes provided
	 * @returns {number}
	 */
	get minutesToMinutes() {
		const minutesOnly = this.time.slice(3, 5)
		return parseInt(minutesOnly)
	}

	/**
	 * Return the sum of hours passed into minutes plues the rest of the minutes
	 * @returns {number}
	 */
	get totalMinutes() {
		return this.hoursToMinutes + this.minutesToMinutes
	}
}

export default MinutesFormat
