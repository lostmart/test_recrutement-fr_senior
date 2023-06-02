import PropTypes from 'prop-types'
import styles from './index.module.scss'

/*  helpers  */
import MinutesFormat from '../../services/MinutesModel'
import placeCalculator from '../../services/PlaceCalculator'

const EventContainer = ({ eventId, startTime }) => {
	const startingTime = new MinutesFormat(startTime)
	// console.log(startingTime.totalMinutes)
	const porcetangeFromTop = placeCalculator(startingTime.totalMinutes)
	console.log(porcetangeFromTop)
	return (
		<div
			className={styles.eventContainer}
			style={{ top: `${porcetangeFromTop}%` }}>
			{eventId}
		</div>
	)
}

EventContainer.propTypes = {
	/**
	 *Returns the sum of a and b
	 * @param {number} eventId
	 * @param {string} startTime
	 * @returns {JSX.Element}
	 */
	eventId: PropTypes.number,
	topPosition: PropTypes.number,
}

export default EventContainer
