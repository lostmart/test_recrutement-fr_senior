import PropTypes from 'prop-types'
import styles from './index.module.scss'

/*  helpers  */
import placeCalculator from '../../services/PlaceCalculator'

/**
 * Returns a React element that accepts 3 props
 * @param {object} eventDetails - The ID of the event
 * {number} duration - The duration of the event
 * {object} timeInMinutes - instance of MinutesFormat
 * @see MinutesFormat {@link https://github.com/lostmart/test_recrutement-fr_senior/blob/master/Readme.md}
 * @returns {JSX.Element} The React element representing the event.
 */

const EventContainer = ({ eventDetails }) => {
	const showDetails = () => {
		console.log(eventDetails)
	}

	const porcetangeFromTop = placeCalculator(
		eventDetails.timeInMinutes.totalMinutes
	)
	const endTime = placeCalculator(eventDetails.duration)
	return (
		<div
			onClick={showDetails}
			className={styles.eventContainer}
			data-event
			style={{
				top: `${porcetangeFromTop}%`,
				height: `${endTime}%`,
				width: `${eventDetails.width}%`,
				left: `${eventDetails.left}%`,
			}}>
			{eventDetails.id}
		</div>
	)
}

EventContainer.propTypes = {
	eventId: PropTypes.number,
	startTime: PropTypes.string,
	duration: PropTypes.number,
}

export default EventContainer
