import React from "react";

const CommentForm = ({text, rate, onSubmit, onInputChange}) => (
  <form className="comment-form" onSubmit={onSubmit}>
    <textarea
      className="comment-form__textarea"
      name="text"
      value={text}
      onChange={onInputChange}
    />
    <select
      className="comment-form__select"
      name="rate"
      value={rate}
      onChange={onInputChange}
    >
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
    <button type="submit" className="comment-form__btn">
      Add Comment
    </button>
  </form>
);

export default CommentForm;
