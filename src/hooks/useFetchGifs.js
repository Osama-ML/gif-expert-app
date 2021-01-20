import { useEffect, useState } from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGifs(category)
            .then(imgs => {

                setTimeout(()=>{
                    setstate({
                        data: imgs,
                        loading: false,
                    })
                },700)

            })

    }, [category]) // se ejecueta cuando el componente es renderifazo por primera vez
    // si la dependencia category cambia, se vuelve a ejecutar el useEffect

    return state;

}
