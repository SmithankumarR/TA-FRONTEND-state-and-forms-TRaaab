import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 5,
      max:15
    };
  }
  handleIncrement = () => {
    let {step,max ,count} = this.state;
    this.setState({
      count: count + step > max ? count : count + step,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };
  handleReset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
        <div className="container">
          <h1>{this.state.count}</h1>
          <h3>steps</h3>
          <div className="steps flex btn">
            {[5, 10, 15].map((step) => (
              <button onClick={() => {
                this.setState({step: step});
              }} className={this.state.step === step ? 'active' : 'btn-pri'}>{step}</button>
            ))}
          </div>
          <div className="steps max flex btn">
          <h3>Max</h3>
            {[15, 100, 200].map((max) => (
              <button onClick={() => {
                this.setState({step: max});
              }} className={this.state.step === max ? 'active' : 'btn-pri'}>{max}</button>
            ))}
          </div>
          <div className="actions flex">
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement </button>
            <button onClick={this.handleReset}>Reset</button>
          </div>
        </div>
    );
  }
}

export default App;
