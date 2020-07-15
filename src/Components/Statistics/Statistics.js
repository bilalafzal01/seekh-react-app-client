import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import "./Statistics.css";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remarks: [
        "Need more practice",
        "There's room for practice",
        "Keep going!",
        "You're doing great!",
      ],
    };
  }
  render() {
    return (
      <div className="Statistics">
        <div className="Statistics-details">
          <span>
            {this.props.subject} - {this.props.chapter}
          </span>
          <span>{this.props.user.givenName}'s Statistics</span>
        </div>
        <div className="Statistics-body">
          <div>Total Questions: 40</div>
          <div>Attempted: 20</div>
        </div>
        <div className="Statistics-guage-chart">
          <div className="guage-chart">
            <ReactSpeedometer
              maxValue={100}
              value={
                (this.props.correctQuestions / this.props.attemptedQuestions) *
                100
              }
              needleColor="#303960"
              startColor="#d9455f"
              segments={4}
              endColor="#81eb73"
              width={300}
              height={200}
            />
            <div>
              {
                this.state.remarks[
                  Math.floor(
                    ((this.props.correctQuestions /
                      this.props.attemptedQuestions) *
                      100) /
                      25
                  )
                ]
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
