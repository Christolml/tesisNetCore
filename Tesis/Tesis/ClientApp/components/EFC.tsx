﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class EFC extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Entity Framework Core</h1>
            <p>Entity Framework (EF) Core es una versión ligera, extensible y multiplataforma de la popular tecnología de acceso a datos Entity Framework.
EF Core puede servir como asignador relacional de objetos (O/RM), lo que permite a los desarrolladores de .NET trabajar con una base de datos mediante objetos .NET y eliminar la mayoría del código de acceso a los datos que normalmente deben escribir.</p>

            <hr />

            <h2>Obtener Entity Framework Core:</h2>


            <p>Instale el paquete NuGet correspondiente al proveedor de base de datos que quiera usar. Por ejemplo, para instalar el proveedor de SQL Server en el desarrollo multiplataforma mediante la herramienta dotnet en la línea de comandos:</p>
            <hr />

            <p style={{ textAlign: 'justify' }}> En el  Menú de archivos de Visual Studio , Seleccionamos  Nuevo > Projecto. </p>

            <blockquote>
                <p>Consola</p>
                <pre>

                    dotnet add package Microsoft.EntityFrameworkCore.SqlServer
                </pre>
            </blockquote>

            <p style={{ textAlign: 'justify' }}>  O en Visual Studio, con la Consola del administrador de paquetes:.</p>



            <blockquote>
                <p>PowerShell</p>
                <pre>
                    Install-Package Microsoft.EntityFrameworkCore.SqlServer
               
                    </pre>
            </blockquote>
            <hr />
            <h2>El modelo:</h2>
            <p style={{ textAlign: 'justify' }}> Con EF Core, el acceso a datos se realiza mediante un modelo. Un modelo se compone de clases de entidad y un contexto derivado que representa una sesión con la base de datos, lo que permite consultar y guardar los datos. </p>

            <p style={{ textAlign: 'justify' }}> Puede generar un modelo a partir de una base de datos existente, codificar manualmente un modelo para que coincida con la base de datos o usar migraciones de EF para crear una base de datos a partir del modelo (y que evolucione a medida que cambia el modelo). </p>


            <blockquote>
                <p>PowerShell</p>
                <pre>

                    usingusing Microsoft.EntityFrameworkCore;<br />
                    System.Collections.Generic;<br />

                    namespace Intro<br />

                    public class BloggingContext : DbContext<br />
                    &#123;<br />

                     &#32;&#32; public DbSet &lt;Blog> Blogs &#123; get; set; }<br />
                     &#32;&#32; public DbSet &lt;Post> Posts &#123; get; set; }<br />

                    &#32;&#32;  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)<br />

                    &#32;&#32;  optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=MyDatabase;Trusted_Connection=True;");<br />
                  &#32;&#32;   }
  
                <br />
                     &#32;&#32; public class Blog<br />
                   &#32;&#32;  &#123;<br />
                     &#32;&#32; public int BlogId &#123;  get; set; }<br />
                    &#32;&#32;  public string Url &#123; get; set; }<br />
                     &#32;&#32; public int Rating &#123; get; set; }<br />
                     &#32;&#32; public List &lt;Post> Posts &#123; get; setpublic class ; }<br />
                  &#32;&#32;   }<br />

                    Post<br />

                   &#32;&#32;   public int PostId  &#123; get; set; }<br />
                    &#32;&#32;  public string Title &#123; get; set; }<br />
                    &#32;&#32;  public string Content &#123; get; set; }<br />

                    &#32;&#32;  public int BlogId  &#123; get; set; }<br />
                    &#32;&#32;  public Blog Blog &#123; get; set; }<br />
                   &#32;&#32;  }
                 }
    
    
                   
                </pre>
            </blockquote>
            <hr />
            <h2>Consultas:</h2>

            <p style={{ textAlign: 'justify' }}> Las instancias de las clases de entidad se recuperan de la base de datos mediante Language Integrated Query (LINQ) </p>


            <blockquote>
                <p></p>
                <pre>

                    using (var db = new BloggingContext())<br />
                    &#123;<br />
                   &#32;&#32;   var blogs = db.Blogs<br />
                    &#32;&#32;  .Where(b => b.Rating > 3)<br />
                    &#32;&#32;  .OrderBy(b => b.Url)<br />
                    &#32;&#32;  .ToList();<br />
                    }
                </pre>
            </blockquote>
            <hr />
            <h2>Guardado de datos:</h2>

            <p style={{ textAlign: 'justify' }}> Los datos se crean, se eliminan y se modifican en la base de datos mediante instancias de las clases de entidad </p>

            <blockquote>
                <p></p>
                <pre>
                    using (var db = new BloggingContext())<br />
                    &#123;<br />
                    &#32;&#32;  var blog = new Blog Url = "http://sample.com"};<br />
                   &#32;&#32;   db.Blogs.Add(blog);<br />
                    &#32;&#32;  db.SaveChanges();<br />
                    }
                </pre>
            </blockquote>

        </div>;
    }
}
