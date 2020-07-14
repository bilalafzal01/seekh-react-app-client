import React, { Component } from "react";
import "./mcq.css";
class MCQ extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let mcq = this.props.mcq;
    return (
      <div className="mcq">
        <h5 className="mcq-subject">
          Subject: <span className="mcq-subject-span">{mcq.subject}</span>
        </h5>
        <h3 class="mcq-statement">
          Statement: <span>{mcq.statement}</span>
        </h3>
        <ul>
          <li>a) {mcq.option1}</li>
          <li>b) - {mcq.option2}</li>
          <li>c - {mcq.option3}</li>
          <li>d - {mcq.option4}</li>
        </ul>
      </div>
    );
  }
}

export default MCQ;
