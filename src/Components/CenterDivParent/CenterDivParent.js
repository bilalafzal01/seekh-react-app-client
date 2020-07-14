import React, { Component } from "react";
import "./CenterDivParent.css";
import CenterSplashScreen from "../CenterSplashScreen/CenterSplashScreen";
import axios from "axios";

class CenterDivParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      chapters: [],
    };
  }
  async componentDidMount() {
    try {
      let chapters = await axios.get(
        `http://localhost:5000/chapters/all?subject=${this.props.activePath}`
      );
      chapters = chapters.data.sort(function (a, b) {
        var keyA = a.number,
          keyB = b.number;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });

      if (this.props.activePath === "default") {
        this.setState({
          loaded: false,
        });
      } else {
        this.setState({
          loaded: true,
          chapters: chapters,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.activePath !== this.props.activePath) {
      try {
        let chapters = await axios.get(
          `http://localhost:5000/chapters/all?subject=${this.props.activePath}`
        );
        if (this.props.activePath === "default") {
          this.setState({
            loaded: false,
          });
        } else {
          this.setState({
            loaded: true,
            chapters: chapters.data,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
  render() {
    const chaptersDiv = this.state.loaded ? (
      <React.Fragment>
        <div className="subject-name">{this.props.activePath} - Chapters</div>
        <div className="CenterDivParent-Subject">
          {this.state.chapters.map((item, i) => (
            <button
              key={item._id}
              onClick={this.props.handleChapterClick}
              className="chapter-buttons"
              value={item.chapter}
            >
              {item.chapter}
            </button>
          ))}
        </div>
      </React.Fragment>
    ) : (
      <CenterSplashScreen />
    );
    return <div className="CenterDivParent">{chaptersDiv}</div>;
  }
}

export default CenterDivParent;
