import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'HunterXHunter'] );
    //     setCategories(categ => [...categ, 'Hola mundo'])
    // }

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