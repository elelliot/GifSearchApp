import React from 'react';
import Proptypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //usamos el custom hook
    const { data:images , loading } = useFetchGifs( category ); //renombramos la data desestructurada


    // const [images, setImages] = useState([])


    return (
        <>
            <h3 className=" animate__animated animate__fadeIn ">{ category }</h3>

            {/* para no tener que poner un null si la condicion no se cumple usamos el && para solo evaluar lo primero 
            y no hacer nada si no se cumple */}
            { loading && <p className = "animate__animated animate__flash">Loading</p> }
            {/*  loading ? <p>Loading</p> : null */}
            
            <div className = "card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key = { img.id }
                            { ...img } 
                            // img = { img } 
                        />
                        // return <li key= { imagen.id }>{ imagen.title }</li>
                    ))
                    
                }
                
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: Proptypes.string.isRequired
}

