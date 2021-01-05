import React from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import EditTopic from './EditTopic'
import './TopicPage.css'


const TopicPage = (props) => {
	const params = useParams();
	const topicItem = props.items.find(item => item.id === Number(params.id));

	return (
		<div>
			<Route exact path={`/topics/${topicItem.id}/edit`} render={() => <EditTopic item={topicItem} />} />
			
			<Link to="/">
				<Button color='primary'>Home</Button>
			</Link>
			<div className="Topic-Content">
				<h1>{topicItem.title}</h1>

				<p>{topicItem.content}</p>
			</div>

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