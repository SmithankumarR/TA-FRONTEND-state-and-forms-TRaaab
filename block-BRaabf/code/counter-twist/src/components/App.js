import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 5,
      counter: 0,
      active: this.state.step,
    };
  }

  handleSteps = () => {
    if (this.state.step === 5) {
      return this.state.step;
    }
    if (this.state.step === 10) {
      return this.state.step + 5;
    }
    if (this.state.step === 15) {
      return this.state.step + 10;
    }

    return this.state.step === this.state.active ? 'active' : 'btn-pri';
  };
  handleIncrement = () => {
    return this.state.counter + this.state.step;
  };
  handleDecrement = () => {
    return this.state.counter - this.state.step;
  };
  handleReset = () => {
    return this.state.counter;
  };
  render() {
    return (
      <>
        <div className="Counter flex">
          <div className="steps">
            <button
              className="btn"
              onClick={() => {
                this.setState = {
                  step: this.handleSteps,
                };
              }}
            >
              {this.state.step}
            </button>
            <button
              className="btn"
              onClick={() => {
                this.setState = {
                  step: this.handleSteps,
                };
              }}
            >
              {this.state.step}
            </button>
            <button
              className="btn"
              onClick={() => {
                this.setState = {
                  step: this.handleSteps,
                };
              }}
            >
              {this.state.step}
            </button>
            <div className="actions flex">
              <button
                className="btn-action"
                onClick={() => {
                  this.setState = {
                    counter: this.handleIncrement,
                  };
                }}
              >
                Increment{' '}
              </button>
              <button
                className="btn-action"
                onClick={() => {
                  this.setState = {
                    counter: this.handleDecrement,
                  };
                }}
              >
                Increment{' '}
              </button>
              <button
                className="btn-action"
                onClick={() => {
                  this.setState = {
                    counter: this.handleReset,
                  };
                }}
              >
                Increment{' '}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
