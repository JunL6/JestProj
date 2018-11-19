import React, { Component } from "react";

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = { comment: "" };

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // TODO -- call an action creator to save the comment

    this.setState({ comment: "" });
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button className="btn btn-primary">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
