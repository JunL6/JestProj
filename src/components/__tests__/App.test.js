import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  /** vanilla testing */
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // // look inside the div
  // expect(div.innerHTML).toContain("CommentBox");
  // // ends here
  // ReactDOM.unmountComponentAtNode(div);
  //
  /** testing with Enzyme */

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
