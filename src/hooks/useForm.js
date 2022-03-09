import {useState} from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = ()=> {
        setValues(initialState);
    }

    //Custom Hook que se encarga de manejar los formularios
    const handleInputChange = ({target}) =>{

        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values,handleInputChange, reset];

}
