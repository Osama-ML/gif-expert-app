import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category)
            .then(gifs => setImages(gifs))
    }, [category]) // se ejecueta cuando el componente es renderifazo por primera vez
    // si la dependencia category cambia, se vuelve a ejecutar el useEffect



    return (
        <>
            <h3>
                {category}
            </h3>
            <div className="card-grid">
                {
                    images.map((img) => {
                        return(<GifGridItem key= {img.id} 
                            { ...img } /> // se puede enviar datos de esta maanera tmb
                        )
                        })
                }
            </div>
        </>
    )
}
