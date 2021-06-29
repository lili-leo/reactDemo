// import logo from './logo.svg';
import React, { Component } from 'react'
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import './App.css';
export default class App extends Component {
  state={
    todos:[
      {id:1,name:"吃饭1",done:true},
      {id:2,name:"吃饭2",done:true},
      {id:3,name:"吃饭3",done:false}
    ]
  }
  addTodos=(dataObj)=>{
    console.log(dataObj)
    const {todos}=this.state
    const data=[dataObj,...todos]
    this.setState(
      {todos:data}
    )
  }
  render(){
    const {todos}= this.state
    return (
      <div className="App">
        <Header addTodos={this.addTodos}></Header>
        <List todos={todos}></List>
        <Footer></Footer>
      </div>
    );
  }
}

// export default App;//暴露app组件
