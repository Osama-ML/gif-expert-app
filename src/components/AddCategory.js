import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('Hola mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (InputValue.trim().length > 2){
            setCategories(categ => [...categ, InputValue]);
            setInputValue('');
        }
    }

    return (
        <>
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
