import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Header extends Component {
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      //       let  idA = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
      // //也可以指定生成字符串的长度
      // let  idB = nanoid(5)
      if (e.target.value.trim() === "") {
        alert("sasasasasa");
        return;
      }
      let obj = {
        name: e.target.value,
        done: false,
        id: nanoid(),
      };
      this.props.addTodos(obj);
      e.target.value=""
    }
  };
  render() {
    return (
      <div>
        <input
          onKeyUp={this.handleKeyUp}
          placeholder="请输入你的任务名称，按回车键确认"
        ></input>
      </div>
    );
  }
}
