import PropTypes from 'prop-types'
import styles from './index.module.scss'

/*  helpers  */
import MinutesFormat from '../../services/MinutesModel'
import placeCalculator from '../../services/PlaceCalculator'

const EventContainer = ({ eventId, startTime, duration }) => {
	const startingTime = new MinutesFormat(startTime)
	const porcetangeFromTop = placeCalculator(startingTime.totalMinutes)
	const endTime = placeCalculator(duration)
	console.log(endTime)
	return (
		<div
			className={styles.eventContainer}
			style={{ top: `${porcetangeFromTop}%`, height: `${endTime}%` }}>
			{eventId}
		</div>
	)
}

EventContainer.propTypes = {
	/**
	 *Returns the sum of a and b
	 * @param {number} eventId
	 * @param {string} startTime
	 * @param {number} duration
	 * @returns {JSX.Element}
	 */
	eventId: PropTypes.number,
	startTime: PropTypes.string,
	duration: PropTypes.number,
}

export default EventContainer
