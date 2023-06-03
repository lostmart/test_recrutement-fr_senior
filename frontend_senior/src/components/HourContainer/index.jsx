import PropTypes from 'prop-types'

const HourContainer = ({ hour }) => {
	return (
		<div className="hourContainer">
			<span className="timeArea">{hour}:00</span>
		</div>
	)
}

HourContainer.propTypes = {
	/**
	 * Returns a React element for each hour that accepts 1 prop
	 * @param {number} hour - Starting number for each hour (12 hours in total)
	 * @returns {JSX.Element} The React element with a hardcoded class
	 * and a child element that prints the each starting hour of the day
	 */
	hour: PropTypes.number,
}

export default HourContainer
