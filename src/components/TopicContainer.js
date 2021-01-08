import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import dummyData from '../dummy-data';
import './TopicContainer.css';


const TopicContainer = () => {

	return (
		<div className="Topic-Container">
			{dummyData.map((topic) => (
				<Link to={`/topics/${topic.id}`} key={topic.id}>
					<h1>{topic.title}</h1>
				</Link>
			))}
		</div>
	)
};

export default TopicContainer;