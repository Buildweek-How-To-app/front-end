import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios'
import './EditTopic.css'

const CreateTopic = (props) => {
	const [topicContent, setTopicContent] = useState({
		title: "",
		content: ""
	});
	const [postResponse, setPostResponse] = useState({});

	// Input onChange handler
	const change = (e) => {
		setTopicContent({...topicContent, [e.target.name]: e.target.value})
	};

	// Form on submit handler
	const formSubmit = (e) => {
		e.preventDefault();

		axios.post("https://reqres.in/api/users", topicContent)
			.then((res) => {
				setPostResponse("Submit Successful!");
			})
	};
	
	return (
		<>
			<Link to="/">
				<Button color='primary' size="lg">Home</Button>
			</Link>
			
			<form onSubmit={formSubmit}>
				<label htmlFor="title">
					Title:
					<input type="text" name="title" id="title" value={topicContent.title} onChange={change}/>
				</label>
				<label htmlFor="content">
					Content:
					<textarea type="text" name="content" id="content" value={topicContent.content} onChange={change}/>
				</label>

				<Button color="success" size="lg">Save</Button>
				<pre>{JSON.stringify(postResponse, null, 2)}</pre>

			</form>
		</>
	);
};

export default CreateTopic;