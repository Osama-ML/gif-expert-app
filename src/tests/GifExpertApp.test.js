import React from 'react';
import GifExpertApp from '../GifExpertApp';

import { shallow } from 'enzyme';

describe('Pruebas en GifExpertApp', () => {

    const wrapper = shallow(<GifExpertApp/>)

    test('Debe tener la misma estructura que el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
  
    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['One punch','Dragonball'];
        const wrapper = shallow(<GifExpertApp defaultCategories= {categories}/>)


        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    

})
