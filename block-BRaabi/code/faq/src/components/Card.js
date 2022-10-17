import React from "react";
import data from "../data";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  viewAnswer = () => {
    return (
      <>
        <textarea>{data.map((ans) => ({ ans }))}</textarea>
      </>
    );
  };
  render() {
    return (
      <>
        <button className="btn btn-sec">
          <ul className="flex">
            <li>
              {data.map((question) => (
                <h2> {question} </h2>
              ))}
            </li>
            <li onClick={this.viewAnswer}>🔽</li>
          </ul>
        </button>
      </>
    );
  }
}

export default Card;
