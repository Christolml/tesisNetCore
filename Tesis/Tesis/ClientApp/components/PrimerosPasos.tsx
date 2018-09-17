import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const urlNet = require('../img/l1/urlNetCore.png');
const descargar = require('../img/l1/descargar.png');
const docs = require('../img/l1/documentacion.png');
const docNet = require('../img/l1/documentacionNetCore.png');
const vStudio = require('../img/l1/visualStudio.png');
const vCode = require('../img/l1/visualCode.png');



export class PrimerosPasos extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Primeros Pasos</h1>

            <p style={{ textAlign: 'justify' }}>
                En esta lección abordaremos los primeros pasos de inicialización con .NET Core.
                <br/>
                Lo primero que debemos hacer para entrarnos al mundo de .Net Core es entrar al sitio oficial
                proporcionada por la empresa Microsoft, la dirección web es <a href="https://www.microsoft.com/net ">https://www.microsoft.com/net</a>.
            </p>
            <img alt='urlNet' src={String(urlNet)} width="650" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Una vez dentro de la página debemos dar click en el apartado de <i>Downloads</i> el cual nos redirecciona a la página de descargas 
                luego nos mostrará las opciones para los sistemas operativos de Windows, Linux y macOS y en este caso el que nos importa es el de Windows,
                debemos hacer énfasis que debemos descargar el .Net Core SDK el cual incluye todo lo que necesario para crear y ejecutar aplicaciones 
                .NET Core utilizando herramientas de línea de comandos y cualquier editor (incluido Visual Studio).
            </p>
            <img alt='descargar' src={String(descargar)} width="650" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Otro apartado importante es la página de documentación que nos proporciona Microsoft 
                la url <a href="https://docs.microsoft.com/es-mx/">https://docs.microsoft.com/es-mx/ </a>
                nos muestra el listado de las tecnologías proporcionadas con fines de desarrollo de software y nos enfocamos en el recuadro de <i>.NET</i>.
            </p>
            <img alt='docs' src={String(docs)} width="650" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Dentro de la documentación de <i>.NET</i> nos muestra sus derivaciones y el que nos importa es <i>Guía de .NET Core</i>.
            </p>
            <img alt='docNet' src={String(docNet)} width="650" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Una vez que ya dimos una recorrido rápido sobre <i>.NET Core</i> por la página oficial de su empresa fundadora
                ahora nos damos una vuelta por el IDE de Visual Studio y Visual Studio Code los cuales son con los que vamos
                a trabajar y estos se encuentran disponible para los sistemas operativos de Windows, Linux y macOS.
                <br/>
                Visual Studio tiene versiones de Community, Professional y Enterprise mientras que Visual Studio Code es un
                IDE mas sencillo pero a su vez poderoso y solo cuenta una versión, Visual Studio lo podemos descargar de la
                siguiente dirección <a href="https://visualstudio.microsoft.com/es/">https://visualstudio.microsoft.com/es/</a> y Visual Studio Code lo podemos descargar del
                siguiente link <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>. 
            </p>
            <img alt='vStudio' src={String(vStudio)} width="650" height="400" />
            <br />
            <br />
            <img alt='vCode' src={String(vCode)} width="650" height="400" />
            <br />
            <br />
            

        </div>;
    }
}
