import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    // hemos inicializado la variable wrapper para pdoer tener la ayuda del automcompletado, no es necesario como tal

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    });

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
    

    test('NO debe de postear la info con submit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault (){

        } })

        expect(setCategories).not.toHaveBeenCalled();

    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola test'
        
        // simular inputChnage
        wrapper.find('input').simulate('change', { target: {value:value} });

        // simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        // setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();

        // el calor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    

})
