import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
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
        <CommentForm
          text={text}
          rate={rate}
          onSubmit={this.handleSubmit}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
