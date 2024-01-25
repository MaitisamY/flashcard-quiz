/* eslint-disable react/prop-types */
export default function Topic({ topics, onTopicClick, resultData }) {
    return (
        <div id="topics">
            {topics.map((topic) => (
            <a key={topic.id} className="topic" onClick={() => onTopicClick(topic.heading)}>
                <h3>{topic.heading}</h3>
                <p>{topic.description}</p>
                {
                    resultData.length > 0 ?
                    resultData.map((result, index) => (
                        result.topic === topic.heading && (
                            <p key={index} id="tag">{`${result.score} %`}</p>
                        )
                    )) : null 
                }
            </a>
            ))}
        </div>
    );
}