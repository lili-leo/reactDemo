import React, { Component } from 'react'
import Item from "../Item"
export default class List extends Component {
  
  render() {
    console.log(this.props.todos)
    const {todos}=this.props
    return (
      <div>
        {
          todos.map((todo,index)=>{
            return <Item key={todo.id} {...todo} />
          })
        }
      </div>
    )
  }
}
