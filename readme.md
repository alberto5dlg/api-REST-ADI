#Api REST Practica 2 ADI 

##Metodos Implementados 
### GET: 
- **Usuarios**

	- **/usuarios/:login** -> Busca un usuario por login
	- **/usuarios/pag/:number** -> Devuelve los dos usuarios correspondientes a la pagina seleccionada con paginacion HAL 
	- **/usuarios** -> Devuelve los dos primeros usuarios con paginacion HAL 

- **Noticias**
	
	- **/noticias/:id** -> Devuelve la noticia con el ID indicado
	- **/noticias** -> Coleccion de Noticias con paginacion 
	- **/noticias/pag/:number** -> Coleccion de noticias con paginacion a partir de la pagina indicada

### POST 
- **Usuarios**

	- **/usuarios/nuevo** -> A partir de un JSON que se le pasa añade un nuevo usuario a la base de datos 

- **Noticias** 

	- **/noticias/nuevo** -> Añade una nueva noticia


### DELETE
- **Usuarios**
	
	- **/usuarios/:login** -> Borramos el usuario indicado en el login
	
- **Noticias**
	
	- **/noticias/:id** -> Borramos una noticia a partir de su ID


### PUT 
- **Usuarios**

	- **/usuarios/:login** -> Editamos al usuario que indicamos en el login a traves de un JSON con sus campos



##Lista de comandos para puesta en marcha
####Para poner en marcha la aplicación tendremos que realizar los siguientes comandos: 

 `npm install 		 //con esto instalaremos los modulos necesarios para node.js`
 
En otro terminal tendremos que ejecutar el servidor de la BBDD MongoDB, tendremos que indicarle donde guardar la BBDD si no por defecto crea una carpeta. 

`mongod --dbpath /ruta_de_BBDD `

Una vez ejecutado el servidor de MongoDB, comenzaremos con la ejecucion de la aplicacion por medio de uno de estos dos comandos: 

Si solo vamos a probar la aplicacion es recomendable este: 

`node index.js`

Si aparte de probar vamos a realizar cambios y no queremos estar ejecutando el servidor cada vez que hagamos un cambio usaremos este otro comando: 

`nodemon index.js`

##### Para realizar las pruebas usaremos una aplicacion llamada PostMan, esta aplicacion permite realizar las peticiones necesarias para un API REST (GET, POST, DELETE, PUT).