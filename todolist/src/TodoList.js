import React from 'react'

export default function TodoList({todos, deleteTodo}) {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id}>
                    <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <div>You don't have todo's</div>
    )
    return (
        <div>
            <div>
                {todoList}
            </div>
        </div>
    )
}
