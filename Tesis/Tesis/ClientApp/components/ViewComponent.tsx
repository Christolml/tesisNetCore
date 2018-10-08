import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const webApp = require('../img/Avanzado/lViewComponent/webApp.png'); 
const viewComponents = require('../img/Avanzado/lViewComponent/viewComponents.png'); 
const index = require('../img/Avanzado/lViewComponent/index.png'); 
const toDo = require('../img/Avanzado/lViewComponent/toDo.png'); 







export class ViewComponent extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <h2>View component</h2>
            <p style={{ textAlign: 'justify' }}>
                Durante los últimos proyectos hemos implementado código <i>c#</i> dentro de nuestra estructura html y no es que este mal ya
                que para eso están nuestros archivos con extensión <i>.cshtml</i> pero de esa forma nuestro código se nos empieza a complicar
                para una compresión clara y no se ve agradable nuestro código a simple vista. Una solución es utilizar <i>view component</i> el 
                cual nos permite hacer pequeños componentes de código reutilizable y después utilizarlos desde cualquier página de
                vista que tenemos en nuestro proyecto.
                Los <i>view components</i> no usan el enlace de modelos y solo dependen de los datos proporcionados cuando se les llama.
                Un <i>view component</i> consta de dos partes: la clase y el resultado que devuelve.
                <br />
                <br/>
                Un componente de vista:
                <ul>
                    <li>Representa un fragmento en lugar de una respuesta completa.</li>
                    <li>Incluye las mismas ventajas de separación de conceptos y capacidad de prueba que se encuentran entre un controlador y una vista.</li>
                    <li>Puede tener parámetros y lógica de negocios.</li>
                    <li>Normalmente se invoca desde una página de diseño.</li>
                </ul>
                <br />

                Los componentes de vista están diseñados para cualquier lugar que tenga lógica de representación reutilizable demasiado compleja para una vista parcial, como:
            	<ul>
                    <li>Menús de navegación dinámica.</li>
                    <li>Incluye las mismas ventajas de separación de conceptos y capacidad de prueba que se encuentran entre un controlador y una vista.</li>
                    <li>Puede tener parámetros y lógica de negocios.</li>
                    <li>Normalmente se invoca desde una página de diseño.</li>
                    <li>Nube de etiquetas (donde consulta la base de datos).</li>
                    <li>Panel de inicio de sesión.</li>
                    <li>Carro de la compra.</li>
                    <li>Artículos publicados recientemente.</li>
                    <li>Contenido de la barra lateral de un blog típico.</li>
                    <li>Un panel de inicio de sesión que se representa en cada página y muestra los vínculos para iniciar o cerrar sesión, según el estado del usuario.</li>
                </ul>
                <br/>

                Un <i>view component</i> define su lógica en un método <i>InvokeAsync</i> que devuelve <i>IViewComponentResult</i>. Los parámetros proceden
                directamente de la invocación del <i>view component</i>, no del enlace de modelos. Un <i>view component</i> nunca controla directamente
                una solicitud. Por lo general, un <i>view component</i> inicializa un modelo y lo pasa a una vista mediante una llamada al método View.
                En resumen, los métodos de <i>view component</i>:
                <ul>
                    <li>Definen un método InvokeAsync que devuelve IViewComponentResult.</li>
                    <li>Por lo general, inicializan un modelo y lo pasan a una vista mediante una llamada al método ViewComponent View.</li>
                    <li>Los parámetros provienen del método que realiza la llamada, y no de HTTP, ya que no hay ningún enlace de modelos.</li>
                    <li>No son accesibles directamente como un punto de conexión HTTP, sino que se invocan desde el código. Un view component nunca controla una solicitud.</li>
                </ul>
                <br />

                Ahora que hemos visto teoría sobre nuestro <i>view component</i> procedemos a realizar un pequeño ejemplo en el cual vamos a
                realizar una lista de tareas por hacer en el cual vamos a tener nuestra estructura de nuestra lista de tareas y por medio de
                componentes vamos a poder realizar el llenado de la lista y nuestro componente lo podemos reutilizar. Necesitamos crear
                nuestro proyecto del tipo <i>Web Application(MVC)</i>.
            </p>
            <img alt='webApp' src={String(webApp)} width="500" height="300" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Después en nuestra carpeta raíz creamos una nueva carpeta(<i>ViewComponents</i>) y agregamos la clase <i>PriorityListViewComponent</i> la cual
                será nuestro <i>view component</i> de nuestro proyecto. En nuestro código podemos ver que las clases de <i>view components</i> pueden estar
                contenidas en <b>cualquier</b> carpeta del proyecto. Algo notorio es que el nombre de clase <i>PriorityList<b>ViewComponent</b></i> que acaba con el
                sufijo <i><b>ViewComponent</b></i>, durante el tiempo de ejecución usará la cadena "<i>PriorityList</i>" cuando haga referencia al componente de clase
                desde una vista. Por último, notamos que estamos usando <i>InvokeAsync</i> el cual expone un método al que se puede llamar desde una
                vista y puede tomar un número arbitrario de argumentos. El método <i>InvokeAsync</i> devuelve el conjunto de elementos <i>ToDo</i> que cumplen
                los parámetros <i>isDone</i> y <i>maxPriority</i>.
            </p>
            <img alt='viewComponents' src={String(viewComponents)} width="300" height="390" />
            <br />
            <br />
            <p><b>PriorityListViewComponent.cs</b></p>
            <blockquote>
                <pre>
                    using System.Linq; <br/>
                    using System.Threading.Tasks; <br />
                    using Microsoft.AspNetCore.Mvc; <br />
                    using Microsoft.EntityFrameworkCore; <br />
                    //using ViewComponentSample.Models; <br/>
                    <br />
                    namespace viewComponent.ViewComponents <br />
                    &#123; <br />
                        &#32;&#32;&#32;&#32;public class PriorityListViewComponent : ViewComponent <br/>
                        &#32;&#32;&#32;&#32;&#123;<br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;private readonly ToDoContext db; <br/>
                    <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public PriorityListViewComponent(ToDoContext context) <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123;<br/>
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;db = context; <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br/>
                    <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;public async Task&#60;IViewComponentResult> InvokeAsync( <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;int maxPriority, bool isDone) <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123; <br/>
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;var items = await GetItemsAsync(maxPriority, isDone); <br/>
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;return View(items); <br />
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;private Task&#60;List&#60;TodoItem>> GetItemsAsync(int maxPriority, bool isDone) <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#123;<br/>
                                &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;return db.ToDo.Where(x => x.IsDone == isDone && <br/>
                                                     &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;x.Priority &#60;= maxPriority).ToListAsync(); <br/>
                            &#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;} <br/>
                        &#32;&#32;&#32;&#32;} <br/>
                    }

                </pre>
            </blockquote>
            <br />
            <p style={{ textAlign: 'justify' }}>
                Ahora procedemos a crear la vista <i>Razor</i> del <i>view component</i> en la carpeta <i>Views/Todo</i> y nuestro <i>Razor</i> será nuestro
                archivo <i>Index.cshtml</i> y en este vamos a poder mostrar la información de nuestra lista de tareas. 
            </p>
            <img alt='index' src={String(index)} width="300" height="400" />
            <br />
            <br />
            <p style={{ textAlign: 'justify' }}>
                Agregamos un elemento <i>div</i> que contenga una llamada al componente de <i>lista de prioridad</i> en la parte inferior del
                archivo <i>Views/Todo/Index.cshtml</i>.
                <br/>
                <i>@await Component.InvokeAsync</i> muestra la sintaxis para llamar a los componentes de vista. El primer argumento es el nombre
                    del componente que se quiere invocar o llamar. Los parámetros siguientes se pasan al componente. <i>InvokeAsync</i> puede tomar un
                número arbitrario de argumentos.
            </p>
            <p><b>Index.cshtml</b></p>
            <blockquote>
                <pre>
                    &#60;div> <br/>
                        &#32;&#32;&#32;&#32;@await Component.InvokeAsync("PriorityList", new &#123;maxPriority = 4, isDone = true })<br/>
                    &#60;/div>
                </pre>
            </blockquote>
            <br />
            <p style={{ textAlign: 'justify' }}>
                Hasta aquí ya hemos implementado nuestro <i>view component</i> de forma correcta ya que desde nuestra carpeta <i>Views</i> estamos
                ocupando nuestro <i>view component</i> establecido y ya por medio de nuestra estructura <i>MVC</i> del proyecto el modelo y el
                controlador lo hemos configurado para que trabaje con nuestra vista con ayuda de <i>view component</i>. Para ver el proyecto
                completa presiona aquí donde serás redirigido al repositorio github.
            </p>
            <br />
            <p><b>Aplicación corriendo.</b></p>
            <img alt='toDo' src={String(toDo)} width="600" height="510" />
            <br />
            <br />

        </div>;
    }
}
