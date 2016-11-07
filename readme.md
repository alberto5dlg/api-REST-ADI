#API REST Practica 2 ADI 

Este API REST está desplegado en un servicio en cloud de Heroku : [API REST Heroku] (https://thawing-fjord-82104.herokuapp.com), y la Base de Datos MongoDB en un servidor de NodeChef.

Este API REST esta diseñado para la primera práctica de ADI(Aplicaciones Distribuidas en Internet) de la Universidad de Alicante en el Grado en Ingeniería Informática.

Todo el codigo esta alojado en GitHub en el siguiente repositorio: [API REST adi] (https://github.com/alberto5dlg/api-rest-adi) 

##Introducción
Este API esta desarrollado para un supuesto blog de Noticias en el que tendremos usuarios, noticias y comentarios de usuarios en noticias. Contemplamos distintos casos de uso que estan descritos mas abajo seguidos de su ruta para probarlos. 

Para todos los metodos de POST y PUT tendremos que pasarle un JSON con los campos necesarios, y para metodos POST, PUT y DELETE será necesario una autentificacion. Otros metodos como los GET de un solo objeto estan implementados con hipermedia enlazando con los objetos que tengas relacionados. Todas las colecciones estan implementadas con paginación HAL. 

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

	- **api/noticias/nuevo** -> Añade una nueva noticia, para añadir esta nueva noticias será necesario autentificarse con el username: admin y password: 123456. Los datos se pasaran con un JSON. 
	- **api/noticias/:id/comentar/:login** -> Añade un comentario a la noticia seleccionada por el id, del usuario seleccionado por el login, se comprobará que la noticia y el usuario existen.Los datos del comentario se pasarán con un JSON. 


### DELETE
- **Usuarios**
	
	- **api/usuarios/:login** -> Borramos el usuario indicado en el login, para borrar un usuario será necesario autentificarse con el username: admin y password: 123456
	
- **Noticias**
	
	- **api/noticias/:id** -> Borramos una noticia a partir de su ID, para borrar una noticia será necesario autentificarse con el username: admin y password: 123456


### PUT 
- **Usuarios**

	- **api/usuarios/:login** -> Editamos al usuario que indicamos en el login a traves de un JSON con sus campos, para la edicion de datos de un usuario será necesario autentificarse con el username: admin y password: 123456. Los datos para modificar se pasaran por JSON. 



##Lista de comandos para puesta en marcha
####Para poner en marcha la aplicación tendremos que realizar los siguientes comandos: 

 `npm install 		 //con esto instalaremos los modulos necesarios para node.js`


En otro terminal tendremos que ejecutar el servidor de la BBDD MongoDB, tendremos que indicarle donde guardar la BBDD si no por defecto crea una carpeta. 

`mongod --dbpath /ruta_de_BBDD `

> Este paso lo ejecutaremos siempre que trabajemos con la Base de Datos en local y no con una en remoto, en este caso también tendremos que cambiar la conexion de la BBDD poniendola con la direccion local. 

Una vez ejecutado el servidor de MongoDB, comenzaremos con la ejecucion de la aplicacion por medio de uno de estos dos comandos: 

Si solo vamos a probar la aplicacion es recomendable este: 

`node index.js`

Si aparte de probar vamos a realizar cambios y no queremos estar ejecutando el servidor cada vez que hagamos un cambio usaremos este otro comando: 

`nodemon index.js`

##### Para realizar las pruebas usaremos una aplicacion llamada PostMan, esta aplicacion permite realizar las peticiones necesarias para un API REST (GET, POST, DELETE, PUT).

## Requisitos "Adicionales" implementados
A parte de los requisitos minimos exigidos para superar la práctica se han implementado los siguientes requisitos adicionales que se ofrecían:  

- Implementar una Base de Datos persistente, en mi caso con MongoDB, esta base de datos es remota y esta alojada en NodeChef.

- Implementacion de Hipermedia en el API.

- Desplegar el API en algun servicio en la nube, en mi caso he optado por heroku [API REST Heroku] (https://thawing-fjord-82104.herokuapp.com)