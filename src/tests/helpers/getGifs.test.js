import { getGifs } from "../../helpers/getGifs";



describe('Pruebas con getGifs Fetch', () => {
    

    test('Debe traer 10 elementos', async() => {
        

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );
    })
    


    test('Que pasa si no mando categoría', async() => {
        

        const gifs = await getGifs('');
        // console.log(gifs);
        expect( gifs.length ).toBe( 0 );
    })
})
