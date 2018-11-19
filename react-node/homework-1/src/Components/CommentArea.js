import React, { Component } from "react";
import Comment from "./Comment";
import "../css/comment-area.css";

const DEFAULT_STATE_PROPS = {
  text: "",
  rate: ""
};

export default class CommentArea extends Component {
  state = {
    comments: [],
    ...DEFAULT_STATE_PROPS
  };

  id = 0;

  addComment = comment => {
    this.setState(prevState => ({
      comments: [comment, ...prevState.comments]
    }));
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text, rate } = this.state;
    const id = this.id;
    this.addComment({ id, text, rate });
    this.id += 1;
    this.reset();
  };

  reset = () => {
    this.setState({
      ...DEFAULT_STATE_PROPS
    });
  };

  render() {
    const { rate, text, comments } = this.state;

    return (
      <div className="comment-area">
        <ul>
          {comments.map(item => (
            <li key={item.id}>
              <Comment rate={item.rate} text={item.text} />
            </li>
          ))}
        </ul>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea
            className="comment-form__textarea"
            name="text"
            value={text}
            onChange={this.handleInputChange}
          />
          <select className="comment-form__select" name="rate" value={rate} onChange={this.handleInputChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button type="submit" className="comment-form__btn">Add Comment</button>
        </form>
      </div>
    );
  }
}
