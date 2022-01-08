import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,

    });


    useEffect( () =>{

        getGifs( category )
            .then( imgs =>{

                setState( {
                    data: imgs,
                    loading: false
                });
            })

    },[category])


    

    return state; //{ data: [] , loading: true }
}











/*el use effect recibe una funcion , la que quiero ejecutar,
     y gracias al arreglo de dependencias vacío solo se dispara una única vez
    */
    // useEffect( ()=> {
    //     //solo quiero que se ejecute esta instruccion cuando el componente es renderizado por 1ra vez
    //     //como cambia la categoría queremos volver a ejecutarla, entonces la ponemos dentro del argumento del array
    //     getGifs( category )
    //         .then( setImages ); //como tenemos una funcion cuyo primer arg es enviado como 1er arg podemos cambiar imgs => setImages( imgs ) a lo que tenemos
    // }, [ category ])




    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false,
    
    //     })
    // }, 3000);