import MinutesFormat from './MinutesModel'

/**
 * Represents an event
 * @class
 * @see MinutesFormat {@link https://github.com/lostmart/test_recrutement-fr_senior/blob/master/Readme.md}
 * @see EventModel {@link https://github.com/lostmart/test_recrutement-fr_senior/blob/master/Readme.md}
 */

class EventModel {
	/**
	 * Create an instance of the EventModel class.
	 * @constructor
	 * @param {Object} params - The parameters for creating an event model.
	 * @param {string} params.id - The ID of the event. If not provided, defaults to null.
	 * @param {Date} params.start - The start time of the event. If not provided, defaults to null.
	 * @param {number} params.duration - The duration of the event. If not provided, defaults to null.
	 */
	constructor({ id, start, duration }) {
		/**
		 * The ID of the event provided by the input (mock data or fetch)
		 * @type {string|null}
		 */
		this.id = id ?? null
		/**
		 * The starting time provided by the input (mock data or fetch)
		 * @type {string|null} - ex: "15:00" | "9:00"
		 */
		this.start = start ?? null
		/**
		 * The start time of the event provided by the input (mock data or fetch)
		 * @type {number|null} - ex: 60 | 15
		 */
		this.duration = duration ?? null
		/**
		 * The time in minutes format for the start time of the event.
		 * @constructor
		 * @type {MinutesFormat}
		 */
		this.timeInMinutes = new MinutesFormat(this.start)
		/**
		 * The width of the event (can be set later)
		 * @see detectOverlaping
		 * @type {number}
		 */
		this.width = 99.8
		/**
		 * The width of the event (can be set later)
		 * @see detectOverlaping
		 * @type {number}
		 */
		this.left = 0.1
	}

	get zeroBasedTimeInMinutes() {
		return this.timeInMinutes.totalMinutes
	}

	get finishingTimeInMinutes() {
		return this.timeInMinutes.totalMinutes + this.duration
	}
}

export default EventModel
