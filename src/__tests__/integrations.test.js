import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";

import Root from "Root";
import App from "components/App";

/** install moxios */
beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "fetched #1" }, { name: "fetched: #2" }]
  });
});

/** uninstall moxios */
afterEach(() => {
  moxios.uninstall();
});

/** render the whole app and test */
it("can fetch a list of comments and display them", done => {
  /** 1. attempt to render the *entire* app */
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  /** 2. find the 'fetchComments' button and click it */
  //   console.log(wrapped.find(".fetch-comment"));
  //   console.log(wrapped.find(".fetch-comment").length);
  wrapped.find(".fetch-comment").simulate("click");

  /** 3. introduce a little pause for request to process */

  /** 5. pause for a bit, and Expect to find a list of comments */
  moxios.wait(() => {
    /** update the component */
    wrapped.update();

    expect(wrapped.find("li").length).toEqual(2); //?????????WHY IT DOESN'T WORK ===> it takes time to process the request, so we should wait for a bit after Click event

    /** tell Jest it's over */
    done();

    /** unmount */
    wrapped.unmount();
  });
});
