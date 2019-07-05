import * as TYPES from "../action-type";

export default function todo(state = {
  data: [],
  flag: "all"
}, action) {
  // 深度克隆  保护原有信息
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TYPES.TODO_ADD:
      let { payload } = action;
      payload.id = state.data.length === 0 ? 1 : (parseFloat(state.data[state.data.length - 1]['id']) + 1);
      state.data.push(payload);
      break;

    default:
      break;
  }

  return state;
}