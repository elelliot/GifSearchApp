import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import GifExpertApp from "../GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {
    



    test('Debe mostrar bien el comp', () => {

        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
        
    });


    test('Debe mostrar una lista de categorias ', () => {
        //no hay manera directa de ponerle un valor por defecto en el useState, por lo que lo hicimos el arreglo de valores en el comp
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories = { categories } /> );

        expect( wrapper ).toMatchSnapshot()
        
        //Que el numero de elementos GifGrid sean igual al numero de categorias por default 
        expect( wrapper.find('GifGrid').length ).toBe( categories.length ); 
    })
    
    
})
