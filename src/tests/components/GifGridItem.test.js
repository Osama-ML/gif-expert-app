import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem/>', () => {

    const titleTest = 'Título';
    const urlTest = 'https://localhost/algo.jpeg';
    const wrapper = shallow(<GifGridItem title={titleTest} url={urlTest}/>)

    test('Debe de mostrar el contenido correctamente', () => {    
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titleTest);
    })
    
    test('Debe de tener la imagen igual a las propiedades', () => {
        const img = wrapper.find('img');
        const {src, alt} = img.props();
        expect(alt).toBe(titleTest);
        expect(src).toBe(urlTest);
    })
    

    test('Debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const classTest = div.prop('className');
        expect(classTest.includes('animate__fadeIn')).toBe(true);
    })
    

})
