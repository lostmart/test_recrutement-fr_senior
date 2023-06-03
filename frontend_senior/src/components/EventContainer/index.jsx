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
	 * Returns a React element that accepts 3 props
	 * @param {number} eventId - The ID of the event.
	 * @param {string} startTime - The start time of the event.
	 * @param {number} duration - The duration of the event.
	 * @returns {JSX.Element} The React element representing the event.
	 */
	eventId: PropTypes.number,
	startTime: PropTypes.string,
	duration: PropTypes.number,
}

export default EventContainer
