import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

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