import React from "react";

class Validateform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      date: "",
      fileInput: "",
      textarea: "",
    };
  }
  handleInputChange = ({ target }) => {
    let { name, date, fileInput, textarea } = target;
    this.setState({
      [name]: date,
      fileInput,
      textarea,
    });
  };
  handleSubmit = () => {
    alert("Thank  you for your interest");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>User Details</h2>
        <label htmlFor="name">UserName</label>
        <input
          onChange={this.handleInputChange}
          type="text"
          name="username"
          id="name"
          value={this.state.name}
          placeholder="Enter your name"
          className={this.setState.username && "error"}
        />
        <label htmlFor="date">Date</label>
        <input
          onChange={this.handleInputChange}
          type="date"
          name="date"
          id="date"
          value={this.state.date}
        />
        <label htmlFor="file">FileInput</label>
        <input
          onChange={this.handleInputChange}
          type="file"
          name="fileInput"
          value={this.state.fileInput}
          placeholder="Enter your name"
        />
        <label htmlFor="readOnly">Read-Only Input</label>
        <input
          onChange={this.handleInputChange}
          type="text"
          readOnly
          name="readOnly"
          id="readOnly"
          placeholder="This can only be Copied"
        />
        <label htmlFor="disabled">Disabled Input</label>
        <input
          onChange={this.handleInputChange}
          type="text"
          disabled
          name="disabled"
          id="disabled"
        />
        <label htmlFor="bio">bio</label>
        <textarea
          onChange={this.handleInputChange}
          type="text"
          name="bio"
          id="bio"
          value={this.state.bio}
          placeholder="Enter bio"
          rows="5"
        />

        <input type="submit" value="submit" className="btn" />
      </form>
    );
  }
}
export default Validateform;
