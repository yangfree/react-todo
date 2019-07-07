import * as TYPES from "../action-type";

let todo = {
  // add 
  add(payload) {
    return {
      type: TYPES.TODO_ADD,
      payload
    }
  },
  // 更新筛选对象
  filter(text) {
    return {
      type: TYPES.TODO_FILTER,
      text,
    }
  }
}

export default todo;