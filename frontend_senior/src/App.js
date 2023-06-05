/*  mock data  */
import inpuData from './data/input.json'

/* helpers  */
import EventModel from './services/EventModel'
import orderCronologically from './services/OrderCronollogically'
import detectOverlaping from './services/detectOverlaping'

/*  components  */
import HourContainer from './components/HourContainer' // background division / color
import EventContainer from './components/EventContainer' // container for all the even data passed as prop

/**
 * Creates a new EventModel
 * Format data by creating an instance of the EventModel class with the provided event data.
 *  @param {Object} event - The event data to format.
 *  @returns {EventModel} - The formatted event as an instance
 */
const formatData = (event) => {
	const newEvent = new EventModel(event)
	return newEvent
}

/** Render the hour containers for a time range of 9 AM to 9 PM
 * each element corresponds an hour
 * @returns {Array<ReactElement>} - An array of React
 * elements representing the hour containers.
 */

const renderHours = () => {
	const elements = []
	for (let i = 0; i < 13; i++) {
		elements.push(<HourContainer key={i} hour={i + 9} />)
	}

	return elements
}

/** Render event containers for the ordered events.
 * @returns {Array<ReactElement>} - An array of React
 * elements representing the event containers.
 */
const renderEvents = () => {
	return orderedEvents.map((event) => {
		return <EventContainer key={event.id} eventDetails={event} />
	})
}

const formattedData = inpuData.map(formatData)

const orderedEvents = orderCronologically(formattedData)

detectOverlaping(orderedEvents)

/**
 * The main component of the application.
 * @returns {JSX.Element} - The rendered JSX element
 * representing the application.
 */

function App() {
	const hours = renderHours()
	const events = renderEvents()

	return (
		<div className="container">
			{hours} {events}
		</div>
	)
}

export default App
