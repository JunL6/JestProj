import React from "react";
import Root from "Root";
import CommentList from "components/CommentList";
import { mount } from "enzyme";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["comment1", "comment2"]
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one <li> per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
  //   console.log(wrapped);
});

it("shows the text for each comment", () => {
  //   console.log(wrapped.render().text());
  expect(
    wrapped
      .render()
      .find("li")
      .text()
  ).toContain("comment1");

  expect(
    wrapped
      .render()
      .find("li")
      .text()
  ).toContain("comment2");

  // console.log(wrapped.find("li").length);
});
