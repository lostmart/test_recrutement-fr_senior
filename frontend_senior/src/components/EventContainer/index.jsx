import PropTypes from 'prop-types'
import styles from './index.module.scss'

/*  helpers  */
import placeCalculator from '../../services/PlaceCalculator'

const EventContainer = ({ eventId, duration, timeInMinutes, width, left }) => {
	const porcetangeFromTop = placeCalculator(timeInMinutes.totalMinutes)
	const endTime = placeCalculator(duration)
	return (
		<div
			className={styles.eventContainer}
			data-event
			style={{
				top: `${porcetangeFromTop}%`,
				height: `${endTime}%`,
				width: `${width}%`,
				left: `${left}%`,
			}}>
			{eventId}
		</div>
	)
}

EventContainer.propTypes = {
	/**
	 * Returns a React element that accepts 3 props
	 * @param {number} eventId - The ID of the event
	 * @param {number} duration - The duration of the event
	 * @param {object} timeInMinutes - instance of MinutesFormat
	 * @see MinutesFormat {@link https://github.com/lostmart/test_recrutement-fr_senior/blob/master/Readme.md}
	 * @returns {JSX.Element} The React element representing the event.
	 */
	eventId: PropTypes.number,
	startTime: PropTypes.string,
	duration: PropTypes.number,
}

export default EventContainer
