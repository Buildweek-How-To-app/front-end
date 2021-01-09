import React from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { Button } from 'reactstrap';
import EditTopic from './EditTopic';
import './TopicPage.css'


const TopicPage = (props) => {
	const params = useParams();
	const topicItem = props.items.find(item => item.id === Number(params.id));
	const routeMatch = useRouteMatch();

	return (
		<div>
			
			<Link to="/">
				<Button color='primary' size="lg">Home</Button>
			</Link>

			<div className="Topic-Content">
				<h1>{topicItem.title}</h1>
				<p>{topicItem.content}</p>
			</div>

			<Link to={`${routeMatch.url}/edit`}>
				<Button color='warning' size="lg">Edit</Button>
			</Link>

			<Link to="/">
				<Button color='danger' size="lg">Delete</Button>
			</Link>

			<Route exact path={`${routeMatch.path}/edit`} render={() => <EditTopic item={topicItem} />} />

		</div>
	);
};

export default TopicPage;