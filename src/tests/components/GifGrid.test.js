import { GifGrid } from "../../components/GifGrid"
import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs'); //fingimos la llamada a ese archivo


describe('Pruebas en <GifGrid />', () => {
    

    const category = 'Samurai X';


    //Mock Custom Hooks
    test('Debe mostrar el componente correctamente (El mensaje de Loading) ', () => {

        //falsa implementacion de cuando no tenemos una respuesta
        useFetchGifs.mockImplementation( category => { 
            return { data: [], loading: true }
          });

        const wrapper = shallow( <GifGrid category = { category } /> );
        //El Snapshot muestra el Loading unicamente, no los items
        expect( wrapper ).toMatchSnapshot();
    });


    test('Debe mostrar items cuando se cargan imagenes useFetchGifs ', () => {
        
        //evaluar cuando ya tienes una respuesta
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }] 


        useFetchGifs.mockImplementation( category => {
            return { data: gifs, loading: false };
          });

        const wrapper = shallow( <GifGrid category = { category } /> );


        //expect( wrapper ).toMatchSnapshot();

        //si el loading está en false, el parrafo no debería aparecer
        expect( wrapper.find('p').exists() ).toBe(false);

        //Los GifGridItem de la coleccion deben ser del mismo tamaño del numero de gifs que recibo 2 y 2 por ejemplo
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );


    })
    
    
})
