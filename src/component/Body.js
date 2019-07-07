import React from "react";
import { connect } from "react-redux";
import action from '../store/action';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 获取redux数据  根据flag中的标识筛选对应内容
    let { data, flag } = this.props;
    data = data.filter(item => {
      let { state } = item;
      state = parseFloat(state);
      if (flag === 'complete') {
        return state === 1;
      }
      if (flag === 'uncomplete') {
        return state === 0;
      }
      return true;
    });

    return <div className="panel-body">
      <ul className="list-group">
        {data.map((item, index) => {
          let { id, name, state } = item;
          state = parseFloat(state);

          return <li className="list-group-item" key={index}>
            <input type="checkbox" name="todo" checked={!!state} onChange={ev => {
              let newState = ev.target.checked ? 1 : 0;
              this.props.updateState(id, newState);
            }} />
            <span className={state === 1 ? 'complete' : ''}>{name}</span>
            <a href="javascript:void 0" className="btn btn-xs btn-danger" onClick={ev => {
              let isOK = window.confirm('一旦删除将不能还原，确定要删除？');
              if (isOK) {
                this.props.remove(id);
              }
            }}>删</a>
          </li>
        })}
      </ul>
    </div>
  }
}

export default connect(state => ({ ...state.todo }), action.todo)(Body);