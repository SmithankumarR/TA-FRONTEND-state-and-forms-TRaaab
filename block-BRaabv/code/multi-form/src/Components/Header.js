import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      errors: "",
    };
  }
  handleClick = () => {
    this.setState((PrevState) => {
      return {
        active: !PrevState.active,
      };
    });
  };
  render() {
    return (
      <>
        <section className="container  flex header">
          <article className="flex-30">
            <img
              className="flexibleImg"
              src="./images/pic1.png"
              alt="coverImg"
            />
          </article>
          <article className="flex header-content flex-60">
            <div className="flex">
              <div className="box" onClick={this.handleClick}>
                1
              </div>
              <button className="btn"> Sign Up</button>
            </div>
            <div className="flex">
              <div className="box" onClick={this.handleClick}>
                2
              </div>
              <button className="btn"> Message </button>
            </div>
            <div className="flex">
              <div className="box" onClick={this.handleClick}>
                3
              </div>
              <button className="btn"> Checkbox</button>
            </div>
            <hr />
          </article>
        </section>
      </>
    );
  }
}

export default Header;
