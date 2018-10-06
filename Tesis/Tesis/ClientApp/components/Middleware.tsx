import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const newProject = require('../img/Avanzado/lMiddleware/newProject.png');
const empty = require('../img/Avanzado/lMiddleware/empty.png');
const html = require('../img/Avanzado/lMiddleware/html.png');
const antesRun = require('../img/Avanzado/lMiddleware/antesRun.png');
const despuesRun = require('../img/Avanzado/lMiddleware/despuesRun.png');
const console = require('../img/Avanzado/lMiddleware/console.png');
const contacts = require('../img/Avanzado/lMiddleware/contacts.png');
const mapWhen = require('../img/Avanzado/lMiddleware/mapWhen.png');
const navegadores = require('../img/Avanzado/lMiddleware/navegadores.png');






export class Middleware extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2>Configuración de Middleware</h2>
            <p style={{ textAlign: 'justify' }}>
                El objetivo de esta lección es tocar el tema del <b>Middleware</b> el cual es software que se sitúa entre un sistema operativo
                y las aplicaciones que se ejecutan en él. Básicamente, funciona como una capa de traducción oculta para permitir la
                comunicación y la administración de datos en aplicaciones distribuidas. El Middleware conecta dos aplicaciones para que
                se puedan pasar fácilmente datos y bases de datos por una “canalización”. El uso de middleware permite a los usuarios
                hacer solicitudes como el envío de formularios en un explorador web o permitir que un servidor web devuelva páginas web
                dinámicas en función del perfil de un usuario. 
                <br />
                <br/>
                Algunos ejemplos comunes de middleware son el middleware de base de datos, el middleware de servidor de aplicaciones, el
                middleware orientado a mensajes, el middleware web y los monitores de procesamiento de transacciones. Cada programa suele
                proporcionar servicios de mensajería para que aplicaciones diferentes puedan comunicarse usando marcos de mensajería como
                el Protocolo simple de acceso a objetos (SOAP), servicios web, transferencia de estado representacional (REST) y notación
                de objetos JavaScript (JSON). 
                <br />
                <br/>
                Cada componente de un middleware puede hacer lo siguiente:
                <ul>
                    <li>Elegir si se pasa la solicitud al siguiente componente de la canalización.</li>
                    <li>Realizar trabajos antes y después de invocar al siguiente componente de la canalización.</li>
                </ul>
                Con un poco de la teoría explicada procedemos a trabajar en nuestro proyecto NET Core, para ello creamos
                una <i>Web Application</i> del tipo <i>Empty</i>.
            </p>
            <img alt='newProject' src={String(newProject)} width="730" height="390" />
            <br />
            <br />
            <img alt='empty' src={String(empty)} width="500" height="300" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En el archivo <i>Startup.cs</i> es donde nos vamos a centrar ya que en este tenemos nuestro método <i>Configure</i> el cual ocupamos
                para establecer y manejar nuestros middlewares. Como se mencionó, ocupamos nuestro método <i>Configure</i> y en este ya contamos
                con un middleware el cual lo que hace es cuando se ejecuta nuestra <i>Web Application</i> nos imprime un <i>Hello World!</i>.
            </p>
            <p><b>Startup.cs</b></p>
            <blockquote>
                <pre>
                    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) <br/>
                    &#123; <br/>
                        &#32;&#32;&#32;&#32;loggerFactory.AddConsole(LogLevel.Information); <br/>
                        &#32;&#32;&#32;&#32;var logger = loggerFactory.CreateLogger("Middleware Demo"); <br/>
                        <br/>
                        &#32;&#32;&#32;&#32;if (env.IsDevelopment()) <br/>
                        &#32;&#32;&#32;&#32;&#123;<br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;app.UseDeveloperExceptionPage();<br/>
                        &#32;&#32;&#32;&#32;}<br/>
                <br/>
                        &#32;&#32;&#32;&#32;app.Run(async (context) =><br/>
                        &#32;&#32;&#32;&#32;&#123;<br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;context.Response.ContentType = "text/html";<br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;await context.Response.WriteAsync("Hello World!");<br/>
                        &#32;&#32;&#32;&#32;});<br/>
                    } 
                </pre>
            </blockquote>
            <br />
            <p style={{ textAlign: 'justify' }}>
                Otro punto que debemos a considerar cuando estemos trabajando con middlewares es el orden en el que los creamos, ya que
                importa y mucho porque define el orden en el que se invocarán los middlewares components en las solicitudes y el orden
                inverso de la respuesta. Por motivos de seguridad, rendimiento y funcionalidad, el orden básico es:
                <ol>
                    <li>Exception/error handling</li>
                    <li>HTTP Strict Transport Security Protocol</li>
                    <li>HTTPS redirection</li>
                    <li>Static file server</li>
                    <li>Cookie policy enforcement</li>
                    <li>Authentication</li>
                    <li>Session</li>
                    <li>MVC</li>
                </ol>
                <br />
                Como nuestro proyecto es sencillo, vamos a demostrar la importancia del orden usando archivos estáticos, para ello en
                nuestra carpeta wwwroot creamos un archivo html sencillo.
            </p>
            <img alt='html' src={String(html)} width="630" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestro método configure le decimos a nuestra app que va a usar archivos estáticos y pondremos el código antes de
                nuestro <i>app.Run()</i> para que lo podamos visualizar en el navegador ya que si el código lo ponemos después por el orden
                de nuestros middlewares ignorara el <i>app.UseStaticFiles()</i>.
                <br/>
                <b>Antes de <i>app.Run()</i></b>
            </p>
            <img alt='antesRun' src={String(antesRun)} width="700" height="280" />
            <br />
            <br />
            <p>
                <b>Después  de <i>app.Run()</i></b>
            </p>
            <img alt='despuesRun' src={String(despuesRun)} width="750" height="280" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora procedemos a agregar un middleware en el que nos va a arrojar información por la consola cuando lo ejecutemos con
                watcher y también nos dirá cuando tiempo demoro en que nuestra solicitud terminara su proceso.
            </p>
            <br />
            <p><b>Startup.cs</b></p>
            <blockquote>
                <pre>
                app.Use(async (context, next) => <br/>
                &#123;<br />
                    &#32;&#32;&#32;&#32;var timer = Stopwatch.StartNew(); <br/>
                    &#32;&#32;&#32;&#32;logger.LogInformation($"==> beginning request in &#123;env.EnvironmentName}"); <br/>
                <br/>
                    &#32;&#32;&#32;&#32;await next(); <br/>
                <br/>
                    &#32;&#32;&#32;&#32;logger.LogInformation($"==> Completed request &#123;timer.ElapsedMilliseconds}ms");<br/>
                });
                </pre>
            </blockquote>
            <br />
            <p style={{ textAlign: 'justify' }}>
                 Algo notorio que vemos implementado en nuestro nuevo middleware es el método <i>next()</i> el cual cuya función realiza es la
               de mandar a llamar a nuestro siguiente middleware para que se ejecute y después pueda regresar y ejecutar la línea de
                código en el cual se imprime el tiempo en que tardo en ejecutarse nuestra petición de nuestro archivo estático ya que
                ese es el siguiente middleware que se ejecutaría. El resultado que nos arroja es todo el proceso que realiza nuestra
                app para poder desplegar nuestro contenido y notamos que participan varios procesos en este.
            </p>
            <img alt='console' src={String(console)} width="495" height="565" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora procedemos a utilizar el método de <i>Map()</i> el cual nos permite establecer una ruta para nuestra <i>web application</i> y
                notamos que al acceder a la ruta nos imprime un pequeño mensaje.
            </p>
            <br />
            <p><b>Startup.cs</b></p>
            <blockquote>
                <pre>
                    app.Map("/contacts", a => a.Run(async context => <br/>
                    &#123;<br />
                        &#32;&#32;&#32;&#32;await context.Response.WriteAsync("Here are your contacts: "); <br/>
                    }));
                </pre>
            </blockquote>
            <br />
            <img alt='contacts' src={String(contacts)} width="400" height="200" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Por último, tenemos un middleware en el cual en lugar de utilizar <i>Map</i> vamos a utilizar <i>MapWhen</i> el cual es más poderoso y
                permite dividir la solicitud del usuario en función del resultado de un predicado especificado que opera con el objeto
                HttpContext actual. En la medida en que HttpContext contiene toda la información sobre la solicitud HTTP, MapWhen le
                permite utilizar condiciones muy específicas para la canalización de solicitudes de ramificación.
                <br/>
                Usamos <i>Map</i> cuando divide la solicitud solo en base a la ruta de solicitud. Utilice <i>MapWhen</i> cuando
                divide una solicitud basada en otros datos de la solicitud HTTP.
                <br/>
                Entonces en nuestro <i>MapWhen</i> estamos averiguando que en nuestra solicitud HTTP estamos qué tipo de “User-Agent” está
                utilizando el <i>Header</i> de nuestro navegador, y en caso de que contenga nuestro Header el “User-Agent” “YaBrowser” ejecutara
                un método el cual nos va a mostrar un mensaje.

            </p>
            <img alt='mapWhen' src={String(mapWhen)} width="600" height="350" />
            <br />
            <br />
            <img alt='navegadores' src={String(navegadores)} width="650" height="220" />
            <br />
            <br />

        </div>;
    }
}
