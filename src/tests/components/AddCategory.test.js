import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de cambiar el input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        
        input.simulate('change', { 
            target: {
                value: value
            } 
        });
        
        const p = wrapper.find('p');
        
        expect(p.text().trim()).toBe(value);
    })
    

})
