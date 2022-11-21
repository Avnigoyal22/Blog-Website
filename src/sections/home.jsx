import Hero from "./hero";
import Latest from "./latest";
import Articles from "./articles";
import Stories from "./stories";

function Home() {
	return (
		<main id="Main">
			<Hero />
			<Latest />
			<Articles />
			<Stories />
		</main>
	);
}

export default Home;
