import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories)

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr />
            
            <ul>
                {
                    categories.map(categoria => {
                        return <GifGrid 
                            key={categoria}
                            category={categoria}
                        /> ;
                    })
                }
            </ul>
        </>    
    );
}

export default GifExpertApp;