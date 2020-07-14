import React, { Component } from "react";
import "./CenterDiv.css";
import axios from "axios";
import Question from "../Question/Question";
import Statistics from "../Statistics/Statistics";

class CenterDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      mcqs: {
        statement: `Please choose a subject`,
      },
      userAns: [
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
      ],
      index: 0,
      userScore: 0,
      bookmarks: [1],
      uselessVal: 420,
    };
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleSkipClick = this.handleSkipClick.bind(this);
    this.handleBookmarkClick = this.handleBookmarkClick.bind(this);
    this.handleShareClick = this.handleShareClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
  }
  async componentDidMount() {
    console.log(`in here 3`);
    try {
      let mcq = await axios.get(
        `http://localhost:5000/mcqs/one?subject=${this.props.activePath}&chapter=${this.props.chapterSelected}`
      );
      // store user bookmarks in the state too
      let bookmarks = await axios.get(
        `http://localhost:5000/users/bookmarks?userID=${this.props.user.googleId}`
      );
      if (this.props.activePath === "default") {
        this.setState({
          loaded: false,
        });
      } else {
        this.setState({
          loaded: true,
          userScore: 0,
          index: 0,
          mcqs: mcq.data,
          userAns: [
            "Default",
            "Default",
            "Default",
            "Default",
            "Default",
            "Default",
            "Default",
          ],
          bookmarks: bookmarks.data.bookmarks,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.activePath !== this.props.activePath) {
      console.log(`in here - 1`);
      let productionUrl = `http://ec2-54-254-236-164.ap-southeast-1.compute.amazonaws.com:5000/mcqs/one?subject=${this.props.activePath}`;
      let localUrl = `http://localhost:5000/mcqs/one?subject?=${this.props.activePath}`;
      try {
        let mcq = await axios.get(
          `http://localhost:5000/mcqs/one?subject=${this.props.activePath}&chapter=${this.props.chapterSelected}`
        );
        // store user bookmarks in the state too
        let bookmarks = await axios.get(
          `http://localhost:5000/users/bookmarks?userID=${this.props.user.googleId}`
        );
        if (this.props.activePath === "default") {
          this.setState({
            loaded: false,
          });
        } else {
          this.setState({
            loaded: true,
            userScore: 0,
            index: 0,
            mcqs: mcq.data,
            userAns: ["Default", "Default", "Default", "Default", "Default"],
            bookmarks: bookmarks.data.bookmarks,
          });
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      // code here to update state for bookmarks
      let tempBookmarks = await axios.get(
        `http://localhost:5000/users/bookmarks?userID=${this.props.user.googleId}`
      );
      this.setState({
        bookmarks: tempBookmarks.data.bookmarks,
      });
    }
  }
  handleUserAnswers = (i, val) => {
    this.setState((state) => {
      const userAns = state.userAns.map((item, j) => {
        if (j === i) {
          return val;
        } else {
          return item;
        }
      });
      return {
        userAns: userAns,
      };
    });
  };
  handleAnswerClick(e) {
    e.preventDefault();
    this.handleUserAnswers(this.state.index, e.target.value);
    if (this.state.userAns[this.state.index] === "Default") {
      if (e.target.value === this.state.mcqs[this.state.index].correct) {
        this.setState((state) => ({
          userScore: state.userScore + 1,
        }));
      } else {
      }
    }
  }
  handleNextClick(e) {
    e.preventDefault();
    if (this.state.index + 1 < this.state.mcqs.length) {
      this.setState((prevState) => ({
        index: prevState.index + 1,
      }));
    } else if (this.state.index + 1 === this.state.mcqs.length - 1) {
      // do sth here when the finish button is clicked
    }
  }
  handlePrevClick(e) {
    e.preventDefault();
    if (this.state.index - 1 >= 0) {
      this.setState((prevState) => ({
        index: prevState.index - 1,
      }));
    }
  }
  handleSkipClick(e) {
    e.preventDefault();
    if (this.state.index + 1 < this.state.mcqs.length) {
      this.setState((prevState) => ({
        index: prevState.index + 1,
      }));
    }
  }
  async handleBookmarkClick(e) {
    e.preventDefault();
    await axios.post(
      `http://localhost:5000/users/bookmarkQuestion?userID=${
        this.props.user.googleId
      }&mcqID=${this.state.mcqs[this.state.index]._id}`
    );
    this.setState({
      uselessVal: 410,
    });
  }
  handleShareClick(e) {}
  handleReportClick(e) {}
  render() {
    const loaded = this.state.loaded;
    const checkIfBookmarked = () => {
      if (
        this.state.bookmarks.indexOf(this.state.mcqs[this.state.index]._id) !==
        -1
      ) {
        return true;
      } else {
        return false;
      }
    };
    const prevNextButtons = (
      <div className="CenterDiv-PrevNextButtons">
        <button className="prevButton" onClick={this.handlePrevClick}>
          {/* <i className="fas fa-long-arrow-alt-left"></i> */}
          Prev
        </button>
        <button className="skipButton" onClick={this.handleSkipClick}>
          Skip
        </button>
        <button className="nextButton" onClick={this.handleNextClick}>
          {this.state.index === this.state.mcqs.length - 1 ? `Finish` : `Next`}
          {/* <i className="fas fa-long-arrow-alt-right"></i> */}
        </button>
      </div>
    );
    const remarks =
      this.state.userAns[this.state.index] === "Default" ? (
        <div className="CenterDiv-remarks remarks-hide"></div>
      ) : this.state.userAns[this.state.index] ===
        this.state.mcqs[this.state.index].correct ? (
        <div className="CenterDiv-remarks">Correct!</div>
      ) : (
        <div className="CenterDiv-remarks">Incorrect!</div>
      );
    return (
      <div className="CenterDiv">
        {loaded && (
          <React.Fragment>
            <Question
              mcq={this.state.mcqs[this.state.index]}
              handleAnswerClick={this.handleAnswerClick}
              userAns={this.state.userAns[this.state.index]}
              userScore={this.state.userScore}
              index={this.state.index}
              bookmark={checkIfBookmarked()}
              handleBookmarkClick={this.handleBookmarkClick}
              handleShareClick={this.handleShareClick}
              handleReportClick={this.handleReportClick}
            />
            {remarks}
            {prevNextButtons}
            <Statistics
              subject={this.props.activePath}
              chapter={this.props.chapterSelected}
              user={this.props.user}
              totalQuestions={20}
              attemptedQuestions={10}
              correctQuestions={8}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default CenterDiv;
