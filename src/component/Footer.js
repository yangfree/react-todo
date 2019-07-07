import React from "react";
import { connect } from "react-redux";
import action from '../store/action';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    // 自己模拟展示按钮数据
    this.showDate = [
      { text: '全部', flag: 'all' },
      { text: '已完成', flag: 'complete' },
      { text: '未完成', flag: 'uncomplete' },
    ]
  }

  render() {
    let { flag } = this.props;

    return <div className="panel-footer">
      <ul className="nav nav-pills" onClick={this.uadateFilter}>
        {this.showDate.map((item, index) => {
          let { text, flag: itemFlag } = item;
          return <li className={itemFlag === flag ? 'presentation active' : 'presentation'} key={index}>
            <a href="javascript:;" flag={itemFlag}>{text}</a>
          </li>
        })}
      </ul>
    </div>
  }

  uadateFilter = (ev) => {
    let target = ev.target, tarTag = target.tagName;
    if (tarTag === 'LI') {
      target = target.firstElemntChild;
      tarTag = target.tagName;
    }
    if (tarTag === 'A') {
      let text = target.getAttribute('flag');
      if (this.props.flag === text) return;
      this.props.filter(text);
    }
  }
}

export default connect(state => ({ ...state.todo }), action.todo)(Footer);