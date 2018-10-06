import * as React from 'react';
import { RouteComponentProps } from 'react-router';



const img1 = require('../img/l6/1.png');
const img2 = require('../img/l6/2.png');
const img3 = require('../img/l6/3.png');
const img4 = require('../img/l6/4.png');
const img5 = require('../img/l6/5.png');
const img6 = require('../img/l6/6.png');
const img7 = require('../img/l6/7.png');




export class tagHelpers extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <ul>
                <h1>Tag Helpers</h1>
                <p style={{ textAlign: 'justify' }}> Los Tag Helpers permiten que el código del lado del servidor participe en la creación y representación de elementos HTML en archivos Razor Hay muchos Ayudantes de Etiquetas incorporados para tareas comunes, como crear formularios, enlaces, cargar activos y más, y aún más disponibles en repositorios públicos de GitHub y como paquetes NuGet. Los Ayudantes de etiquetas se crean en C # y se dirigen a elementos HTML según el nombre del elemento, el nombre del atributo o la etiqueta principal. Por ejemplo, el LabelTagHelper incorporado puede apuntar al elemento HTML label cuando se aplican los atributos LabelTagHelper. Si está familiarizado con HTML Helpers, Tag Helpers reduce las transiciones explícitas entre HTML y C # en las vistas de Razor. En muchos casos, HTML Helpers proporciona un enfoque alternativo a un Tag Helper específico, pero es importante reconocer que Tag Helpers no reemplaza a los HTML Helpers y que no hay un Tag Helper para cada HTML Helper.

Un tag helper es cualquier clase que implementa la interfaz ITagHelper. Sin embargo, cuando creas un Tag Helper, generalmente derivas de TagHelper, al hacerlo, tienes acceso al método Process.

            </p>

                <hr />

            </ul>
            <ul>
                <h2>Como crear Tag Helpers:</h2>

                <p style={{ textAlign: 'justify' }}> Cree un nuevo proyecto ASP.NET Core .</p>

                <img alt='urlNet' src={String(img1)} />

                <p style={{ textAlign: 'justify' }}> Crea una carpeta para contener Tag Helpers llamada TagHelpers. La carpeta TagHelpers </p>
                <img alt='urlNet' src={String(img2)} />

                <p style={{ textAlign: 'justify' }}>Crea una clase llamada EmailTagHelper en el folder </p>
                <p style={{ textAlign: 'justify' }}>La clase EmailTagHelper se deriva de TagHelper. La clase TagHelper proporciona métodos y propiedades para escribir Tag Helpers. </p>
                <p style={{ textAlign: 'justify' }}>El método de proceso anulado controla lo que hace Tag Helper cuando se ejecuta. La clase TagHelper también proporciona una versión asincrónica  con los mismos parámetros. </p>

                <img alt='urlNet' src={String(img3)} />

                <p style={{ textAlign: 'justify' }}> Para que la clase EmailTagHelper esté disponible para todas nuestras vistas de Razor, agregue la directiva addTagHelper al archivo Views / _ViewImports.cshtml:. </p>
                <img alt='urlNet' src={String(img4)} />

                <p style={{ textAlign: 'justify' }}> Actualice el marcado en el archivo Views / Home / Contact.cshtml con estos cambios.</p>
                <img alt='urlNet' src={String(img5)} />

                <p style={{ textAlign: 'justify' }}> Actualizaremos el EmailTagHelper para que cree una etiqueta de ancla válida para el correo electrónico. </p>
                <img alt='urlNet' src={String(img6)} />

                <p style={{ textAlign: 'justify' }}>Cambiamos el archivo Views/Home/Contact.cshtml con los siguientes cambios:. </p>
                <img alt='urlNet' src={String(img7)} />

            </ul>
            <hr />
        </div>;
    }
}
