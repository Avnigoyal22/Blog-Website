import "./App.css";
import Home from "./sections/home";
import Bollywood from "./sections/bollywood";
import Header from "./sections/header";
import Technology from "./sections/technology";

function App() {
	let component;
	switch (window.location.pathname) {
		case "/":
			component = <Home />;
			break;
		case "/bollywood":
			component = <Bollywood />;
			break;
		case "/technology":
			component = <Technology />;
			break;
		default:
			component = <Home />;
			break;
	}
	return (
		<>
			<div className="App">
				<Header />
				{component}
			</div>
		</>
	);
}

export default App;
