export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=GElegRrxuBtn3G8OLMKVk73R9BguQKlL`;
    const resp= await fetch(url);
    const { data } = await resp.json();


    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //si viene la imagen, que la use, pero ponemos por si acaso el "?"
        }
    })

    return gifs;
    // console.log(gifs);
    // setImages( gifs );

}