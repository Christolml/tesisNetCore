import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const urlNet = require('../img/l1/urlNetCore.png');
const descargar = require('../img/l1/descargar.png');
const docs = require('../img/l1/documentacion.png');
const docNet = require('../img/l1/documentacionNetCore.png');
const vStudio = require('../img/l1/visualStudio.png');
const vCode = require('../img/l1/visualCode.png');
const cmdDotnet = require('../img/l1/cmdDotnet.png');
const cmdWhere = require('../img/l1/cmdWhere.png');
const cmdVersion = require('../img/l1/cmdVersion.png');
const cmdHelp = require('../img/l1/cmdHelp.png');
const cmdNew = require('../img/l1/cmdNew.png');
const cmdNewConsole = require('../img/l1/cmdNewConsole.png');
const cmdDir = require('../img/l1/cmdDir.png');
const cmdType = require('../img/l1/cmdType.png');
const cmdRun = require('../img/l1/cmdRun.png');
const cmdCodePunto = require('../img/l1/cmdCodePunto.png');
const openVCode = require('../img/l1/openVCode.png');
const cmdWebApp = require('../img/l1/cmdWebApp.png');
const cmdCodePunto2 = require('../img/l1/cmdCodePunto2.png');
const csproj = require('../img/l1/csproj.png');
const programcs = require('../img/l1/programcs.png');





export class leccion2 extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2><i>Introducción a comandos dotnet y sus plantillas</i></h2>
            <p style={{ textAlign: 'justify' }}>
                Una vez que tengamos descargado e instalado .NET SDK debemos corroborar que esté funcionando en nuestra máquina
                de trabajo y para ello ocupamos abrir una ventana de líneas de comandos y ejecutar una serie de comandos que
                gracias a la instalación del SDK se podrán ejecutar.
                Ejecutando <i>dotnet</i> nos muestra que podemos ejecutar <i>dotnet</i> con ciertas opciones y para ver esas opciones podemos
                ejecutar <i>dotnet –help</i> y nos mostrará esas opciones con que podemos ejecutar <i>dotnet</i>.
            </p>
            <br />
            <img alt='cmdDotnet' src={String(cmdDotnet)} width="400" height="200" />
            <br />
            <br />
            <p>
                El comando <i>where dotnet</i> nos muestra la dirección donde se encuentra instalado <i>dotnet</i> el cual
                viene de la instalación del SDK.
            </p>
            <br />
            <img alt='cmdWhere' src={String(cmdWhere)} width="300" height="50" />
            <p>
                <i>dotnet --version</i> nos muestra la versión de .NET Core SDK que tenemos en uso.
            </p>
            <br />
            <img alt='cmdVersion' src={String(cmdVersion)} width="280" height="50" />
            <br />
            <br />
            <p >
                Para finalizar este repaso rápido sobre los comandos que podemos ejecutar con .NET Core ejecutamos
                <i>dotnet --help</i> y nos muestras las opciones que podemos ejecutar nuestro comando <i>dotnet</i>.
            </p>
            <br />
            <img alt='cmdHelp' src={String(cmdHelp)} width="650" height="800" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Para inicializar un nuevo proyecto tenemos varias opciones de crear un proyecto .NET Core con
                diversas estructuras y lenguajes y para saber cuál nos conviene o cuales tenemos a nuestra disposición
                ejecutamos <i>dotnet new</i> y nos arroja unas opciones que puede ir con el comando anterior y lo que nos
                importa es el apartado de <i>Templates</i> el cual nos dice el nombre de la estructura sobre lo que será
                nuestro programa, nos da un nombre corto y nos muestra los lenguajes de programación soportados por
                esa estructura del proyecto y el lenguaje que se encuentra entre “[]” es para esos lenguajes por default
                del proyecto.
            </p>
            <br />
            <img alt='cmdNew' src={String(cmdNew)} width="650" height="650" />
            <h2><i>1.1 Console App</i></h2>
            <p>
                Crearemos un nuevo proyecto del template console, y para ello creamos una nueva carpeta vacia y abrimos
                nuestra línea de comandos en la dirección de la carpeta y ejecutamos el comando <i>dotnet new console</i>.
            </p>
            <br />
            <img alt='cmdNewConsole' src={String(cmdNewConsole)} width="600" height="150" />
            <br />
            <br />
            <p>
                Una vez que el comando se ejecutó de forma satisfactoria nos muestra el mensaje ”<i>Restore succeeded</i>” el cual
                nos indica que se instalaron las dependencias y librerías que ocupa nuestra aplicación para funcionar, y si
                vemos que tenemos dentro de nuestra carpeta nos podemos encontrar con un archivo con extensión <i>.csproj</i> el
                cual es nuestro proyecto C#.
            </p>
            <br />
            <img alt='cmdDir' src={String(cmdDir)} width="350" height="150" />
            <br />
            <br />
            <p>
                Si ejecutamos <i>type [file]</i> nos muestra lo que hay dentro de un archivo, en <i>myconsoleapp.csproj</i> nos dice que
                esta ocupando el .NET SDK y que es del tipo .exe un ejecutable mientras que en el archivo <i>Program.cs</i> podemos
                notar un código escrito en C# el cual esta ligado a nuestro programa principal y el cual nos imprime un
                <i>“Hello World!”</i>.
            </p>
            <br />
            <img alt='cmdType' src={String(cmdType)} width="400" height="250" />
            <br />
            <br />
            <p>
                Si ejecutamos el comando <i>dotnet run</i> correrá nuestra aplicación y nos muestra nuestro <i>“Hello World!”</i>.
            </p>
            <br />
            <img alt='cmdRun' src={String(cmdRun)} width="250" height="45" />
            <br />
            <br />
            <p>
                Hasta ahora hemos trabajado nuestro proyecto desde la línea de comandos pero ahora nos moveremos dentro
                a nuestro IDE Visual Studio Code y una forma rápida de hacerlo estando en el path de nuestro proyecto
                en la línea de comandos es ejecutando el comando <i>code .</i> y con eso nos abre la carpeta de nuestro proyecto
                en Visual Studio Code. Es recomendable que investigues las funciones que te proporciona el IDE que vayas
                a usar para poder sacar un mayor beneficio a nuestro código que programemos, en este caso Visual Studio
                Code nos ofrece un gran abanico de utilidades que los programadores usamos para testear nuestro código
                y/o mejorarlo.
            </p>
            <br />
            <img alt='cmdCodePunto' src={String(cmdCodePunto)} width="240" height="40" />
            <br />x
            <img alt='openVCode' src={String(openVCode)} width="530" height="380" />
            <h2><i>1.2 Web App</i></h2>
            <p>
                Crearemos un nuevo proyecto del template web, y para ello nos localizamos en nuestra carpeta de trabajo
                y ejecutaremos un comando con el cual nos creara nuestros archivos para nuestra aplicación web y a la
                vez nos creara la carpeta del proyecto, entonces el comando es el siguiente <i>dotnet new web -o mywebapp</i>
                donde <i>-o</i> nos permite generar nuestra carpeta con el nombre de nuestro proyecto el cual es el que viene
                después de <i>-o</i>.
            </p>
            <br />
            <img alt='cmdWebApp' src={String(cmdWebApp)} width="650" height="230" />
            <br />
            <br />
            <p>
                Una vez creado nuestra aplicación nos movemos a la carpeta por medio de la línea de comandos y ejecutamos
                <i>code .</i> el cual como ya hemos visto con anterioridad nos abre nuestro proyecto en el IDE Visual Studio Code.
            </p>
            <br />
            <img alt='cmdCodePunto2' src={String(cmdCodePunto2)} width="280" height="50" />
            <br />
            <br />
            <p>
                En el archivo <i>mywebapp.cspro</i> al principio le estamos indicando a nuestro SDK que el proyecto es del tipo
                <i>web</i>, tenemos un <i>Folder</i> al cual como nombre por default tiene <i>wwwroot</i> y del cual más adelante se especifica
                su función y por ultimo estamos declarando nuestro paquete de referencias y en este caso estamos usando
                todos los paquetes provenientes de <i>Microsoft.AspNetCore</i> en su versión <i>2.0.5</i>.
            </p>
            <br />
            <img alt='csproj' src={String(csproj)} width="500" height="250" />
            <br />
            <br />
            <p>
                Ahora veremos lo que hay dentro del archivo <i>Program.cs</i> y este código es muy peculiar ya que este archivo
                es como donde se mandan a llamar toda la construcción de nuestra aplicación web, en el <i>Main</i> estamos
                llamando el método <i>BuildWebHost</i> el cual recibe como parámetros lo que recibe el <i>Main</i> y una vez que
                llamamos el método le decimos que lo corra con <i>Run(). BuildWebHost</i> lo que hace es crearnos nuestro
                servidor con <i>CreateDefaultBuilder</i> y después está usando el metodo <i>UseStartup</i> el cual especifica el tipo
                de inicio para ser utilizada por el web host y en este caso le estamos pasando la palabra clave (keyword)
                <i>Startup</i> el cual es el nombre de la clase de nuestro otro archivo <i>Startup.cs</i>.
            </p>
            <br />
            <img alt='programcs' src={String(programcs)} width="400" height="350" />
            <br />
            <br />



        </div>;
    }
}
