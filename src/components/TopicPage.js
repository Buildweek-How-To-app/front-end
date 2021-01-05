import React from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';


const TopicPage = (props) => {
	const params = useParams();
	const topicItem = props.items.find(item => item.id === Number(params.id));

	return (
		<div>
			<Route exact path={`/topics/${topicItem.id}/edit`} /* render={edit component here passing in topicItem} */ />
			
			<Link to="/">
				<Button color='primary'>Home</Button>
			</Link>

			<h1>{topicItem.title}</h1>

			<p>{topicItem.content}</p>

			<Link to={`/topics/${topicItem.id}/edit`}>
				<Button color='warning'>Edit</Button>
			</Link>

			<Link to="/">
				<Button color='danger'>Delete</Button>
			</Link>
		</div>
	);
};

export default TopicPage;