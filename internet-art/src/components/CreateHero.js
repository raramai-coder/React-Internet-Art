import { useState } from "react";
import Button from "./Button";

const CreateHero = () => {
	const [prompt, setPrompt] = useState("");

	return (
		<div className="component-container">
			<p className="create-p">Enter a prompt to generate an artwork</p>
			<h1 className="create-h1">Create</h1>
			<div className="create-ai-container">
				<div className="create-image-container">
					<img
						src={require("../assets/Ellipse 3.png")}
						className="create-image"
						alt="AI Generated artwork"
					></img>
				</div>

				<div>
					<form>
						<input
							type="text"
							placeholder="E.g Queer african art"
							value={prompt}
							onChange={(e) => setPrompt(e.target.value)}
							className="text-input"
						/>
					</form>

					<Button label={"Generate"}></Button>
				</div>
			</div>
		</div>
	);
};

export default CreateHero;
