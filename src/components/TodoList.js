import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos,handleDelete,handleToggle}) => {
    return (
        <div className='card'>

            <ul className='list-group list-group-flush'>
                {
                    todos.map( (todo,i) =>(
                        //TodoListItem, todo, index, handleDelete, handleToggle
                        <TodoListItem todo={todo}
                                        key={todo.id}
                                        index={i}
                                        handleDelete={handleDelete}
                                        handleToggle={handleToggle}/>
                        ))
                    }
            </ul>
    
        </div>
    )
}
