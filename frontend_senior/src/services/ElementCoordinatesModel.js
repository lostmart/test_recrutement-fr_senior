class ElementCoordinates {
	/**
	 * @param {HTMLElement} domElement - The HTML element
	 */
	constructor(domElement) {
		this.domElement = domElement ?? null
	}

	/**
	 * Return an object rendered element's details
	 * @returns {object}
	 */
	get bounderies() {
		return this.domElement.getBoundingClientRect()
	}
}

export default ElementCoordinates
