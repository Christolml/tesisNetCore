import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class leccion3 extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Razor Pages</h1>
            <p>En esta lección abordaremos el tema de Razor Pages para poder utilizarlo en ASP.NET Core 2.0</p>
            <ul>
               
            </ul>
            <h2>¿Qué es Razor Pages?:</h2>


            <p>ASP.NET Core Razor Pages es un marco de controlador de página para crear sitios web dinámicos y basados en datos con una clara separación de preocupaciones. Basado en la última versión de ASP.NET de Microsoft - ASP.NET Core, Razor Pages admite el desarrollo multiplataforma y se puede implementar en sistemas operativos Windows, Unix y Mac.

El framework Razor Pages proporciona al desarrollador un control total sobre el HTML renderizado. El marco está construido sobre ASP.NET Core MVC, y está habilitado por defecto cuando MVC está habilitado en una aplicación .NET Core. Razor Pages es el marco recomendado para la generación de HTML multiplataforma en el servidor en .NET Core. No necesita tener ningún conocimiento o comprensión de MVC para trabajar con Razor Pages.

Razor Pages utiliza el popular lenguaje de programación C # para la programación del lado del servidor, y la sintaxis de plantillas Razor fácil de aprender para incrustar C # en el marcado HTML para generar contenido para los navegadores de forma dinámica.

Todos los archivos Razor terminan con .cshtml. La mayoría de los archivos Razor están destinados a ser navegables y contienen una mezcla de código del lado del cliente y del lado del servidor, que, cuando se procesa, da como resultado el envío de HTML al navegador. Estas páginas se conocen generalmente como "páginas de contenido". Esta sección profundiza en las páginas de contenido y sus archivos asociados de PageModel.
         </p>


            <h2>Razor Syntax para C#</h2>

            <ul>
                <li> Los bloques de código C # están encerrados en @  {  }  </li>
                <li> Las expresiones en línea (variables o funciones) comienzan con @.</li>
                <li> Las declaraciones de código terminan con punto y coma.</li>
                <li> Las variables se declaran con la palabra clave var.</li>
                <li> Las cadenas están entre comillas.</li>
                <li> El código de C # es sensible a mayúsculas.</li>
                <li> Los archivos C # tienen la extensión .cshtml.</li>
                
                
            </ul>
            <h2>Create a Razor web app</h2>
            <ul>
                <li> En el  Menú de archivos de Visual Studio , Seleccionamos  Nuevo > Projecto. </li>
                <li> Crear una nueva  ASP.NET Core Web Application. nombrar la aplicación  RazorPagesE. Es importante que el nombre del proyecto este junto sin espacios  RazorPagesE .</li>

                <img src="../img/l3RP/descarga.jpg"  width="500" height="333" />
            </ul>

            <li> Seleccionamos ASP.NET Core 2.0 en la barra despegable y damos doble click en Web Application ..</li>
            <img src="../img/l3RP/l32.png" width="500" height="333" />
            <li> El  modelo de Visual Studio creará un proyecto..</li>
            <img src="../img/l3RP/l33.png" width="500" height="333" />
            <li> Presionar F5 para arrancar la aplicación en modo debug mode o Ctrl-F5 para arrancar sin el modo debugger.</li>
            <img src="../img/l3RP/l34.png " width="500" height="333" />
            <h2>Añadir un modelo para Razor Pages app en ASP.NET Core.</h2>
            <li>Damos click derecho en la carpeta de pages y seleccionamos agregar > Pagina de Razor...</li>
            <img src="../img/l3RP/l35jpg" width="500" height="333" />
            <li> Damos click en Página de Razor y después aceptar..</li>
            <img src="../img/l3RP/l36jpg" width="500" height="333" />
            <li> Ingresamos el nombre que queremos que tenga y damos en Agregar..</li>
            <img src="../img/l3RP/l37jpg" width="500" height="333" />
            <li> Nos creará un archivo .cshtml para poder trabajar.</li>
            <img src="../img/l3RP/l37jpg" width="500" height="333" />

            <h2>Ejemplo</h2>
            <img src="../img/l3RP/l38jpg" width="500" height="333" />

        </div>;
    }
}
