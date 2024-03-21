/* eslint-disable react-hooks/rules-of-hooks */
/*
    path/root/src/components/Topic.jsx
    Imports:
    ||
    \/
*/

import { useState } from 'react'
import PropTypes from 'prop-types'
import { useAppFunctions } from '../AppFunctions'

// Topic function
function Topic({ topics, onTopicClick, resultData }) {

    const { userName } = useAppFunctions()

    return (
        <div id="topics">
            {topics.map((topic) => {
                const quizResults = resultData.filter((result) => result.topic === topic.heading && result.username === userName);
                const passed = quizResults.some((result) => result.score >= 50);
                const activeClass = quizResults.length > 0 ? 'active' : '';

                // Define tooltip visibility state for each topic
                const [isTooltipVisible, setIsTooltipVisible] = useState(false);
                
                // Event handler for mouse enter
                const handleMouseEnter = () => {
                    setIsTooltipVisible(true);
                };

                // Event handler for mouse leave
                const handleMouseLeave = () => {
                    setIsTooltipVisible(false);
                };

                return (
                    <a
                        key={topic.id}
                        className={`topic ${activeClass} ${passed ? 'passed' : 'failed'}`}
                        onClick={activeClass ? () => {} : () => onTopicClick(topic.heading)}
                        onMouseEnter={activeClass ? handleMouseEnter : () => {}}
                        onMouseLeave={activeClass ? handleMouseLeave : () => {}}
                    >
                        <h3>{topic.heading}</h3>
                        <p>{topic.description}</p>
                        {quizResults.map((result, index) => (
                            <div key={index} id="tag-container">
                                <a onClick={() => onTopicClick(topic.heading)}>Re-take</a>
                                <p key={index} id="tag">{`${result.score}%`}</p>
                            </div>
                        ))}

                        {/* Render tooltip only if active and tooltip is visible */}
                        {
                            activeClass && isTooltipVisible && (
                                <div className="tooltip">
                                    {
                                        quizResults.length > 0 ? (
                                        passed
                                            ? `${topic.heading} quiz passed with ${quizResults[0].score}%`
                                            : `${topic.heading} quiz failed with ${quizResults[0].score}%`
                                        ) : null
                                    }
                                </div>
                            )
                        }
                    </a>
                );
            })}
        </div>
    );
}

Topic.propTypes = {
    topics: PropTypes.array,
    onTopicClick: PropTypes.func,
    resultData: PropTypes.array
}

export default Topic
