import { useEffect } from 'react'

/*  mock data  */
import inpuData from './data/input.json'

/* helpers  */
import minutesFormat from './services/MinutesModel'

import orderCronologically from './services/OrderCronollogically'
import ElementCoordinates from './services/ElementCoordinatesModel'
import detectCollission from './services/DetectCollission'

/*  components  */
import EventContainer from './components/EventContainer'
import HourContainer from './components/HourContainer'

const formated = inpuData.map((event) => {
	const formatedTime = new minutesFormat(event.start)
	return formatedTime.totalMinutes
})
console.log(formated)

// console.log(ordered)
const renderHours = () => {
	/** Return an array of elements to stack in the container
	 * each element corresponds an hour
	 * @returns {JSX.Element}
	 */
	const elements = []
	for (let i = 0; i < 13; i++) {
		elements.push(<HourContainer key={i} hour={i + 9} />)
	}

	return elements
}

const renderEvents = () => {
	/** Renders the ammped array af all the given events
	 * @returns {array} - array of elements containing all the event's data
	 */
	return inpuData.map((event) => {
		return (
			<EventContainer
				key={event.id}
				eventId={event.id}
				startTime={event.start}
				duration={event.duration}
			/>
		)
	})
}

function App() {
	/**
	 * @returns {JSX.Element} - renders a div element with the "container" class and calls
	 * two render functions renderHours() & renderEvents()
	 */

	useEffect(() => {
		const eventsDomArray = document.querySelectorAll('[data-event]')
		eventsDomArray.forEach((elem) => {
			const domElem = new ElementCoordinates(elem)
			// console.log(detectCollission(domElem.bounderies))
		})
	}, [])

	return (
		<div className="container">
			{renderHours()} {renderEvents()}
			<div data-animal>Element to access</div>
		</div>
	)
}

export default App
