import React, { Component } from "react";
import "./Question.css";

class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let mcq = this.props.mcq;
    let buttonOne = null,
      buttonTwo = null,
      buttonThree = null,
      buttonFour = null;
    //   button one code
    if (this.props.userAns === mcq.option1) {
      if (this.props.userAns === mcq.correct) {
        buttonOne = (
          <button
            className="options Question-options-option1 correctAns"
            value={mcq.option1}
            dangerouslySetInnerHTML={{ __html: mcq.option1 }}
          ></button>
        );
      } else {
        buttonOne = (
          <button
            className="options Question-options-option1 wrongAns"
            value={mcq.option1}
            dangerouslySetInnerHTML={{ __html: mcq.option1 }}
          ></button>
        );
      }
    } else {
      if (this.props.userAns === "Default") {
        buttonOne = (
          <button
            className="options Question-options-option1"
            value={mcq.option1}
            onClick={this.props.handleAnswerClick}
            dangerouslySetInnerHTML={{ __html: mcq.option1 }}
          ></button>
        );
      } else {
        if (mcq.option1 === mcq.correct) {
          buttonOne = (
            <button
              className="options Question-options-option1 correctAns"
              value={mcq.option1}
              dangerouslySetInnerHTML={{ __html: mcq.option1 }}
            ></button>
          );
        } else {
          buttonOne = (
            <button
              className="options Question-options-option1"
              value={mcq.option1}
              dangerouslySetInnerHTML={{ __html: mcq.option1 }}
            ></button>
          );
        }
      }
    }
    // button two code
    if (this.props.userAns === mcq.option2) {
      if (this.props.userAns === mcq.correct) {
        buttonTwo = (
          <button
            className="options Question-options-option2 correctAns"
            value={mcq.option2}
            dangerouslySetInnerHTML={{ __html: mcq.option2 }}
          ></button>
        );
      } else {
        buttonTwo = (
          <button
            className="options Question-options-option2 wrongAns"
            value={mcq.option2}
            dangerouslySetInnerHTML={{ __html: mcq.option2 }}
          ></button>
        );
      }
    } else {
      if (this.props.userAns === "Default") {
        buttonTwo = (
          <button
            className="options Question-options-option2"
            value={mcq.option2}
            onClick={this.props.handleAnswerClick}
            dangerouslySetInnerHTML={{ __html: mcq.option2 }}
          ></button>
        );
      } else {
        if (mcq.option2 === mcq.correct) {
          buttonTwo = (
            <button
              className="options Question-options-option2 correctAns"
              value={mcq.option2}
              dangerouslySetInnerHTML={{ __html: mcq.option2 }}
            ></button>
          );
        } else {
          buttonTwo = (
            <button
              className="options Question-options-option2"
              value={mcq.option2}
              dangerouslySetInnerHTML={{ __html: mcq.option2 }}
            ></button>
          );
        }
      }
    }
    // button three code
    if (this.props.userAns === mcq.option3) {
      if (this.props.userAns === mcq.correct) {
        buttonThree = (
          <button
            className="options Question-options-option3 correctAns"
            value={mcq.option3}
            dangerouslySetInnerHTML={{ __html: mcq.option3 }}
          ></button>
        );
      } else {
        buttonThree = (
          <button
            className="options Question-options-option3 wrongAns"
            value={mcq.option3}
            dangerouslySetInnerHTML={{ __html: mcq.option3 }}
          ></button>
        );
      }
    } else {
      if (this.props.userAns === "Default") {
        buttonThree = (
          <button
            className="options Question-options-option3"
            value={mcq.option3}
            onClick={this.props.handleAnswerClick}
            dangerouslySetInnerHTML={{ __html: mcq.option3 }}
          ></button>
        );
      } else {
        if (mcq.option3 === mcq.correct) {
          buttonThree = (
            <button
              className="options Question-options-option3 correctAns"
              value={mcq.option3}
              dangerouslySetInnerHTML={{ __html: mcq.option3 }}
            ></button>
          );
        } else {
          buttonThree = (
            <button
              className="options Question-options-option3"
              value={mcq.option3}
              dangerouslySetInnerHTML={{ __html: mcq.option3 }}
            ></button>
          );
        }
      }
    }
    // button four code
    if (this.props.userAns === mcq.option4) {
      if (this.props.userAns === mcq.correct) {
        buttonFour = (
          <button
            className="options Question-options-option4 correctAns"
            value={mcq.option4}
            dangerouslySetInnerHTML={{ __html: mcq.option4 }}
          ></button>
        );
      } else {
        buttonFour = (
          <button
            className="options Question-options-option4 wrongAns"
            value={mcq.option4}
            dangerouslySetInnerHTML={{ __html: mcq.option4 }}
          ></button>
        );
      }
    } else {
      if (this.props.userAns === "Default") {
        buttonFour = (
          <button
            className="options Question-options-option4"
            value={mcq.option4}
            onClick={this.props.handleAnswerClick}
            dangerouslySetInnerHTML={{ __html: mcq.option4 }}
          ></button>
        );
      } else {
        if (mcq.option4 === mcq.correct) {
          buttonFour = (
            <button
              className="options Question-options-option4 correctAns"
              value={mcq.option4}
              dangerouslySetInnerHTML={{ __html: mcq.option4 }}
            ></button>
          );
        } else {
          buttonFour = (
            <button
              className="options Question-options-option4"
              value={mcq.option4}
              dangerouslySetInnerHTML={{ __html: mcq.option4 }}
            ></button>
          );
        }
      }
    }
    const bookmarkIcon = this.props.bookmark ? (
      <i className="fas fa-bookmark"></i>
    ) : (
      <i className="far fa-bookmark"></i>
    );
    return (
      <div className="Question">
        <div className="Question-details">
          <div>
            {mcq.subject} - {mcq.chapter}
          </div>
          <div>Score: {this.props.userScore}</div>
        </div>
        <div className="Question-statement">
          <span className="Question-number">
            <span>Question {this.props.index + 1}:</span>
            <span>
              <button
                className="quickAccessButton"
                onClick={this.props.handleBookmarkClick}
              >
                {bookmarkIcon}
                <span className="tooltip-text">Save this question!</span>
              </button>
              <button
                className="quickAccessButton"
                onClick={this.props.handleShareClick}
              >
                <i className="fas fa-share-alt"></i>
                <span className="tooltip-text">Share</span>
              </button>
              <button
                className="quickAccessButton"
                onClick={this.props.handleReportClick}
              >
                <i className="fas fa-exclamation-triangle"></i>
                <span className="tooltip-text">Report</span>
              </button>
            </span>
          </span>
          <div dangerouslySetInnerHTML={{ __html: mcq.statement }}></div>
        </div>
        <div className="Question-options">
          <div className="Question-options-one">
            <React.Fragment>
              {buttonOne}
              {buttonTwo}
            </React.Fragment>
          </div>
          <div className="Question-options-two">
            <React.Fragment>
              {buttonThree}
              {buttonFour}
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
