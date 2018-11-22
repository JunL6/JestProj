import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      // console.log("comment: " + comment);
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Comments</h3>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
