import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr />
            
            <ol>
                {
                    categories.map(categoria => {
                        return <li key={categoria}>{categoria}</li>;
                    })
                }
            </ol>
        </>    
    );
}

export default GifExpertApp;