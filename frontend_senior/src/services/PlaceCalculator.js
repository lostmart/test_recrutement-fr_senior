const placeCalculator = (startTimeInMinutes) => {
	/**
	 * Returns a porcentage based on the total length of 12 hours
	 * 780 minutes = 13 spaces (12 hours)
	 * @param {number} - startTimeInMinutes
	 * @returns {number} The right position from the top in porcentage based on provided
	 */

	const totalNoMinutes = 780
	return (startTimeInMinutes * 100) / totalNoMinutes
}

export default placeCalculator
