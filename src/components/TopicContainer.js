import { Link } from 'react-router-dom';
import dummyData from '../dummy-data'


const TopicContainer = () => {

	return (
		<div>
			{dummyData.map((topic) => (
				<Link to={`/topics/${topic.id}`}>
					<h1>{topic.title}</h1>
				</Link>
			))}
		</div>
	)
};

export default TopicContainer;