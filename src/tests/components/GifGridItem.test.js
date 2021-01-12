import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem/>', () => {

    const titulo = 'Título';
    const url = 'https://localhost/algo.jpeg';

    test('Debe de mostrar el contenido correctamente', () => {
        
        const wrapper = shallow(<GifGridItem title={titulo} url={url}/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
