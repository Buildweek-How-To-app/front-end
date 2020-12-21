import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import dummyData from '../dummy-data'


const TopicPage = () => {
	const [topic, setTopic] = useState();
	const params = useParams();
	let id = params.id;

	useEffect(() => {
		setTopic(dummyData.find(x => x.id === id)); console.log(topic)
	}, [id]);

	return (
		<div>
			<h1>{topic.title}</h1>
			<h1>{topic.content}</h1>
		</div>
	);
};

export default TopicPage;