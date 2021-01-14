import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // elimina la accion de accion por defecto de un input
        
        console.log('handleSubmit', InputValue)
        
        if (InputValue.trim().length > 2){
            setCategories(categ => [InputValue, ...categ]);
            setInputValue('');
        }
    }

    return (
        <>
            <p> {InputValue} </p>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={InputValue}
                onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}