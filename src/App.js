import React, { Component } from 'react'
import './App.css'
import Todos from './Components/Todo/Todos'
import AddTodo from './Components/Todo/AddTodo'
import uuid from 'uuid/v4'


class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        content: " Earth's mightiest heroes "
      }
    ]
  }

//Adding a todo to the list
  addTodoHandler = (todo) => {
    todo.id = uuid()
    let todos = [...this.state.todos, todo]
    this.setState({ todos })
  }

//Deleting a todo from the list
  deleteTodoHandler = (id) => {
    const todo = [...this.state.todos]
    const todos = todo.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos })
  }

  render() {
    return (
      <div className="text-center">
        <div className="jumbotron jumbotron-fluid bg-secondary">
          <div className="container">
            <h1 className="display-4">ToDo</h1>
            <AddTodo addtodo={this.addTodoHandler} />
          </div>
        </div>
        <Todos 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodoHandler} 
        />
      </div>
    )
  }
}

export default App
