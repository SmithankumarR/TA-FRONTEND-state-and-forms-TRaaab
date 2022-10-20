import React from "react";

class validateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  handleInputChange = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          name.length >= 3 ? "" : "username must be at least 3 characters";
        break;
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "password can not be less than 5 Characters" : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value.length >= 2 ? "" : "password2 is required";
        break;
      default:
        break;
    }

    this.setState({
      errors,
      [name]: value,
    });
  };

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  handleSubmit = () => {
    alert("Thank  you for your interest");
  };
  render() {
    let { name, email, password, confirmPassword } = this.state.errors;
    return (
      <form onSubmit={this.handleSubmit} className="validate">
        <h2>Register With Us</h2>
        <label htmlFor="name">UserName</label>
        <input
          onChange={this.handleInputChange}
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          placeholder="Enter username"
          className={name && "error"}
        />
        <span>{name}</span>
        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleInputChange}
          type="email"
          name="email"
          id="email"
          value={this.state.email}
          placeholder="Enter email address"
          className={email && "error"}
        />
        <span>{email}</span>
        <label htmlFor="password">Password</label>
        <input
          onChange={this.handleInputChange}
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          placeholder="Enter Password"
          className={password && "error"}
        />
        <span>{password}</span>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          onChange={this.handleInputChange}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={this.state.confirmPassword}
          placeholder="Enter Password again"
          className={confirmPassword && "error"}
        />
        <span>{confirmPassword}</span>

        <input type="submit" value="submit" className="btn" />
      </form>
    );
  }
}
export default validateForm;
