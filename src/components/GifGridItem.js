import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( { /*id,*/ title, url } ) => {

    // console.log( id, title, url  );

    return (
        <div className="card animate__animated animate__fadeIn ">
            <img src= { url } alt = { title } />
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
// import React from 'react'

// export const GifGridItem = ( img ) => {

//     console.log( img );
    
//     return (
//         <div>
//             { img.title }
//         </div>
//     )
// }

















