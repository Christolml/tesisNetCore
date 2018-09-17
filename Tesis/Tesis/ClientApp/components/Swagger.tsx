import * as React from 'react';
import { RouteComponentProps } from 'react-router';

const swaggerGithub = require('../img/Intermedio/lSwagger/swaggerGithub.png');
const manageNugets = require('../img/Intermedio/lSwagger/manageNugets.png');
const browseSwagger = require('../img/Intermedio/lSwagger/browseSwagger.png');
const configureServices = require('../img/Intermedio/lSwagger/configureServices.png');
const configureSwagger = require('../img/Intermedio/lSwagger/configureSwagger.png');
const swaggerJson = require('../img/Intermedio/lSwagger/swaggerJson.png');
const swaggerNavegador = require('../img/Intermedio/lSwagger/swaggerNavegador.png');
const swaggerPost = require('../img/Intermedio/lSwagger/swaggerPost.png');
const swaggerDescripcion = require('../img/Intermedio/lSwagger/swaggerDescripcion.png');




export class Swagger extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2>Swagger.</h2>
            <p style={{ textAlign: 'justify' }}>
                En el apartado anterior construimos nuestra Web API en la cual manejábamos el registro de tickets de conciertos, en ese
                apartado no alcanzamos a enfatizar la necesidad de la documentación de nuestra API y por eso en este apartado
                hablaremos sobre Swagger, el cual va nos va a servir para describir nuestra API y que gente que no esté familiarizada con nuestra
                API pueda comprender la función de la API de una manera muy amigable y sencilla. El Swagger que vamos a ocupar es open
                source y se encuentra disponible en su github el cual es la siguiente url <a href="https://github.com/domaindrivendev/Swashbuckle">https://github.com/domaindrivendev/Swashbuckle</a> y
                nos muestra la documentación de la librería.	
            </p>
            <img alt='swaggerGithub' src={String(swaggerGithub)} width="630" height="330" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestro proyecto Web API instalaremos <i>Swagger</i> y debemos hacerlo descargándolo como <i>NuGet</i>, damos clic derecho
                a nuestro proyecto y seleccionamos <i>Manage NuGet Packages…</i>
            </p>
            <img alt='manageNugets' src={String(manageNugets)} width="500" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En el buscador que nos aparece nos ubicamos en la pestaña de <i>Browse</i> e insertamos la búsqueda de <i>swashbuckle.aspnetcore</i> e
                instalamos la que tiene el nombre tal cual como la búsqueda.
            </p>
            <img alt='browseSwagger' src={String(browseSwagger)} width="600" height="230" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Instalado nuestro <i>NuGet</i> lo que sigue es inicializarlo en nuestro archivo <i>Startup.cs</i> en el método de <i>ConfigureServices</i> y le
                agregamos ciertos campos a nuestra documentación que se nos generará.
            </p>
            <img alt='configureServices' src={String(configureServices)} width="500" height="150" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora en nuestro método de <i>Configure</i> en el mismo archivo de <i>Startup.cs</i> ocupamos agregar a nuestra app nuestro Swagger y a su
                vez se estará construyendo la interfaz gráfica de nuestra documentación que se podrá visualizar al ejecutar nuestra Web API e ir a
                la ruta que establecimos en este punto.
            </p>
            <img alt='configureSwagger' src={String(configureSwagger)} width="500" height="190" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ya hemos terminado la configuración de nuestro Swagger y ahora debemos ejecutar nuestra <i>Web API</i> y nos vamos a la ruta que establecimos
                en nuestro Swagger y notaremos nuestra documentación de la API generada en formato <i>json</i>.
            </p>
            <img alt='swaggerJson' src={String(swaggerJson)} width="400" height="500" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Si queremos obtener una interfaz más amigable de nuestra documentación de la API tan solo ocupamos poner la ruta /swagger cuando se
                esté ejecutando nuestra Web API y tendremos una interfaz mucho más sencilla y visual. En esta nueva forma de ver la documentación
                de nuestra API podemos interactuar con la API de acuerdo con las peticiones del protocolo HTTP.
            </p>
            <img alt='swaggerNavegador' src={String(swaggerNavegador)} width="650" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Vamos a utilizar nuestra petición POST para crea un nuevo ticket.
            </p>
            <img alt='swaggerPost' src={String(swaggerPost)} width="650" height="450" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Una vez que ejecutemos la petición para crear un nuevo ticket se nos desplegara información sobre la acción que se acaba de
                hacer y podemos notar que efectivamente nuestra API está trabajando de la forma esperada y desde esta documentación podemos
                saber un poco más a detalle el funcionamiento de una Web API antes de usarla oficialmente en un proyecto.
            </p>
            <img alt='swaggerDescripcion' src={String(swaggerDescripcion)} width="650" height="450" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                De esta forma gracias a Swagger hemos implementado un poco de documentación de nuestra Web API, la cual no puede ser la
                mejor documentación pero para algo rápido, bonito y entendible nos sirve hacer este tipo de documentación.
            </p>
            <br />
            <br/>

        </div>;
    }
}
