import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory =  ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');//string vacío, si lo dejamos sin '', es undefined y causará errores

    const handleInputChange = ( e ) => {
        //console.log(e.target.value);
        setInputValue (e.target.value);//obtenemos los cambios de texto con el evento

        //console.log('handleInputChange llamado');
    }

    const handleSubmit = ( e ) =>{

        e.preventDefault()//prevenimos el comportamiento por defecto que sería refrescar
        // console.log('Submit Hecho')

        //console.log('handleSubmit', inputValue);


        //validamos que no haya valores nulos o que sean mínimo de 3 caracteres
        if( inputValue.trim().length > 2){
            
            /*como no pasé las categories como argumento junto con el setCategories 
            llamo al callback que tiene el estado anterior, en este caso le llamo cats*/
            setCategories( cats => [ inputValue, ...cats]);//insertamos primero la categoría que buscamos y despues las anteriores
            setInputValue('');
        }


    }


    return (
        //cuando se quiere regresar un formulario, los fragments son redundantes ya que el form agrupa o el div
        //cuando aplastas enter el form se envía y se refresca por defecto
        <form onSubmit = { handleSubmit }>
            <p> { inputValue }</p>
            <input 
                type="text"
            /*el value se queda igual ya que esto se redibuja cada que toco el teclado y agarramos el valor desde el evento onChange*/
               value= { inputValue }
            /*Se puede mandar el primer argumento del onChange que sería el evento y lo atrapamos en la función (arriba) */
                onChange = { handleInputChange /*e => console.log(e)*/ } 
            />
        </form>
        
    )
}
//hacemos que el setCategories sea funcion obligatoria
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
