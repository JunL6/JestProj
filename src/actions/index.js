import { SAVE_COMMENT, FETCH_COMMENT } from "actions/types";
import axios from "axios";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComment() {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");
  // console.log("actions/index, response: ");
  // console.log(response);
  return {
    type: FETCH_COMMENT,
    payload: response
  };
}
