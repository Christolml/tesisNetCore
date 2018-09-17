import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const nuevoProyecto = require('../img/Intermedio/l1Aut/nuevoProyecto.png');
const changeAuth = require('../img/Intermedio/l1Aut/changeAuth.png'); 
const individualUser = require('../img/Intermedio/l1Aut/individualUser.png');
const ejecutarApp = require('../img/Intermedio/l1Aut/ejecutarApp.png'); 
const appCorriendo = require('../img/Intermedio/l1Aut/appCorriendo.png'); 
const register = require('../img/Intermedio/l1Aut/register.png'); 
const establecerBD = require('../img/Intermedio/l1Aut/establecerBD.png'); 
const logueado = require('../img/Intermedio/l1Aut/logueado.png'); 
const configuracionCuenta = require('../img/Intermedio/l1Aut/configuracionCuenta.png'); 
const documentation = require('../img/Intermedio/l1Aut/documentation.png'); 
const documentationPage = require('../img/Intermedio/l1Aut/documentationPage.png');
const qrcode = require('../img/Intermedio/l1Aut/qrcode.png'); 
const pegar = require('../img/Intermedio/l1Aut/pegar.png'); 
const enableAuthenticator = require('../img/Intermedio/l1Aut/enableAuthenticator.png'); 
const llamandoQrcode = require('../img/Intermedio/l1Aut/llamandoQrcode.png'); 
const generadoQrcode = require('../img/Intermedio/l1Aut/generadoQrcode.png'); 
const codigosVer = require('../img/Intermedio/l1Aut/codigosVer.png'); 
const login = require('../img/Intermedio/l1Aut/login.png'); 
const dobleVer = require('../img/Intermedio/l1Aut/dobleVer.png'); 
const loginHecho = require('../img/Intermedio/l1Aut/loginHecho.png'); 






export class Autenticacion extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2>Autenticación y autorización</h2>
            <p style={{ textAlign: 'justify' }}>
                En esta sección se abordará como es que podemos implementar la autenticación y autorización de usuarios en
                nuestras aplicaciones. Empezamos creando un proyecto del tipo ASP.NET Core Web Application.
            </p>
            <img alt='nuevoProyecto' src={String(nuevoProyecto)} width="730" height="390" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En el apartado de configuración de nuestra web application debemos cambiar la autenticación presionando en
                el botón <i>Change Authentication</i>.
            </p>
            <img alt='changeAuth' src={String(changeAuth)} width="630" height="350" />
            <p style={{ textAlign: 'justify' }}>
                Podemos elegir entre 4 opciones de autenticación, <i>No Authentication</i> hace que la aplicación sea completamente
                anónima que cualquiera pueda acceder a la app, <i>Work or School Accounts</i> para aplicaciones que autentican
                usuarios con Active Directory, Microsoft Azure Active Directory u Office 365, <i>Windows Authentication</i> para
                aplicaciones de intranet y por mencionar al último tenemos “Individual User Accounts” el cual es el estándar
                con el que los usuarios se registran en aplicaciones y este método consiste en proporcionar un correo electrónico
                cual sea y proporcionar una contraseña y en esta ocasión vamos a seleccionar esta autenticación y seleccionamos
                que almacene las cuentas en la app y lo hace usando una base de datos local.
            </p>
            <img alt='individualUser' src={String(individualUser)} width="620" height="280" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Una cosa a destacar una vez que ya tenemos nuestro proyecto cargado es que la autenticación está establecida
                usando un middleware y se encuentra la configuración tanto en el método de <i>Configure Services</i> y <i>Configure</i>.
                Procedemos a ejecutar nuestra app.
            </p>
            <img alt='ejecutarApp' src={String(ejecutarApp)} width="600" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                La siguiente imagen muestra nuestro proyecto ejecutándose y crearemos un nuevo usuario presionando en el botón <i>Register</i>.
            </p>
            <img alt='appCorriendo' src={String(appCorriendo)} width="950" height="650" />
            <p style={{ textAlign: 'justify' }}>
                Como estamos usando la autenticación estándar nos pide un correo (el que sea) y una contraseña y la gran ventaja
                es que NET.Core nos brinda requerimientos default en nuestra contraseña los cuales pueden ser modificados.
            </p>
            <img alt='register' src={String(register)} width="400" height="300" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Cuando le demos clic al botón de <i>Register</i> una vez que ya tenemos los datos de nuestra cuenta nos aparece la siguiente
                imagen cuando corremos por primera vez nuestra aplicación y eso debido a que nuestra app ocupa almacenar nuestros
                datos en algún lugar y aun no se han creado las tablas en nuestra base de datos donde se pueda guardar la información
                de nuestros usuarios y con esta pantalla nos facilita la creación de esas tablas en nuestro SQL express local y una
                vez que el proceso haya terminado hay que refrescar la página.
            </p>
            <img alt='establecerBD' src={String(establecerBD)} width="750" height="320" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Una vez que la página se haya refrescado la página podemos notar que estamos en el inicio de nuestra app y que nuestra cuenta ya se
                encuentra logueada, le damos clic a nuestro usuario para configurar algunas cosas.
            </p>
            <img alt='logueado' src={String(logueado)} width="850" height="380" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Tenemos tres apartados que podemos configurar: el perfil, la contraseña y la doble verificación. Nos centraremos en
                la doble verificación ya que nos permite más seguridad a las cuentas de los usuarios y por que con este método aparte
                de necesitar la contraseña para iniciar sesión necesitamos un dispositivo con el cual hará la función de confirmar
                el inicio de sesión del propietario de la cuenta, le damos clic al botón <i>Add authenticator app</i>.
            </p>
            <img alt='configuracionCuenta' src={String(configuracionCuenta)} width="650" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                La página nos muestra los pasos que debemos realizar para habilitar la doble verificación, lo primordial es introducir
                la key que nos ofrece (la cual es única) en una app de doble autenticador una de ellas es <i>Google Authenticator</i> en donde
                introducimos la key y nos genera nuestro código de acceso, en la app de <i>Google Authenticator</i> en lugar de escribir toda
                la key podemos escanear un código QR en la cual ya viene nuestra información y para generar nuestro QR debemos dar clic
                en <i>documentation</i> el cual nos redirecciona a la documentación sobre generar nuestro código QR de manera muy fácil.
            </p>
            <img alt='documentationPage' src={String(documentationPage)} width="720" height="440" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Para la generación de nuestro código QR ocupamos una librería de javascript la cual es <i>qrcode-js</i> para ello nos vamos a la url
                <a href="https://davidshimjs.github.io/qrcodejs/"> https://davidshimjs.github.io/qrcodejs/</a> (proporcionada por la documentación) y descargamos el .zip y lo descomprimimos.
            </p>
            <img alt='qrcode' src={String(qrcode)} width="430" height="360" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Los archivos que tiene el folder descargado ocupamos copiarlos y pegarlos en una nueva carpeta llamada <i>qrcode-js</i> localizada
                en nuestro proyecto en <i>wwwroot/lib</i>.
            </p>
            <img alt='pegar' src={String(pegar)} width="470" height="250" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Cuando ya tenemos nuestra librería configurada ocupamos ir al archivo <i>EnableAuthenticator.cshtml</i> el cual está en la 
                ruta de <i>Pages/Account/Manage</i>.
            </p>
            <img alt='enableAuthenticator' src={String(enableAuthenticator)} width="250" height="200" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                En el archivo ocupamos actualizar la sección de <i>Scripts</i> con un código proporcionado por la documentación con el fin de
                hacer referencia a nuestra nueva librería de <i>qrcode-js</i> y poderlo llamar para generar nuestro código QR. 
            </p>
            <p><b>EnableAuthenticator.cshtml</b></p>
            <blockquote>
                <pre>
                    &#64;section Scripts &#123; <br />
                        &#32;&#32;&#32;&#32;&#64;await Html.PartialAsync("_ValidationScriptsPartial") <br />
                        &#32;&#32;&#32;&#32;&#60;script type="text/javascript" src="~/lib/qrcode-js/qrcode.js">&#60;/script> <br />
                        &#32;&#32;&#32;&#32;&#60;script type="text/javascript"> <br />
                        &#32;&#32;&#32;&#32;new QRCode(document.getElementById("qrCode"), <br />
                        &#32;&#32;&#32;&#32;&#123; <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;text: "&#64;Html.Raw(Model.AuthenticatorUri)", <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;width: 150, <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;height: 150 <br />
                        &#32;&#32;&#32;&#32;&#125;); <br />
                        &#32;&#32;&#32;&#32;&#60;/script> <br />
                    &#125; <br />
                </pre>
            </blockquote>
            <br />
            <p style={{ textAlign: 'justify' }}>
                Hecho lo anterior podemos ejecutar nuestra aplicación e ir nuevamente a nuestro apartado de doble verificación y ya
                nos mostrará nuestro código QR con el cual lo escaneamos en la app de <i>Google Authenticator</i> y nos generara nuestros 
                códigos de verificación sin la necesidad de escribir toda la key, cuando tengamos nuestro código de verificación lo
                colocamos en el paso tres y damos clic en el botón <i>Verify</i>.
            </p>
            <img alt='generadoQrcode' src={String(generadoQrcode)} width="660" height="460" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Nos aparecerá 10 códigos de recuperación en caso de que se nos haya perdido el celular, no tengamos acceso a internet,
                etc. Y con estos códigos de recuperación, que solo se pueden usar una vez, podemos aplicarlos como nuestro código de
                segunda verificación, es importante recalcar que los códigos debemos guardarlos en un lugar seguro.
            </p>
            <img alt='codigosVer' src={String(codigosVer)} width="460" height="270" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Procedemos a salirnos de nuestra cuenta y a iniciar sesión nuevamente para que se aplica la doble verificación.
            </p>
            <img alt='login' src={String(login)} width="325" height="245" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Insertamos el código de verificación de la app <i>Google Authenticator</i>.
            </p>
            <img alt='dobleVer' src={String(dobleVer)} width="400" height="200" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Y nos redirecciona a la página de inicio con nuestra sesión iniciada.
            </p>
            <img alt='loginHecho' src={String(loginHecho)} width="750" height="430" />
            <br />
            <br />


        </div>;
    }
}
