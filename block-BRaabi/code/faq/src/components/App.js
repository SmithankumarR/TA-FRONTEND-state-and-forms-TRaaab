import React from "react";
import faqs from "../data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }
  render() {
    return (
      <main className="container">
        <h1 className="heading">AltCampus FAQ</h1>
        <ul>
          {faqs.map((faq, index) => (
            <li className="btn btn-sec">
              <h2
                onClick={() => {
                  this.setState({
                    activeIndex:
                      this.state.activeIndex === index ? null : index,
                  });
                }}
                className="question "
              >
                {faq.Q} {this.state.activeIndex === index ? "🔻" : "🔺"}
              </h2>
              {index === this.state.activeIndex && (
                <p className="answer">{faq.A}</p>
              )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
export default App;
