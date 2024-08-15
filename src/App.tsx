import Header from "./_components/Header"
import Bio from "./_components/Bio"
import Experiences from "./_components/Experiences"

function App() {
	return (
		<>
			<div className="w-[90%] lg:w-3/5 m-auto p-2">
				<Header />
				<Bio />
				<Experiences />
			</div>
		</>
	)
}

export default App
