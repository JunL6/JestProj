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
    <Root>
      <CommentList initialState={initialState} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one <li> per comment", () => {
  console.log(wrapped.find("li").length);
});
