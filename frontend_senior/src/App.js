/*  mock data  */
import inpuData from './data/input.json'

/*  components  */
import EventContainer from './components/EventContainer'

console.log(inpuData)

function App() {
	return (
		<div className="container">
			<EventContainer />
		</div>
	)
}

export default App
