import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Button from "./Button";

const CreateHero = () => {
	const [prompt, setPrompt] = useState("");
	const [result, setResult] = useState("");
	const [loading, setLoading] = useState(false);

	// const key1 = "sk-8KhrZy";
	// const key2 = "E8N2CA5";
	// const key3 = "wRkRM1a";
	// const key4 = "T3BlbkFJ";
	// const key5 = "EyWcZSb4sj";
	// const key6 = "4z5YB2khAg";

	// const finalKey = key1 + key2 + key3 + key4 + key5 + key6;

	const configuration = new Configuration({
		apiKey: process.env.REACT_APP_OPEN_API_KEY,
		//apiKey: finalKey,
	});

	const openai = new OpenAIApi(configuration);

	const generateImage = async () => {
		setLoading(true);

		try {
			const res = await openai.createImage({
				prompt: prompt,
				n: 1,
				size: "512x512",
			});

			console.log(res.data.data[0].url);
			setResult(res.data.data[0].url);
			setPrompt("");
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.error(
				`Error generating image: ${error.response.data.error.message}`
			);
		}
	};

	return (
		<div className="component-container">
			<p className="create-p">Enter a prompt to generate an artwork</p>
			<h1 className="create-h1">Create</h1>
			<div className="create-ai-container">
				<div className="create-image-container">
					{/* {result.length > 0 ? (
						// <img
						// 	src={result}
						// 	className="create-image"
						// 	alt="AI Generated artwork."
						// />
					) : (
						// <img
						// 	src={require("../assets/Ellipse-3.png")}
						// 	className="create-image"
						// 	alt="Placeholder for generated image."
						// ></img>
					)} */}
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

					<Button
						label={loading ? "Generating..." : "Generate"}
						disableButton={loading}
						onClickFunction={generateImage}
					></Button>
				</div>
			</div>
		</div>
	);
};

export default CreateHero;
