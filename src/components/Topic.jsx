/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export default function Topic({ topics, onTopicClick, resultData }) {
    return (
        <div id="topics">
            {topics.map((topic) => {
                const quizResults = resultData.filter((result) => result.topic === topic.heading);
                const activeClass = quizResults.length > 0 ? 'active' : '';
                
                return (
                    <a 
                        key={topic.id} 
                        className={`topic ${activeClass}`} 
                        onClick={activeClass ? null : () => onTopicClick(topic.heading)}
                    >
                        <h3>{topic.heading}</h3>
                        <p>{topic.description}</p>
                        {quizResults.map((result, index) => (
                            <div key={index} id="tag-container">
                                <a onClick={() => onTopicClick(topic.heading)}>Re-take</a>
                                <p key={index} id="tag">{`${result.score}%`}</p>
                            </div>
                        ))}
                    </a>
                );
            })}
        </div>
    );
}
