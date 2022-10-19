import React from "react";

class Font extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      fontSize: 50,
    };
  }
  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };
  handleSliderChange = (event) => {
    this.setState({
      fontSize: event.target.value,
    });
  };
  render() {
    var fontFamily = [
      "Dancing Script",
      "Fuzzy Bubbles",
      "Lato",
      "Lobster",
      "Roboto",
      "Raleway",
      "Open Sans",
      "Oswald",
      "Montserrat",
      "Nunito",
    ];

    return (
      <>
        <div className="container">
          <div className="header">
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Type Something"
            />
            <input
              type="range"
              min="10"
              max="30"
              onChange={this.handleSliderChange}
              value="20"
            />
          </div>
          <div className="font-output">
            {fontFamily.map((font, i) => (
              <div key={i} className="box">
                <h2 className="font-name">{font.toUpperCase()}</h2>
                <p
                  style={{
                    fontSize: this.state.fontSize + "px",
                  }}
                >
                  {this.state.inputText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default Font;
