import React from 'react'

export const GifGridItem = ({title, url}) => {

    console.log(title)

    return (
        <>
            <div>
                <hr/>
                <p>{title}</p>
                <img src={url} alt={title}></img>
            </div>
        </>
    )   
}
