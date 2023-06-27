import React from "react";
import "../../styles/index.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="four">{props.digitFour %10}</div>
      <div className="three">{props.digitThree %10}</div>
      <div className="two">{props.digitTwo %10}</div>
      <div className="one">{props.digitOne %10}</div>
    </div>
  );
}

export default SimpleCounter;