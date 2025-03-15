import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to gym',
        'go to gym',
        'go to gym'
    ]
  return (
    <ul>
        {todos.map((todo, todoIndex) => {
            return (
                <li key={todoIndex}>{todo}</li>
            )
        })}
    </ul>
  )
}
