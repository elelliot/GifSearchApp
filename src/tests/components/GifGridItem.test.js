import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"



describe('Pruebas en <GifGidItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    
    const wrapper = shallow( <GifGridItem title = { title } url={ url }/>)

    test('Debe mostrar el componente correctamente ', () => {
        

        expect( wrapper ).toMatchSnapshot();
    })
    


    test('Debe de tener un parrafo con el title', () => {
        

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });


    test('Debe tener la imagen igual al url y alt de los props', () => {
        

        const img = wrapper.find('img'); //como solo es una imagen se puede hacer eso, si no, buscarla por id o clase
        
        //1-  img.html() --- te devuelve la etiqueta con las propiedades 
        //2-  img.props() --- te devuelve un objeto con las props
        //2.5 img.props().src --- te devuelve la propiedad del tag (src en este caso)
        //3-  img.prop('src') --- lo mismo pero solo te devuelve una propiedad
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    

    test('Debe tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');

        //.hasClass devuelve true si contiene al menos 1 clase y el toBeTrurthy confirma que sea true por defecto en lugar de ponerle toBe( true )
        expect( div.hasClass('animate__fadeIn') ).toBeTruthy();
    })
    
    
})
