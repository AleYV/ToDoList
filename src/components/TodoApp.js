import React,{useReducer, useEffect} from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () =>{

    return JSON.parse(localStorage.getItem('item')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    };

    const handleAddTodo = (newTodo) =>{

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <>
            <h1 className='title'>To-Do List</h1>

            <div>
                <div>
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>

                <div className='col d-flex justify-content-center'>
                    <TodoList todos={todos}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}/>
                </div>

            </div>
        </>
    )
}
