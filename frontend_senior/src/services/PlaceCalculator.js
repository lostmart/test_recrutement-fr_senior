const placeCalculator = (startTimeInMinutes) => {
	/**
	 * @param {number} - startTimeInMinutes
	 * @returns {array} The right position from the top in porcentage based on the starting time
	 */

	const totalNoMinutes = 720
	return (startTimeInMinutes * 100) / totalNoMinutes
}

export default placeCalculator
