import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {

    const category = 'hola';

    test('debe de mostarar la informacion correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        
        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('debe de mostrar imagenes cuando se carguen', () => {
        
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    })
    

})
