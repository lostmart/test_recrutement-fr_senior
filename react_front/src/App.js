/*  import ready to render events    */
import orderedEvents from './services/dataFetcher'

/*  components  */
import HourContainer from './components/HourContainer' // background division / color
import EventContainer from './components/EventContainer' // container for all the even data passed as prop
import Alert from './components/Alert'


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
			<Alert text="Offline Mode" />
			{hours} {events}
		</div>
	)
}

export default App
