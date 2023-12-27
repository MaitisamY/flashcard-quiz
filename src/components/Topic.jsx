/* eslint-disable react/prop-types */
export default function Topic({ topics, onTopicClick }) {
    return (
        <div id="topics">
            {topics.map((topic) => (
            <a key={topic.id} className="topic" onClick={() => onTopicClick(topic.heading)}>
                <h3>{topic.heading}</h3>
                <p>{topic.description}</p>
            </a>
            ))}
        </div>
    );
}