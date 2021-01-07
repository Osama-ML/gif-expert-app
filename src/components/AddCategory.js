import React, { useState } from 'react'

export const AddCategory = () => {

    const [InputValue, setInputValue] = useState('Hola mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho')
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
