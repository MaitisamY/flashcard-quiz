import PropTypes from 'prop-types'

function Info({ handleInfoClick, handleOutsideClick }) {
    return (
        <div id="info" onClick={handleOutsideClick}>
            <div id="content-with-border">
                <a onClick={handleInfoClick}>X</a>
                <h1>Info</h1>
                <ol>
                    <li>Every quiz is of 10:00 minutes.</li>
                    <li>Refreshing the page will end the quiz.</li>
                    <li>You can re-take the same quiz multiple times.</li>
                    <li>Your latest score will be displayed.</li>
                    <li>Your correct answers will be counted upon time up.</li>
                </ol>
            </div>
        </div>
    )
}

Info.propTypes = {
    handleInfoClick: PropTypes.func,
    handleOutsideClick: PropTypes.func
}

export default Info