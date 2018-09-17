import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const cmdDotnet = require('../img/l2/cmdDotnet.png');
const cmdWhere = require('../img/l2/cmdWhere.png');
const cmdVersion = require('../img/l2/cmdVersion.png');
const cmdHelp = require('../img/l2/cmdHelp.png');
const cmdNew = require('../img/l2/cmdNew.png');
const cmdNewConsole = require('../img/l2/cmdNewConsole.png');
const cmdDir = require('../img/l2/cmdDir.png');
const cmdType = require('../img/l2/cmdType.png');
const cmdRun = require('../img/l2/cmdRun.png');
const cmdCodePunto = require('../img/l2/cmdCodePunto.png');
const openVCode = require('../img/l2/openVCode.png');
const cmdWebApp = require('../img/l2/cmdWebApp.png');
const cmdCodePunto2 = require('../img/l2/cmdCodePunto2.png');
const csproj = require('../img/l2/csproj.png');
const programcs = require('../img/l2/programcs.png');
const startup = require('../img/l2/startup.png');
const addServices = require('../img/l2/addServices.png');
const dotnetRun = require('../img/l2/dotnetRun.png');
const mvc = require('../img/l2/mvc.png');
const pages = require('../img/l2/pages.png');
const rutas = require('../img/l2/rutas.png');
const arrobaPage = require('../img/l2/arrobaPage.png');
const mostrarError = require('../img/l2/mostrarError.png');
const errorTecnico = require('../img/l2/errorTecnico.png');
const errorTecnicoNavegador = require('../img/l2/errorTecnicoNavegador.png');
const arreglarError = require('../img/l2/arreglarError.png');





export class ComandosDotNet extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2>Introducción a comandos dotnet y sus plantillas</h2>
            <p style={{ textAlign: 'justify' }}>
                Una vez que tengamos descargado e instalado .NET SDK debemos corroborar que esté funcionando en nuestra máquina
                de trabajo y para ello ocupamos abrir una ventana de líneas de comandos y ejecutar una serie de comandos que
                gracias a la instalación del SDK se podrán ejecutar.
                Ejecutando <i>dotnet</i> nos muestra que podemos ejecutar <i>dotnet</i> con ciertas opciones y para ver esas opciones podemos
                ejecutar <i>dotnet –help</i> y nos mostrará esas opciones con que podemos ejecutar <i>dotnet</i>.
            </p>
            <img alt='cmdDotnet' src={String(cmdDotnet)} width="450" height="240" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                El comando <i>where dotnet</i> nos muestra la dirección donde se encuentra instalado <i>dotnet</i> el cual
                viene de la instalación del SDK.
            </p>
            <img alt='cmdWhere' src={String(cmdWhere)} width="300" height="50" />
            <br />
            <br/>
            <p style={{ textAlign: 'justify' }}>
                <i>dotnet --version</i> nos muestra la versión de .NET Core SDK que tenemos en uso.
            </p>
            <img alt='cmdVersion' src={String(cmdVersion)} width="280" height="50" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Para finalizar este repaso rápido sobre los comandos que podemos ejecutar con .NET Core ejecutamos <i>dotnet --help</i> y nos muestras las opciones que podemos ejecutar nuestro comando <i>dotnet</i>.
            </p>
            <img alt='cmdHelp' src={String(cmdHelp)} width="650" height="800" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Para inicializar un nuevo proyecto tenemos varias opciones de crear un proyecto .NET Core con
                diversas estructuras y lenguajes y para saber cuál nos conviene o cuales tenemos a nuestra disposición
                ejecutamos <i> dotnet new</i> y nos arroja unas opciones que puede ir con el comando anterior y lo que nos
                importa es el apartado de <i>Templates</i> el cual nos dice el nombre de la estructura sobre lo que será
                nuestro programa, nos da un nombre corto y nos muestra los lenguajes de programación soportados por
                esa estructura del proyecto y el lenguaje que se encuentra entre “[]” es para esos lenguajes por default
                del proyecto.
            </p>
            <img alt='cmdNew' src={String(cmdNew)} width="650" height="650" />
            <h2>Console App</h2>
            <p style={{ textAlign: 'justify' }}>
                Crearemos un nuevo proyecto del template console, y para ello creamos una nueva carpeta vacia y abrimos
                nuestra línea de comandos en la dirección de la carpeta y ejecutamos el comando <i>dotnet new console</i>.
            </p>
            <img alt='cmdNewConsole' src={String(cmdNewConsole)} width="600" height="150" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Una vez que el comando se ejecutó de forma satisfactoria nos muestra el mensaje ”<i>Restore succeeded</i>” el cual
                nos indica que se instalaron las dependencias y librerías que ocupa nuestra aplicación para funcionar, y si
                vemos que tenemos dentro de nuestra carpeta nos podemos encontrar con un archivo con extensión <i>.csproj</i> el
                cual es nuestro proyecto C#.
            </p>
            <img alt='cmdDir' src={String(cmdDir)} width="350" height="150" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Si ejecutamos <i>type [file]</i> nos muestra lo que hay dentro de un archivo, en <i>myconsoleapp.csproj</i> nos dice que
                esta ocupando el .NET SDK y que es del tipo .exe un ejecutable mientras que en el archivo <i>Program.cs</i> podemos
                notar un código escrito en C# el cual esta ligado a nuestro programa principal y el cual nos imprime un <i>“Hello World!”</i>.
            </p>
            <img alt='cmdType' src={String(cmdType)} width="540" height="370" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Si ejecutamos el comando <i>dotnet run</i> correrá nuestra aplicación y nos muestra nuestro <i>“Hello World!”</i>.
            </p>
            <img alt='cmdRun' src={String(cmdRun)} width="350" height="45" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Hasta ahora hemos trabajado nuestro proyecto desde la línea de comandos pero ahora nos moveremos dentro
                a nuestro IDE Visual Studio Code y una forma rápida de hacerlo estando en el path de nuestro proyecto
                en la línea de comandos es ejecutando el comando <i>code .</i> y con eso nos abre la carpeta de nuestro proyecto
                en Visual Studio Code. Es recomendable que investigues las funciones que te proporciona el IDE que vayas
                a usar para poder sacar un mayor beneficio a nuestro código que vamos a programar, en este caso Visual Studio
                Code nos ofrece un gran abanico de utilidades que los programadores usamos para testear nuestro código
                y/o mejorarlo.
            </p>
            <img alt='cmdCodePunto' src={String(cmdCodePunto)} width="240" height="40" />
            <br />x
            <img alt='openVCode' src={String(openVCode)} width="530" height="380" />
            <h2>Web App</h2>
            <p style={{ textAlign: 'justify' }}>
                Ahora vamos a crear un nuevo proyecto del template web, y para ello nos localizamos en nuestra carpeta de trabajo
                y ejecutaremos un comando con el cual nos crea nuestros archivos para nuestra aplicación web y a la
                vez nos crea nuestra carpeta del proyecto, entonces el comando es el siguiente <i>dotnet new web -o mywebapp</i> donde 
                <i> -o</i> nos permite generar nuestra carpeta con el nombre de nuestro proyecto el cual es el que viene
                después de <i>-o</i>.
            </p>
            <img alt='cmdWebApp' src={String(cmdWebApp)} width="650" height="230" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Una vez creada nuestra aplicación nos movemos a la carpeta por medio de la línea de comandos y ejecutamos
                <i> code .</i> el cual como ya hemos visto con anterioridad nos abre nuestro proyecto en el IDE Visual Studio Code.
            </p>
            <img alt='cmdCodePunto2' src={String(cmdCodePunto2)} width="280" height="50" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En el archivo <i>mywebapp.cspro</i> al principio le estamos indicando a nuestro SDK que el proyecto es del tipo
                <i> web</i>, tenemos un <i>Folder</i> al cual como nombre por default tiene <i>wwwroot</i> y por ultimo estamos declarando nuestro paquete de referencias y en este caso estamos usando
                todos los paquetes provenientes de <i>Microsoft.AspNetCore</i> en su versión <i>2.0.5</i>.
            </p>
            <img alt='csproj' src={String(csproj)} width="550" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora veremos lo que hay dentro del archivo <i>Program.cs</i> y este código es muy peculiar ya que este archivo
                es como donde se mandan a llamar toda la construcción de nuestra aplicación web, en el <i>Main</i> estamos
                llamando el método <i>BuildWebHost</i> el cual recibe como parámetros lo que recibe el <i>Main</i> y una vez que
                llamamos el método le decimos que lo corra con <i>Run().</i> BuildWebHost lo que hace es crearnos nuestro
                servidor con <i>CreateDefaultBuilder</i> y después está usando el metodo <i>UseStartup</i> el cual especifica el tipo
                de inicio para ser utilizada por el web host y en este caso le estamos pasando la palabra clave (keyword)
                <i> Startup</i> el cual es el nombre de la clase de nuestro otro archivo <i>Startup.cs</i>.
            </p>
            <img alt='programcs' src={String(programcs)} width="400" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En el archivo <i>Startup.cs</i> tenemos nuestra clase llamada <i>Startup</i> y ya hemos visto que es importante ya que
                es la fuente de conexión con nuestro <i>Program.cs</i>, dentro de la clase <i>Startup</i> tenemos dos metodos uno llamado
                <i> ConfigureServices</i> el cual es llamado en tiempo de ejecución y se debe usar este método para agregar servicios
                de terceros a nuestra aplicación y el otro metodo que tenemos en nuestra clase es <i>Configure</i> este es llamado
                en tiempo de ejecucióny se utiliza para configurar la canalización de solicitudes HTTP, en pocas palabras la
                diferencia entre estos dos es que con el Services es para agregar funcionalidades antes de desplegar nuestra
                aplicación y con el Configure ya es durante en tiempo de ejecución. Al principio de <i>Configure</i> tenemos un <i>if </i>
                con el cual nos permite saber si tenemos una excepción (un error), en caso de haberlo nos corre una pagina de error.
                Al final tenemos nuestro código con el cual cuando esta corriendo la aplicación se esta enviando un <i>Hello World!</i> a
                nuestra página web gracias a <i>Response</i>.
            </p>
            <img alt='startup' src={String(startup)} width="650" height="650" />
            <br />
            <br/>
            <p style={{ textAlign: 'justify' }}><b>Ejemplo de servicios disponibles</b></p>
            <img alt='addServices' src={String(addServices)} width="300" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Corremos nuestro proyecto con <i>dotnet run</i>.
            </p>
            <img alt='dotnetRun' src={String(dotnetRun)} width="365" height="285" />
            <br />
            <br />
            <h2>MVC service</h2>
            <p style={{ textAlign: 'justify' }}>
                Hasta ahora hemos trabajado con lo que nos crea nuestro <i>SDK NET Core</i> de forma default pero
                ahora le agregaremos el servicio de <i>mvc (model-view-controller)</i> el cual es un patrón de arquitectura
                de software, que separa los datos y la lógica de negocio de una aplicación de su representación y el
                módulo encargado de gestionar los eventos y las comunicaciones.
                <br />
                Para agregar este servicio ocupamos hacerlo en el archivo <i>Startup.cs</i> en el método <i>ConfigureServices </i>
                y una vez declarado ocupamos irnos a nuestro método <i>Configure</i> y decirle que lo vamos a usar y en
                este caso como ya estamos usando <i>mvc</i> ya podemos eliminar el código de <i>app.Run</i> siempre y cuando ya
                tengamos definidas páginas con las cuales pueda trabajar nuestro
                <i> app.UseMvc();</i> ya que si no agregamos páginas y borramos el código de <i>app.Run();</i> nos va generar un
                error y si dejamos el código tal como está la imagen de abajo pero sin agregar paginas el código
                se ejecutara de forma síncrono.
            </p>
            <img alt='mvc' src={String(mvc)} width="530" height="280" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Para empezar a trabajar con <i>mvc</i> creamos nuestra carpeta pages el cual contendrá nuestras páginas que vayamos
                creando y se van a visualizar gracias al servicio de <i>mvc</i> ya que este toma por default algunos archivos y rutas,
                el archivo por default que visualizara estando en la ruta raíz de nuestra página web será el archivo
                <i> index.cshtml</i> y algo notorio es que estamos trabajando con <i>razor</i> page el cual se hablará más a detalle.

            </p>
            <br />
            <img alt='pages' src={String(pages)} width="550" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                La estructura que tenemos en nuestra carpeta <i>pages</i> ya dependerá como queremos que sean nuestras rutas,
                pero hay que tener en cuenta que la ruta por default de nuestra aplicación estará asociada con nuestro
                archivo <i>index.cshtml</i> el cual deberá estar dentro de la carpeta <i>pages</i> y no en ninguna otra. En nuestra
                carpeta <i>pages</i> tenemos una carpeta de <i>Lenguajes</i> y dentro de este nuestro archivo <i>csharp.cshtml</i> el cual
                será nuestra página con la ruta <i>/lenguajes/csharp</i>.
            </p>
            <img alt='rutas' src={String(rutas)} width="650" height="150" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Nuestro código de las páginas es muy simple ya que es una de las comodidades que nos ofrece <i>razor page</i>,
                hay que tener cuidado ya que debemos al principio declarar la directiva de la página escribiendo <i>@page</i> porque si no se hace nuestra página no funcionara.
            </p>
            <br />
            <img alt='arrobaPage' src={String(arrobaPage)} width="900" height="170" />
            <h2>Mostrando un error</h2>
            <p style={{ textAlign: 'justify' }}>
                Hasta ahora con el código que tenemos vamos a generar un error en nuestro código para que se nos muestre la
                página de error que viene por default en nuestro archivo <i>Startup.cs</i>. En nuestro archivo de la página de
                <i> csharp.cshtml</i> en donde antes teníamos nuestro código de mostrar la fecha y hora, escribimos una sintaxis
                para que pudiese mostrar un 4 resultado de una operación aritmética pero la estructura se encuentra incorrecta por tanto a la hora
                de cargar nuestra página en el navegador nos  genera un error y la pagina no se puede cargar adecuadamente.
            </p>
            <br />
            <p><b>csharp.cshtml</b></p>
            <blockquote>
                <pre>
                        @page <br />
                        &lt;h1>&lt;b>C#&lt;/b>&lt;/h1> <br />
                        &lt;p>Esta pagina es en /lenguajes&lt;/p> <br />
                        &lt;b>El horarios es: @&#123;2 + 2} &lt;/b> <br />
                </pre>
            </blockquote>

            <br />
            <img alt='mostrarError' src={String(mostrarError)} width="450" height="300" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora vamos a abordar el tema sobre mostrar de una manera más detallada los errores que pudiesen ocurrir,
                no es necesario aplicar este paso en la vida real ya que el código que se mostrara será más técnico y está
                pensado para los desarrolladores, lo que vamos a hacer será comentar una línea con la cual nos vamos a asegurar
                que vamos a estar usando el modo de desarrollo en lugar del modo de producción.
            </p>
            <img alt='errorTecnico' src={String(errorTecnico)} width="270" height="140" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora volvemos a cargar nuestra página y obtenemos un error más detallado el cual nos indica que ha ocurrido
                un error en nuestra sintaxis.
            </p>
            <img alt='errorTecnicoNavegador' src={String(errorTecnicoNavegador)} width="400" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Arreglamos nuestro código y volvemos a cargar la página.
            </p>
            <img alt='arreglarError' src={String(arreglarError)} width="700" height="200" />
            <br />
            <br/>


        </div>;
    }
}
