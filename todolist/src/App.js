import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       todos: [
         {"id": 1, "content": "Make tea"},
         {"id": 2, "content": "Go for walk"}
       ]
    }
  }
  
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id // Deletes only if it returns false
    })      
    this.setState({
      todos
    })  
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({todos});
  }

  render() {
    return (
      <div>
        <h1>React Todo Application</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App
