import React, { Component } from "react";
import "../css/form.css";

const DEFAULT_FORM_STATE = {
  email: "",
  password: ""
};

export default class SignInForm extends Component {
  state = { ...DEFAULT_FORM_STATE };

  handlerInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  handlerSubmitForm = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset() {
    this.setState({
      ...DEFAULT_FORM_STATE
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className="form" onSubmit={this.handlerSubmitForm}>
        <input className="form__input"
          name="email"
          value={email}
          onChange={this.handlerInputChange}
          type="email"
          placeholder="Email"
        />
        <input className="form__input"
          name="password"
          value={password}
          onChange={this.handlerInputChange}
          type="password"
          placeholder="Password"
        />
        <button className="form__btn" type="submit">Sign In</button>
      </form>
    );
  }
}
