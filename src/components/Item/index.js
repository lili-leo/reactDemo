import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {id,name,done}=this.props
    return (
      <div>
        <ul>
          <li>
            <label>
              <input defaultChecked={done} type="checkbox"></input>
              <span>{id}---{name}---{done}</span>
              <button>删除</button>
            </label>
          </li>
        </ul> 
      </div>
    )
  }
}
