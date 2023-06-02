/*  mock data  */
import inpuData from './data/input.json'

/*  components  */
import EventContainer from './components/EventContainer'
import HourContainer from './components/HourContainer'

const rednerHours = () => {
	// console.log(inpuData)

	/** Return an array of elements to stack in the container
	 * each element corresponds an hour
	 * @returns {JSX.Element}
	 */
	const elements = []
	for (let i = 0; i < 12; i++) {
		elements.push(<HourContainer key={i} />)
	}

	return elements
}

const renderEvents = () => {
	return inpuData.map((event) => {
		return (
			<EventContainer
				key={event.id}
				eventId={event.id}
				startTime={event.start}
			/>
		)
	})
}

function App() {
	return (
		<div className="container">
			{rednerHours()} {renderEvents()}
		</div>
	)
}

export default App
