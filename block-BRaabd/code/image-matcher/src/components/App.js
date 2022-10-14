import '../stylesheets/App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'baseketball',
    };
  }
  render() {
    let labels = [
      'basketball',
      'pubg',
      'tiger',
      'cricket',
      'laptop',
      'phone',
      'cricket',
    ];

    return (
      <>
        <div>
          {labels.map((label) => (
            <button
              key={label}
              className={this.state.active === label ? 'active' : 'btn'}
              onClick={() => {
                this.setState({
                  active: label,
                });
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <img
          className="flexibleImg"
          alt={this.state.active}
          src={`./images/${this.state.active}.jpg`}
        />
      </>
    );
  }
}
export default App;
