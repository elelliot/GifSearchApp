
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';




const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {

    //     // setCategories( 'HunterXHunter' ); esto cambia de el estado de arreglo por un string osea es incorrecto

    //     //usamos spread operator para mantener las categorias ya que es const y agregamos las nuevas
    //     // setCategories( [...categories, 'HunterXHunter'] );


    //     //también puede tener un callback que tiene como argumento el valor del estado anterior y regresa el nuevo
    //     setCategories( cats => [...cats, 'HunterXHunter'] ); 
    // }
    
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            

            <ol>
                {
                    categories.map( category => ( // iteracion, indice (no lo pusimos)
                        // return <li key={ category }> { category } </li>//estos keys suelen ser id´s de bases de datos, osea únicos
                         <GifGrid 
                            key = { category }
                            category = { category } />//no usamos el return por que solo regresa una cosa en el otro también lo podemos quitar
                    ))
                }
            </ol>
        </>
    )
}


export default GifExpertApp

//rafcp+tab Functional Component Template