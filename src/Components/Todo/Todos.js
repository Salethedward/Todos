import React from 'react'

const todos = (props) => {

//Displaying a todo
    const todoList = props.todos.length ?
        (
            props.todos.map(todo => {
            return (
                <div 
                    key={todo.id} 
                    className="
                        container 
                        card border 
                        border-dark 
                        shadow-lg 
                        mb-2 
                        rounded 
                        bg-dark 
                        text-white"
                >
                    <div className="card-body">
                        <span className="float-left"> {todo.content} </span>
                        <button 
                            type="button" 
                            class="close" 
                            aria-label="Close"
                            onClick={() => props.deleteTodo(todo.id)}     //deleteTodoHandler will be fired
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )
        })
    ) : null

    return (
        <div>
            {todoList}
        </div>
    )
}

export default todos