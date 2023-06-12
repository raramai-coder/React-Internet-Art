//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Design from "./pages/Design";
import Create from "./pages/Create";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="artists" element={<Artists />} />
				<Route path="blog" element={<Blog />} />
				<Route path="about" element={<About />} />
				<Route path="shop" element={<Shop />} />
				<Route path="design" element={<Design />} />
				<Route path="create" element={<Create />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</Router>
	);
}

export default App;
