import React from 'react';
import {useForm} from '../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        handleAddTodo({
            id: new Date().getTime(),
            desc: description,
            done: false
        });
        reset();
    }

    return (
        <>
            <form onClick={handleSubmit}>

                <input type='text' 
                        name='description'
                        className='form-group form-group-lg mx-sm-3 mb-2"'
                        placeholder='Enter Task'
                        autoComplete='off'
                        value={description}
                        onChange={handleInputChange}
                />  

                <button type='submit'
                        className='btn btn-primary mb-2'
                >
                    Submit
                </button>

            </form>    
        </>
    )
}
