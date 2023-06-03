import MinutesFormat from './MinutesModel'

/**
 * Represents an event
 * @class
 * @returns {object} - an event object with formatted time
 * @see MinutesFormat {@link https://github.com/lostmart/test_recrutement-fr_senior/blob/master/Readme.md}
 */

class EvenModel {
	constructor({ id, start, duration }) {
		this.id = id ?? null
		this.start = start ?? null
		this.duration = duration ?? null
		this.timeInMinutes = new MinutesFormat(this.start)
	}
}

export default EvenModel
