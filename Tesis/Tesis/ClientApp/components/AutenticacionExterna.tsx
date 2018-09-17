import * as React from 'react';
import { RouteComponentProps } from 'react-router';

const servicioExt = require('../img/Intermedio/l2AutExt/servicioExt.png'); 
const documentacion = require('../img/Intermedio/l2AutExt/documentacion.png'); 
const opcionesExt = require('../img/Intermedio/l2AutExt/opcionesExt.png'); 
const azureAD = require('../img/Intermedio/l2AutExt/azureAD.png'); 
const createApp = require('../img/Intermedio/l2AutExt/createApp.png'); 
const myApps = require('../img/Intermedio/l2AutExt/myApps.png'); 
const datosApp = require('../img/Intermedio/l2AutExt/datosApp.png'); 
const agregarPlataforma = require('../img/Intermedio/l2AutExt/agregarPlataforma.png'); 
const urlApp = require('../img/Intermedio/l2AutExt/urlApp.png'); 
const userSecrets = require('../img/Intermedio/l2AutExt/userSecrets.png');
const loginMicrosoft = require('../img/Intermedio/l2AutExt/loginMicrosoft.png'); 
const escogerCuenta = require('../img/Intermedio/l2AutExt/escogerCuenta.png'); 
const darAcceso = require('../img/Intermedio/l2AutExt/darAcceso.png'); 
const btnRegister = require('../img/Intermedio/l2AutExt/btnRegister.png'); 
const homePage = require('../img/Intermedio/l2AutExt/homePage.png'); 



export class AutenticacionExterna extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2>Habilitando autenticación con proveedores externos</h2>
            <p style={{ textAlign: 'justify' }}>
                En este tema abordaremos las opciones de inicio de sesión en nuestra aplicación utilizando servicios externos y así
                poder evitar el tener que crear una cuenta nueva en esta aplicación, ya que con el inicio de sesión de un servicio
                externo nos registraremos con una cuenta ya existente y lo único que hará nuestra aplicación será la solicitud de
                información de nuestra cuenta con que nos vayamos a registrar.

                Debemos ejecutar nuestra aplicación e irnos al apartado de <i>Log in</i> y en la parte derecha se nos informa sobre usar
                otros servicios para iniciar sesión y se nos proporciona un link con la documentación necesaria.
            </p>
            <img alt='servicioExt' src={String(servicioExt)} width="570" height="220" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                El link <a href="https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/?view=aspnetcore-2.0">https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/?view=aspnetcore-2.0</a> nos brinda la
                documentación sobre la configuración de nuestra autenticación externa a nuestra app.
            </p>
            <img alt='documentacion' src={String(documentacion)} width="650" height="420" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Dentro de la documentación nos encontramos con otras ligas de las cuales se nos explica paso a paso con documentación
                oficial sobre cómo usar autenticación externa proporcionada por Facebook, Twitter, Google, Microsoft y otros proveedores.
                En este caso escogeremos la opción de Microsoft.
            </p>
            <img alt='opcionesExt' src={String(opcionesExt)} width="300" height="150" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Hecho lo anterior ocupamos ir a la url <a href="https://apps.dev.microsoft.com/">https://apps.dev.microsoft.com/</a> el cual nos redirecciona al dominio de Azure Active
                Directory (Azure AD) y este es un servicio de identidad en la nube que permite a los desarrolladores compilar aplicaciones
                que inician la sesión de los usuarios en una cuenta profesional o educativa de Microsoft de forma segura. Ocupamos acceder
                con una cuenta de Microsoft y presionar el botón <i>Add an app</i>.
            </p>
            <img alt='azureAD' src={String(azureAD)} width="780" height="290" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ingresamos un nombre a nuestra aplicación y terminamos la creación de nuestra app presionando el botón <i>Create</i>.
            </p>
            <img alt='createApp' src={String(createApp)} width="350" height="350" />
            <p style={{ textAlign: 'justify' }}>
                Cuando tengamos nuestra app creada nos aparece una lista de nuestras aplicaciones disponibles y ocupamos seleccionar
                la que acabamos de crear para hacer unas pequeñas configuraciones.
            </p>
            <img alt='myApps' src={String(myApps)} width="600" height="150" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Dentro de nuestra app de Azure AD ocupamos 2 datos importantes para poder configurar nuestra <i>web application</i> y permitir
                la autenticación externa de una cuenta de Microsoft con ayuda de Azure AD, los datos que ocupamos son
                <i>Applicatio Id</i>(proporcionada automáticamente y Id único para nuestra app) y <i>Password</i>(ocupamos presionar el botón
                <i>Generate New Password</i>). La web application necesita una forma para mandar nuestra cuenta de Microsoft con Microsoft
                y para eso nos sirve tener nuestro application id y el password, una vez que tengamos los datos ocupamos ponerlos en un
                lugar seguro ya que después los ocuparemos.
            </p>
            <img alt='datosApp' src={String(datosApp)} width="350" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Después en Azure AD en el apartado de plataformas debemos agregar una plataforma web.
            </p>
            <img alt='agregarPlataforma' src={String(agregarPlataforma)} width="440" height="220" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Después de elegir la plataforma debemos agregar nuestra url de desarrollo y le agregamos “<i>/signin-microsoft</i>”,
                con esta nueva ruta estamos manejando nuestra autenticación una vez que se haya completado el proceso.  
            </p>
            <img alt='urlApp' src={String(urlApp)} width="250" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Una vez que iniciemos sesión con nuestra cuenta de Microsoft en nuestra aplicación debemos manejar con seguridad los
                datos que nos proporciona Microsoft sobre el usuario que se registró y para ello en nuestro proyecto debemos modificar
                un archivo json el cual accedemos haciendo clic derecho sobre el proyecto y elegimos <i>Manage User Secrets</i> y el archivo
                que nos abre no será accedido públicamente y cuyo fin es resguardar información de nuestro Application Id y el Password
                el cual podrá hacer uso de nuestra app de Azure AD.
            </p>
            <img alt='userSecrets' src={String(userSecrets)} width="400" height="200" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En nuestro archivo <i>secrets.json</i> agregamos el siguiente objeto el cual tiene la información para identificarnos y
                usar nuestra app hecha en Azure AD.
            </p>
            <p><b>secrets.json</b></p>
            <blockquote>
                <pre>
                    &#123; <br/>
                    &#32;&#32;&#32;&#32;"Authentication:Microsoft:ApplicationId": "45095b0c-d2e3-4f2b-aae3-8994f744aa7d",  <br/>
                    &#32;&#32;&#32;&#32;"Authentication:Microsoft:Password": "tkdjFUAUK30|dhkTH461#[("  <br/>
                    &#125;  <br />
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Lo que continua es decirle a nuestra app que usaremos el método de registro con una cuenta de Microsoft y para ello
                debemos agregar en nuestro archivo <i>Startup.cs</i> en el método de <i>ConfigureServices</i> lo siguiente.
            </p>
            <p><b>Startup.cs</b></p>
            <blockquote>
                <pre>
                    services.AddAuthentication().AddMicrosoftAccount(microsoftOptions => <br />
                    &#123; <br />
                    &#32;&#32;&#32;&#32;microsoftOptions.ClientId = Configuration["Authentication:Microsoft:ApplicationId"]; <br />
                    &#32;&#32;&#32;&#32;microsoftOptions.ClientSecret = Configuration["Authentication:Microsoft:Password"]; <br />
                    &#125;);                                      
                </pre>
            </blockquote>
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Hecho lo anterior ya terminanos la configuración de autenticación externa y procedemos a ejecutar nuestra web application
                y en el apartado de <i>Log in</i> notamos que nos aparece la opción de “Microsoft”.
            </p>
            <img alt='loginMicrosoft' src={String(loginMicrosoft)} width="530" height="230" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Nos redirecciona para que escojamos una cuenta para iniciar sesión.
            </p>
            <img alt='escogerCuenta' src={String(escogerCuenta)} width="700" height="350" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Microsoft nos pregunta sobre si estamos seguro con compartir información de la cuenta de Microsoft con nuestra 
                application web que hemos creado y permitimos el acceso.
            </p>
            <img alt='darAcceso' src={String(darAcceso)} width="380" height="280" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Hecho lo anterior nos redirecciona a nuestra app y podemos notar que se está haciendo un registro con una cuenta
                de Microsoft asociada y se ha traído nuestra dirección de correo proveniente de la cuenta de Microsoft, para finalizar
                el proceso presionamos el botón <i>Register</i>.
            </p>
            <img alt='btnRegister' src={String(btnRegister)} width="530" height="240" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Nos manda a nuestra página de inicio y cómo podemos ver hemos iniciados sesión con una cuenta de Microsoft gracias a
                la facilidad y comodidad de autenticación externa.
            </p>
            <img alt='homePage' src={String(homePage)} width="640" height="170" />
            <br />
            <br />


        </div>;
    }
}
