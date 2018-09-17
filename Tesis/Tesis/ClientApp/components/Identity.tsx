import * as React from 'react';
import { RouteComponentProps } from 'react-router';



const img1 = require('../img/l5/1.png');
const img2 = require('../img/l5/2.png');
const img3 = require('../img/l5/3.png');
const img4 = require('../img/l5/4.png');
const img5 = require('../img/l5/5.png');
const img6 = require('../img/l5/6.png');
const img7 = require('../img/l5/7.png');
const img8 = require('../img/l5/8.png');



export class identity extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <ul>
                <h1>Internals Identity</h1>
                <p style={{ textAlign: 'justify' }}>ASP.NET Core Identity es un sistema que añade la funcionalidad de login que hace que el usuario pueda crear su cuenta y poder iniciar sesión,
                    la informació obtenida es almacenada en Identy tambien se puede usar una aplicacion externa para almacenar información.
            </p>

                <hr />

            </ul>
            <ul>
                <h2>Create a Web app con identy:</h2>

                <p style={{ textAlign: 'justify' }}> En el  Menú de archivos de Visual Studio , Seleccionamos  Nuevo > Projecto.</p>
                <p style={{ textAlign: 'justify' }}> Crear una nueva  ASP.NET Core Web Application.</p>
                <img alt='urlNet' src={String(img1)} />

                <p style={{ textAlign: 'justify' }}>Seleccionamos Web Application y damos click en el botón de cambiar autenticación. </p>
                <img alt='urlNet' src={String(img2)} />

                <p style={{ textAlign: 'justify' }}>seleccionamos cuentas de usuario individuales y luego damos clic en aceptar. </p>
                <img alt='urlNet' src={String(img3)} />

                <p style={{ textAlign: 'justify' }}> Se creará un proyecto. que contendrá el servicio de autenticación ya creado  ,para ver dónde está el servicio vamos al archivo startup.cs . </p>
                <img alt='urlNet' src={String(img4)} />

                <p style={{ textAlign: 'justify' }}> Nos creará la clase identyUser donde donde se guardaran los datos del usuario.</p>
                <img alt='urlNet' src={String(img5)} />

                <p style={{ textAlign: 'justify' }}> Ejecutamos el programa y nos aparecerá en el lado derecho de la pagina web el boton de login y register.</p>
                <img alt='urlNet' src={String(img6)} />

                <p style={{ textAlign: 'justify' }}>Al dar clic en registrar nos enviara a una ventana para registrarnos y después entramos con nuestra cuenta a la página web. </p>
                <img alt='urlNet' src={String(img7)} />

            </ul>
            <hr />
        </div>;
    }
}
