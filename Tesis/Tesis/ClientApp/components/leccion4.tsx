import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class leccion4 extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Logging And Diagnósticos </h1>
            <p>ASP.NET Core es compatible con una API de registro que funciona con una variedad de proveedores de registros. Los proveedores integrados le permiten enviar registros a uno o más destinos, y puede conectar un marco de registro de terceros. Este artículo muestra cómo utilizar la API y los proveedores integrados de registro en su código.

                El diagnóstico debe ayudar al usuario a comprender qué le sucede y, sobretodo, poder normalizar su situación. Si no cumple estos criterios es que el profesional está fallando y no está siendo capaz de captar las necesidades del usuario.
            </p>
            <ul>

            </ul>
            <h2>Como crear  Diagnósticos:</h2>
        
            <ul>
                <li> Crear una propiedad llamada mensaje y hacerla temporal. </li>
                <img src="../img/l4/1.png" width="500" height="333" />

                <li> Crear el mensaje en el método asíncrono task.. </li>
                <img src="../img/l4/2.png" width="500" height="333" />

                <li> En el archivo .cshtml agregamos el mensaje. </li>
                <img src="../img/l4/3.png" width="500" height="333" />

                <li> En el archivo .cshtml agregamos el mensaje utilizando Razor Pages. </li>
                <img src="../img/l4/4.png" width="500" height="333" />


            </ul>


            <h2>Como crear  Logging :</h2>

            <ul>
                <li> Agregamos el servicio en ConfigureServices del archivo Startup.cs </li>
                <img src="../img/l4/5.png" width="500" height="333" />

                <li> Agregamos el parámetro ILoggerFactory para poder tener información la consola y de debug. </li>
                <img src="../img/l4/6.png" width="500" height="333" />

                <li> Agregamos en la clase que queramos la propiedad ILogger y al constructor le agregamos un parámetro ILogger. </li>
                <img src="../img/l4/7.png" width="500" height="333" />

                <li> Agregamos logCritical para obtener el mensaje y mostrarlo en la página.. </li>
                <img src="../img/l4/8.png" width="500" height="333" />

                <li> Al agregar un dato nuevo nos mostrará el mensaje. </li>
                <img src="../img/l4/9.png" width="500" height="333" />



            </ul>

            

        </div>;
    }
}
