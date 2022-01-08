import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el Custom Hook useFetchGifs', () => {
    

    test('Debe retornar el estado inicial', async() => {
        
        //se coloca el custom hook dentro de un callback
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) ); //Desestructuramos para acceder a los valores que queremos
        const { data , loading } = result.current;// el valor actual del custom hook


        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    })


    test('Debe retornar un arreglo de imgs y el loading en false', async() => {
       
        //waitForNextUpdate es una funcion que regresa una promesa que indica cuando ya sucedio un cambio en el estado del hook
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();

        const { data , loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

        

    });
    
    
})
