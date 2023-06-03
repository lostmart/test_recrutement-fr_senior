/*  mock data  */
import inpuData from './data/input.json'

/*  components  */
import EventContainer from './components/EventContainer'
import HourContainer from './components/HourContainer'

const rednerHours = () => {
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
	// console.log(inpuData[0].duration)
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
	return (
		<div className="container">
			{rednerHours()} {renderEvents()}
		</div>
	)
}

export default App
