/*  mock data  */
import inpuData from './data/input.json'
//import inpuData from './data/input-2.json'

/* helpers  */
import EventModel from './services/EventModel'
import orderCronologically from './services/OrderCronollogically'
import detectOverlaping from './services/detectOverlaping'

/*  components  */
import EventContainer from './components/EventContainer'
import HourContainer from './components/HourContainer'

const formatData = (event) => {
	/**
	 * Creates a new EventModel
	 * @class
	 */
	const newEvent = new EventModel(event)
	return newEvent
}

const formattedData = inpuData.map(formatData)

const orderedEvents = orderCronologically(formattedData)

detectOverlaping(orderedEvents)

// console.log(orderedEvents)

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
	return orderedEvents.map((event) => {
		return (
			<EventContainer
				key={event.id}
				// eventId={event.id}
				// duration={event.duration}
				// timeInMinutes={event.timeInMinutes}
				// width={event.width}
				// left={event.left}
				eventDetails={event}
			/>
		)
	})
}

function App() {
	/**
	 * @returns {JSX.Element} - renders a div element with the "container" class and calls
	 * two render functions renderHours() & renderEvents()
	 */

	// TAL VEZ NO LO NECESITE
	// useEffect(() => {
	// 	const eventsDomArray = document.querySelectorAll('[data-event]')
	// 	eventsDomArray.forEach((elem) => {
	// 		const domElem = new ElementCoordinates(elem)
	// 		// console.log(detectCollission(domElem.bounderies))
	// 	})
	// }, [])

	return (
		<div className="container">
			{renderHours()} {renderEvents()}
		</div>
	)
}

export default App
