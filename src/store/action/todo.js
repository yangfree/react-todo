import * as TYPES from "../action-type";

let todo = {
  // add 
  add(payload) {
    return {
      type: TYPES.TODO_ADD,
      payload
    }
  }
}

export default todo;