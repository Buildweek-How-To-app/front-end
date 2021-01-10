import { Link } from 'react-router-dom';
import './TopicContainer.css';


const TopicContainer = (props) => {

	return (
		<div className="Topic-Container">
			{props.data.map((topic) => (
				<Link to={`/topics/${topic.id}`} key={topic.id}>
					<h1>{topic.title}</h1>
				</Link>
			))}
		</div>
	)
};

export default TopicContainer;