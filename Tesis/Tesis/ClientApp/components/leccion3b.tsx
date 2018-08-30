import * as React from 'react';
import { RouteComponentProps } from 'react-router';


const img1 = require('../img/l3CRUD/1.png');
const img2 = require('../img/l3CRUD/2.png');
const img3 = require('../img/l3CRUD/3.png');
const img4 = require('../img/l3CRUD/4.png');
const img5 = require('../img/l3CRUD/5.png');
const img6 = require('../img/l3CRUD/6.png');
const img7 = require('../img/l3CRUD/7.png');
const img8 = require('../img/l3CRUD/8.png');
const img9 = require('../img/l3CRUD/9.png');


export class leccion3b extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <ul>

            <h1>CRUD </h1>
            <p>En esta lección abordaremos el tema de CRUD utilizando ASP Net Core 2.0.</p>

            <h2>¿Que es CRUD?</h2>


            <p> CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar" (del original en inglés: Create, Read, Update and Delete), que se usa para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software. </p>


            <h2>Razor Syntax para C#</h2>


            <h2>Crear CRUD con Asp.Net</h2>
           

                <li> En el proyecto creado se tiene que crear una clase. </li>
                <img alt='urlNet' src={String(img1)}  />

                <li> Creamos propiedades a la clase recientemente creada. </li>
                <img alt='urlNet' src={String(img2)} />

                <li> En la clase de Startup creamos un servicio de Base de datos en la memoria. </li>
                <img alt='urlNet' src={String(img3)} />

                <li> Creamos la clase AppContext para crear la base de datos. </li>
                <img alt='urlNet' src={String(img4)} />

                <li> Creamos Páginas de Razor que usan Entity Freamwork(CRUD). </li>
                <img alt='urlNet' src={String(img5)} />

                <li> Seleccionamos la clase de modelo que creamos y la clase de contexto de datos. </li>
                <img alt='urlNet' src={String(img6)}  />

                <li> Se crearán las clases eliminar,editar,crear,leer . </li>
                <img alt='urlNet' src={String(img7)}  />

                <li> Presionar F5 para arrancar la aplicación en modo debug mode o Ctrl-F5 para arrancar sin el modo debugger y nos mostrara la pagina web funcionando. </li>
                <img alt='urlNet' src={String(img8)} />

                <li> Podrás crear ,editar,eliminar y visualizar los datos que usted ingrese </li>
                <img alt='urlNet' src={String(img9)}  />

            </ul>


        </div>;
    }
}
