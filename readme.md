#Api REST Practica 2 ADI 

Este API REST está desplegado en un servicio en cloud de Heroku : [API REST Heroku] (https://thawing-fjord-82104.herokuapp.com), y la Base de Datos MongoDB en un servidor de NodeChef.

El codigo entregado esta preparado para correr en local, pero en la direccion de antes se puede comprobar su uso en remoto desde Heroku. 

##Casos de Uso 
### GET: 
- **Usuarios**

	- **api/usuarios/:login** -> Busca un usuario por login, muestra los ID* de los comentarios realizados por el usuario que se busca. En este caso de uso hemos implementado hipermedia relacionando todos los comentarios que ha hecho el usuario. 
	- **api/usuarios/pag/:number** -> Devuelve los dos usuarios correspondientes a la pagina seleccionada con paginacion HAL. 
	- **api/usuarios** -> Devuelve los dos primeros usuarios con paginacion HAL.

- **Noticias**
	
	- **api/noticias/:id** -> Devuelve la noticia con el ID indicado, muestra el ID* de los comentarios asociados.En este caso de uso hemos implementado hipermedia para mostrar un enlace a los comentarios que tiene la noticia. 
	- **api/noticias** -> Coleccion de Noticias con paginacion HAL.
	- **api/noticias/pag/:number** -> Coleccion de noticias con paginacion a partir de la pagina indicada.

- **Comentarios**
	
	- **api/comentarios** ->Devuelve una coleccion de comentarios con paginacion.
	- **api/comentarios/pag/:number** -> Devuelve la pagina con la coleccion de comentarios que contiene la pagina, paginacion HAL.
	- **api/comentarios/:id** -> Devuelve el contenido del comentario seleccionado por el id, asi como el login del usuario que lo ha hecho, el id de la noticia a la que pertenece y la fecha y hora en la que fue publicado. En este caso de uso se ha implementado hipermedia relacionando el usuario y la noticia a la que pertenece el comentario.

### POST 
- **Usuarios**

	- **api/usuarios/nuevo** -> A partir de un JSON que se le pasa añade un nuevo usuario a la base de datos.

- **Noticias** 

	- **api/noticias/nuevo** -> Añade una nueva noticia, para añadir esta nueva noticias será necesario autentificarse con el username: admin y password: 123456
	- **api/noticias/:id/comentar/:login** -> Añade un comentario a la noticia seleccionada por el id, del usuario seleccionado por el login, se comprobará que la noticia y el usuario existen.


### DELETE
- **Usuarios**
	
	- **api/usuarios/:login** -> Borramos el usuario indicado en el login, para borrar un usuario será necesario autentificarse con el username: admin y password: 123456
	
- **Noticias**
	
	- **api/noticias/:id** -> Borramos una noticia a partir de su ID, para borrar una noticia será necesario autentificarse con el username: admin y password: 123456


### PUT 
- **Usuarios**

	- **api/usuarios/:login** -> Editamos al usuario que indicamos en el login a traves de un JSON con sus campos, para la edicion de datos de un usuario será necesario autentificarse con el username: admin y password: 123456



##Lista de comandos para puesta en marcha
####Para poner en marcha la aplicación tendremos que realizar los siguientes comandos: 

 `npm install 		 //con esto instalaremos los modulos necesarios para node.js`


En otro terminal tendremos que ejecutar el servidor de la BBDD MongoDB, tendremos que indicarle donde guardar la BBDD si no por defecto crea una carpeta. 

`mongod --dbpath /ruta_de_BBDD `

> Este paso lo ejecutaremos siempre que trabajemos con la Base de Datos en local y no con una en remoto.

Una vez ejecutado el servidor de MongoDB, comenzaremos con la ejecucion de la aplicacion por medio de uno de estos dos comandos: 

Si solo vamos a probar la aplicacion es recomendable este: 

`node index.js`

Si aparte de probar vamos a realizar cambios y no queremos estar ejecutando el servidor cada vez que hagamos un cambio usaremos este otro comando: 

`nodemon index.js`

##### Para realizar las pruebas usaremos una aplicacion llamada PostMan, esta aplicacion permite realizar las peticiones necesarias para un API REST (GET, POST, DELETE, PUT).