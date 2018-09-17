import * as React from 'react';
import { RouteComponentProps } from 'react-router';

const codeLine = require('../img/Intermedio/l3Autori/codeLine.png');
const folderData = require('../img/Intermedio/l3Autori/folderData.png');
const editIdentity = require('../img/Intermedio/l3Autori/editIdentity.png'); 
const cmdWatch = require('../img/Intermedio/l3Autori/cmdWatch.png'); 
const appCorriendo = require('../img/Intermedio/l3Autori/appCorriendo.png'); 
const pageAbout = require('../img/Intermedio/l3Autori/pageAbout.png'); 
const login = require('../img/Intermedio/l3Autori/login.png'); 
const accesoDenegado = require('../img/Intermedio/l3Autori/accesoDenegado.png'); 
const aboutHecho = require('../img/Intermedio/l3Autori/aboutHecho.png'); 
const pageRequirements = require('../img/Intermedio/l3Autori/pageRequirements.png'); 
const comentarCanada = require('../img/Intermedio/l3Autori/comentarCanada.png'); 
const pageLayout = require('../img/Intermedio/l3Autori/pageLayout.png'); 
const referenciaLayout = require('../img/Intermedio/l3Autori/referenciaLayout.png'); 
const navbarLink = require('../img/Intermedio/l3Autori/navbarLink.png'); 
const sinUsuario = require('../img/Intermedio/l3Autori/sinUsuario.png'); 
const usuarioAutori = require('../img/Intermedio/l3Autori/usuarioAutori.png'); 



export class Autorizacion extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2>Introducción a la autorización.</h2>
            <p style={{ textAlign: 'justify' }}>
                En este apartado se hablará sobre como conceder a nuestros usuarios registrados en nuestra app ciertos accesos a
                características específicas dentro de nuestra aplicación. Trabajaremos con un proyecto nuevo de .NET Core 2.0 application.
                Nos vamos a nuestro archivo <i>Starup.cs</i> y ahora nuestros usuarios en esta aplicación serán almacenados en la memoria
                y ya no vamos a ocupar el servicio de <i>UseSqlServer</i> por lo que esa línea procedemos a eliminarla.
                El usar <i>options.UseInMemoryDatabase("AuthSample"));</i> estamos declarando que vamos a usar una base de datos en 
                memoria y este tipo de base de datos nos ayuda cuando estamos desarrollando ya que es bueno para hacer pruebas,
                aparte no ocupamos algo externo para que funcione ya que lo almacena en la memoria durante su ejecución.
            </p>
            <img alt='codeLine' src={String(codeLine)} width="650" height="450" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Para poder inicializar nuestra base de datos en <i>Startup.cs</i> en el método <i>Configure</i> agregamos la siguiente línea de código,
                le estamos pasando los parámetros los servicios de la aplicación el cual necesitará nuestro archivo de <i>SampleData</i>.
            </p>
            <p><b>Startup.cs</b></p>
            <blockquote>
                <pre>
                    SampleData.InitializeData(app.ApplicationServices, loggerFactory);
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestra carpeta de <i>Data</i> ocupamos un archivo .cs al que le llamamos <i>SampleData</i> y el cual nos sirve para configurar
                los roles de los usuarios en la base de datos en donde hemos especificado dos roles uno llamado <i>Admin</i> y el otro
                <i> Power Users</i> y también se tiene un usuario por default para realizar pruebas creado con la clase <i>ApplicationUser</i>. 
            </p>
            <img alt='folderData' src={String(folderData)} width="250" height="250" />
            <br />
            <br />
            <p><b>SampleData.cs</b></p>
            <blockquote>
                <pre>
                    using Microsoft.AspNetCore.Hosting; <br />
                    using Microsoft.AspNetCore.Identity; <br />
                    using Microsoft.Extensions.DependencyInjection; <br />
                    using Microsoft.Extensions.Logging; <br />
                    using System; <br />
                    using System.Collections.Generic; <br />
                    using System.Linq; <br />
                    using System.Security.Claims; <br />
                    using System.Threading.Tasks; <br />
                    using IdentityAuthorizationSample.Data; <br />
                    <br />
                    namespace WebApplication.Data <br />
                    &#123; <br />
                        &#32;&#32;&#32;&#32;public class SampleData <br />
                         <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public static async Task InitializeData(IServiceProvider services, ILoggerFactory loggerFactory) <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123; <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;var logger = loggerFactory.CreateLogger("SampleData"); <br />
                                 <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;using (var serviceScope = services.GetRequiredService&#60;IServiceProvider>().CreateScope()) <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123; <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;var env = serviceScope.ServiceProvider.GetService&#60;IHostingEnvironment>(); <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;if (!env.IsDevelopment()) return; <br />
                                <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;var roleManager = serviceScope.ServiceProvider.GetService&#60;RoleManager&#60;IdentityRole>>(); <br />
                                <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;// Create our roles <br/>
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;var adminTask = roleManager.CreateAsync( <br />
                                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;new IdentityRole &#123;Name = "Admin"}); <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;var powerUserTask = roleManager.CreateAsync( <br />
                                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;new IdentityRole &#123;Name = "Power Users"}); <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;Task.WaitAll(adminTask, powerUserTask); <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;logger.LogInformation("==> Added Admin and Power Users roles"); <br />
                                <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;var userManager = serviceScope.ServiceProvider.GetService&#60;UserManager&#60;ApplicationUser>>(); <br />
                                 <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;// Create our default user <br/>
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;var user = new ApplicationUser <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123; <br />
                                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;Email = "chris@test.com", <br />
                                        &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;UserName = "chris@test.com" <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;}; <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;await userManager.CreateAsync(user, "P@ssw0rd"); <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;logger.LogInformation($"==> Create user jeff@test.com with password Passw0rd"); <br />
                                 <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;await userManager.AddToRoleAsync(user, "Admin"); <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;//await userManager.AddClaimAsync(user, new Claim(ClaimTypes.Country, "Canada")); <br/>
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br />
                        &#32;&#32;&#32;&#32;} <br />
                    } <br />
                
                </pre>
            </blockquote>
            <br/>
            <p style={{ textAlign: 'justify' }}>
                Hasta este punto ya podemos correr nuestra app pero antes de eso agregamos una nueva herramienta en nuestro
                proyecto el cual es <i>DotNet.Watcher</i> la cual es útil cuando ejecutamos nuestra app por la línea de comandos
                y mientras nuestra app está corriendo podemos hacer cambios a nuestros archivos .cs y al guardar los cambios 
                <i> Dotnet.Watcher</i> automáticamente recompilara los cambios y los corre sin tener que parar nuestra app y podremos
                visualizar los cambios al instante con nuestra app corriendo. Hacemos clic derecho sobre nuestro proyecto y
                elegimos <i>Edit IdentityAuthorization.Sample.cspro</i>.
            </p>
            <img alt='editIdentity' src={String(editIdentity)} width="500" height="300" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestro archivo que nos abrió en el grupo de etiqueta <i>&#60;DotNetCliToolReference /></i> agregamos la siguiente línea de código.
            </p>
            <p><b>IdentityAuthorization.Sample.cspro</b></p>
            <blockquote>
                <pre>
                    &#60;DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="2.0.2" />
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Procedemos a ejecutar nuestra aplicación desde la línea de comandos, para eso debemos abrir un cmd y ubicarnos en
                la ruta de nuestro proyecto y ejecutar el comando <i>dotnet watch run</i> y cuando esté lista la aplicación nos arroja
                un mensaje informándonos que se encuentra corriendo en <i>localhost:65197</i>,  el puerto en el que este escuchando puede
                variar cuando lo ejecutemos en diversas ocasiones.
            </p>
            <img alt='cmdWatch' src={String(cmdWatch)} width="600" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Nos dirigimos a nuestro navegador y ponemos la dirección de nuestra app corriendo.
            </p>
            <img alt='appCorriendo' src={String(appCorriendo)} width="700" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora comenzaremos a trabajar con las autorizaciones que tienen los usuarios en nuestra app, primero comenzaremos
                con un ejemplo sencillo, en nuestra aplicación tenemos tres secciones <i>“Home”, “About” y “Contact”</i> y cualquier
                usuario registrado o no, puede acceder a esas paginas pero ahora vamos a restringir nuestra pagina de <i>“About”</i> y
                de forma sencilla nos ubicamos en nuestro modelo de la pagina que lo encontramos en nuestra carpeta de <i>Pages</i> y
                nos interesa <i>About.cshtml.cs</i>.
            </p>
            <img alt='pageAbout' src={String(pageAbout)} width="250" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En el archivo que seleccionamos solamente debemos especificar que para obtener acceso se debe tener autorización y
                para ello agregamos <i>[Authorize]</i> después del namespace e importamos <i>using Microsoft.AspNetCore.Authorization;</i>.
            </p>
            <p><b>About.cshtml.cs</b></p>
            <blockquote>
                <pre>
                    using System; <br />
                    using System.Collections.Generic; <br />
                    using System.Linq; <br />
                    using System.Threading.Tasks; <br />
                    using Microsoft.AspNetCore.Mvc.RazorPages; <br />
                    using Microsoft.AspNetCore.Authorization; <br />
                    <br />
                    namespace IdentityAuthorizationSample.Pages <br />
                    &#123; <br />
                        &#32;&#32;&#32;&#32;[Authorize] <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public class AboutModel : PageModel <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123; <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public string Message &#123;get; set; } <br />
                    <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public void OnGet() <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123; <br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;Message = "Your application description page."; <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br />
                    }
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Guardamos los cambios y ahora sin haber hecho un login en nuestra app no podemos acceder a la sección <i>“About”</i> de
                nuestra app y nos redirecciona a la página para iniciar sesión y una vez que iniciemos sesión nos redirecciona al
                apartado de about.
            </p>
            <img alt='login' src={String(login)} width="700" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora vamos a restringir aun más nuestra página de <i>About</i> y queremos que solamente usuarios con el rol de Admin
                puedan acceder a ella, y para ello en nuestro modelo de About le damos la propiedad a nuestro [Authorize] y le
                decimos que solamente a usuarios con el rol de Admin, esto es posible por los roles que creamos en <i>SampleData.cs</i>.
            </p>
            <p><b>About.cshtml.cs</b></p>
            <blockquote>
                <pre>
                    [Authorize(Roles ="Admin")]
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                El usuario del tipo default que estamos usando para hacer pruebas no es del tipo Admin por tanto nos va a arrojar un
                mensaje informándonos que no tenemos acceso.
            </p>
            <img alt='accesoDenegado' src={String(accesoDenegado)} width="600" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Para darle acceso a nuestro usuario debemos darle el rol de Admin y es muy fácil, basta ir a <i>SampleData.cs</i> y
                debajo de donde creamos nuestro usuario por default agregamos la línea de código
                <code>await userManager.AddToRoleAsync(user, "Admin");</code> donde user es nuestro usuario default y le estamos dando el
                rol de Admin, ahora en nuestra aplicación cerramos sesión y volvemos a iniciar sesión y ya tendremos acceso
                a la página de About con nuestro usuario default con el rol de Admin.
            </p>
            <img alt='aboutHecho' src={String(aboutHecho)} width="600" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Seguimos modificando la autorización a nuestra página de <i>About</i> y ahora simularemos un escenario donde para acceder
                a la página se tiene que ser del país Canadá y este escenario es debido a que en ciertos países son muy
                restringidos con el acceso a internet y se cuentan con servidores especiales para ese tipo de casos. En nuestro archivo <i>Startup.cs </i>
                en el método de <i>ConfigureServices</i> agregamos el siguiente código.
            </p>
            <p><b>Startup.cs</b></p>
            <blockquote>
                <pre>
                    services.AddAuthorization(configure => <br/>
                    &#123;<br />
                        &#32;&#32;&#32;&#32;configure.AddPolicy("CanadiansOnly", policy => policy.RequireClaim(ClaimTypes.Country, "Canada"));  <br/>
                    });  <br />
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestro modelo de <i>About</i> reemplazamos <i>Roles</i> por <i>Policy</i> y especificamos la nueva que hemos creado en <i>ConfigureServices</i>.
            </p>
            <p><b>About.cshtml.cs</b></p>
            <blockquote>
                <pre>
                    [Authorize(Policy = "CanadiansOnly")]
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Guardamos los cambios y volvemos a nuestro navegador y no tendremos acceso a la página de About porque nuestro
                usuario no es de Canadá.
            </p>
            <img alt='accesoDenegado' src={String(accesoDenegado)} width="600" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Para que nuestro usuario tenga acceso debemos irnos a nuestro archivo <i>SampleData.cs</i> y debajo donde especificamos
                el rol de nuestro usuario por default agregamos el código
                <code>await userManager.AddClaimAsync(user, new Claim(ClaimTypes.Country, "Canada"));</code>
                y con eso nuestro usuario estará haciendo peticiones como si fuera del país de Canadá, guardamos los cambios
                después cerramos sesión y volvemos a iniciar sesión y podremos ver que ahora nuestro usuario ya tiene acceso.
            </p>
            <img alt='aboutHecho' src={String(aboutHecho)} width="600" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Hasta ahora hemos restringido nuestro acceso a la página <i>About</i> en dos posibles escenarios, el primero es siendo
                un usuario Admin y el segundo es haciendo peticiones de país de origen Canadá, pero ahora juntaremos los dos
                escenarios para que siendo cual sea de los dos pueda acceder a la página de <i>About</i>, para esto necesitaremos un
                archivo en el cual nos maneje nuestras peticiones. En nuestra carpeta de <i>Pages</i> creamos otra carpeta con nombre
                <i> Requirements</i> y agregamos una clase con el nombre <i>CanadianRequirement.cs</i> y dentro de este archivo tenemos un código
                en el cual nos maneja nuestras peticiones dependiendo si el usuario que le paso como parámetro tiene un rol o si
                tiene una petición de cierto tipo.
            </p>
            <img alt='pageRequirements' src={String(pageRequirements)} width="240" height="250" />
            <br />
            <br />
            <p><b>CanadianRequirement.cs</b></p>
            <blockquote>
                <pre>
                    using Microsoft.AspNetCore.Authorization; <br/>
                    using System; <br />
                    using System.Collections.Generic; <br />
                    using System.Linq; <br />
                    using System.Security.Claims; <br />
                    using System.Threading.Tasks; <br />
                    <br />
                    namespace WebApplication <br />
                    &#123;<br />
                        &#32;&#32;&#32;&#32;internal class CanadianRequirement : AuthorizationHandler&#60;CanadianRequirement>, IAuthorizationRequirement <br/>
                        &#32;&#32;&#32;&#32;&#123;<br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public CanadianRequirement() <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123; <br/>
                            <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br />
                        <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, CanadianRequirement requirement) <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123;<br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;if (context.User.IsInRole("Admin")) <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123; <br/>
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;context.Succeed(requirement); <br/>
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br/>
                        <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;if (context.User.HasClaim(claim => claim.ValueType == ClaimTypes.Country && claim.Value == "Canada")) <br/>
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123;<br />
                                    &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;context.Succeed(requirement); <br/>
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br/>
                        <br />
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;return Task.CompletedTask; <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br/>
                        &#32;&#32;&#32;&#32;} <br />
                    } <br/>
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestro archivo de <i>Startup.cs</i> donde habíamos agregado el policy para <i>CanadiansOnly</i> ahora agregamos el
                policy para <i>CanadianOrAdmin</i> haciendo referencia a nuestro archivo de <i>CanadianRequirement.cs</i> donde se manejará
                nuestra petición de acuerdo al usuario y sus características.
            </p>
            <p><b>Startup.cs</b></p>
            <blockquote>
                <pre>
                    configure.AddPolicy("CanadianOrAdmin", policy => policy.AddRequirements(new CanadianRequirement()));
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestro modelo de <i>About</i> cambiamos el policy por el nuevo.
            </p>
            <p><b>About.cshtml.cs</b></p>
            <blockquote>
                <pre>
                    [Authorize(Policy = "CanadianOrAdmin")]
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Y al final podemos comentar nuestro código de <i>SampleData.cs</i> donde se le especificaba que nuestro usuario haría
                peticiones con país de origen Canada.
            </p>
            <img alt='comentarCanada' src={String(comentarCanada)} width="450" height="150" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Guardamos los cambios y en nuestra aplicación ya podemos acceder a la página de <i>About</i> siendo el rol de Admin o
                haciendo una petición como si fuera de Canadá.
            </p>
            <img alt='aboutHecho' src={String(aboutHecho)} width="600" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Para terminar este apartado modificaremos nuestra app para que el acceso de nuestra página de <i>About</i> se encuentre
                oculto si es que no tenemos acceso a ella, hay que recordar que ahora tendremos acceso a ella teniendo un usuario
                del rol Admin o haciendo petición de Canadá.
                Accedemos a nuestra carpeta <i>Pages</i> y seleccionamos el archivo <i>_Layout.cshtml</i>.
            </p>
            <img alt='pageLayout' src={String(pageLayout)} width="250" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestro archivo <i>_Layout.cshtml</i> al principio agregamos la referencia a <i>IAuthorizationService</i> la cual ocupamos para saber la
                autorización que tiene el usuario y después mostrar ciertos links dependiendo el acceso.
            </p>
            <img alt='referenciaLayout' src={String(referenciaLayout)} width="400" height="200" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En la parte inferior del archivo donde se encuentra ubicada la sección del <i>navbar</i> con las secciones de nuestra app,
                podemos poner un simple <i>if</i> el cual nos permite saber si la autorización de nuestro usuario está aprobada y en caso
                de estarlo nos mostrará el link de la página <i>About</i> en caso contrario permanecerá oculta.
            </p>
            <img alt='navbarLink' src={String(navbarLink)} width="450" height="180" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Página sin usuario y sin autorización.
            </p>
            <img alt='sinUsuario' src={String(sinUsuario)} width="750" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Pagina con usuario con autorización.
            </p>
            <img alt='usuarioAutori' src={String(usuarioAutori)} width="750" height="400" />
            <br />
            <br />

        </div>;
    }
}
