import React from 'react'

function TodoList(item, index) {
    return (
        <div>
            <ul>
                {index}{item}
            </ul>
        </div>
    )
}

export default TodoList
