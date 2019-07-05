import React from "react";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="panel-body">
      <ul className="list-group">
        <li className="list-group-item">
          <input type="checkbox" name="todo"/>
          <span>吃饭</span>
          <a href="javascript:void 0" className="btn btn-xs btn-danger">删</a>
        </li>
      </ul>
    </div>
  }
}