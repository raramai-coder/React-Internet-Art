import { useState, useEffect } from "react";

const AddTask = () => {
	const [text, setText] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setREminder] = useState(false);

	useEffect(() => {
		const getPosts = async () => {
			const postsFromserver = await fetchPosts();
			console.log(postsFromserver);
		};
		getPosts();
	}, []);

	const fetchPosts = async () => {
		const result = await fetch("http://localhost:5000/posts");
		const data = await result.json();
		//console.log(data);
		return data;
	};

	const onAdd = (text, day, reminder) => {
		console.log(text, day, reminder);
	};

	const onSubmited = (e) => {
		// e.preventDefault();

		if (!text) {
			alert("Please add a task");
			return;
		}

		//console.log(text, day, reminder);
		onAdd(text, day, reminder);

		setDay("");
		setText("");
		setREminder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmited}>
			<div className="form-control">
				<label htmlFor="">Task</label>
				<input
					type="text"
					placeholder="Add Task"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label htmlFor="">Day & Time</label>
				<input
					type="text"
					placeholder="Add Day and Time"
					value={day}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label htmlFor="">Reminder</label>
				<input
					type="checkbox"
					value={reminder}
					checked={reminder}
					onChange={(e) => setREminder(e.currentTarget.checked)}
				/>
			</div>

			<input type="submit" value="Save Task" />
		</form>
	);
};

export default AddTask;
