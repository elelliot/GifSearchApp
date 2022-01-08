import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom'

describe('Pruebas en <AddCategory />', () => {

    //const setCategories = () => {}; //es una función vacía solo para llenar el argumento
    const setCategories = jest.fn();// lo mismo que arriba pero ahora se puede saber como , si fue, o cuantas veces fue llamada
    
    //se puede inicializar con ; para no repetir, pero se hace para acceder a los metodos
    let wrapper = shallow( <AddCategory setCategories = { setCategories } /> );
    


    
    beforeEach( () => {
        jest.clearAllMocks();//se llama para limpiar todo en una simulacion
        wrapper = shallow( <AddCategory setCategories = { setCategories } /> );
    })




    test('Debe mostrar el componente correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();
    });


    test('Debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola Demonio';

        //se manda el evento de un input change, este se define con {} , ese objeto tiene el valor del evento
        //recordar que existe el valor e.target.value el cual es el valor de lo que escribimos
        input.simulate('change', { target: { value } } );

        expect( wrapper.find('p').text().trim() ).toBe( value ); //esperamos que el parrafo = value
    })
    

    test('No debe postear la información con Submit', () => {
        
        //simulamos el submit del form
        wrapper.find('form').simulate('submit', { preventDefault(){} }); //el argumento del evento se manda solo, pero hay que mandar la función
        
        //como setCategories se llama gracias al Hola demonio de la prueba pasada, este debe reiniciarse con el beforeEach
        expect( setCategories ).not.toHaveBeenCalled(); 


    })


    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        
        
        const value = 'Se Agrego algo al input';

        const input = wrapper.find('input');
        //1. simular el inputChange
        input.simulate('change', { target: { value } } );

        //2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //3. setCategories  se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled(); 
        // expect( setCategories ).toHaveBeenCalledTimes(1); 
        // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)); 

        //4. El valor del input debe ser '' (String vacío) 
        expect( input.prop('value') ).toBe( '' );




    })
    
    

    
})
