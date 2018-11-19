import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

/** describe block */
describe("testing textarea functionalities", () => {
  beforeEach(() => {
    /** simulate */
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    /** update */
    wrapped.update();
  });

  /** test */
  it("has a text area that users can type in", () => {
    /** assert if the value has changed */
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  /** test */
  it("has a textarea that empties itself after users submit", () => {
    /** assert if the textarea has some value */
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    /** simulate submiting */
    wrapped.find("textarea").simulate("submit");
    /** update */
    wrapped.update();
    /** assert if the textarea has been emptied */
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

// it("has a text area that users can type in", () => {
//   /** simulate */
//   wrapped.find("textarea").simulate("change", {
//     target: { value: "new comment" }
//   });
//   /** update */
//   wrapped.update();
//   /** assert if the value has changed */
//   expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
// });

// it("has a textarea that empties itself after users submit", () => {
//   /** simulate typing */
//   wrapped.find("textarea").simulate("change", {
//     target: { value: "one comment" }
//   });
//   /** update */
//   wrapped.update();
//   /** assert if the textarea has some value */
//   expect(wrapped.find("textarea").prop("value")).toEqual("one comment");
//   /** simulate submiting */
//   wrapped.find("textarea").simulate("submit");
//   /** update */
//   wrapped.update();
//   /** assert if the textarea has been emptied */
//   expect(wrapped.find("textarea").prop("value")).toEqual("");
// });
