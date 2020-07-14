import React, { Component } from "react";
import MCQ from "../MCQ/mcq";
import "./mcqDiv.css";
import axios from "axios";

class MCQDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      mcqs: [],
    };
  }
  async componentDidMount() {
    try {
      let data = await axios.get(`http://localhost:5000/mcqs`);
      this.setState({
        mcqs: data.data,
        loaded: true,
      });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return this.state.loaded ? (
      this.state.mcqs.map((item, i) => <MCQ mcq={item} key={item._id} />)
    ) : (
      <div>hello</div>
    );
  }
}

export default MCQDiv;
