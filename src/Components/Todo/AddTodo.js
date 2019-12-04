import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }

    todoChangedHandler = (e) => {
        this.setState({
            content: e.target.value     //Getting the user input
        })
    }

    todoSubmitHandler = (e) => {
        e.preventDefault()
        if (this.state.content !== '') {
            this.props.addtodo(this.state)      //AddTodoHandler function will be fired in [App.js]
        }
        this.setState({ content: '' })      //Setting the input field to empty
    }

    render() {
        return (
            <div>
                <form onSubmit={this.todoSubmitHandler}>
                    <label>Add new todo:</label>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter todo here..."
                            onChange={this.todoChangedHandler}
                            value={this.state.content}      //setting the user input to the content object
                        />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-dark px-5 text-secondary">Add</button>
                        </div>
                    </div>
                    

                </form>
            </div>
        )
    }
}


export default AddTodo
