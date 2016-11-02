#Api REST Practica 2 ADI 

##Metodos Implementados 
### GET: 
- **Usuarios**

	- /usuarios/:login -> Busca un usuario por login

	- /usuarios -> Devuelve todos los usuarios

- **Noticias**

	- /noticias -> Coleccion de Noticias con paginacion 
	- /noticias/pag/:number -> Coleccion de noticias con paginacion a partir de la pagina indicada

### POST 
- **Usuarios**

	- /usuarios/nuevo -> A partir de un JSON que se le pasa añade un nuevo usuario a la base de datos 

- **Noticias** 

	- /noticias/nuevo -> Añade una nueva noticia


### DELETE
- **Usuarios**
	
	- /usuarios/:login -> Borramos el usuario indicado en el login
	
- **Noticias**
	
	- /noticias/:id -> Borramos una noticia a partir de su ID


### PUT 
- **Usuarios**

	- /usuarios/:login -> Editamos al usuario que indicamos en el login a traves de un JSON con sus campos



##Lista de comandos para pruebas
Estos comandos se usan en un sistema operativo con MacOs. 

- **Iniciar Servidor :** node index.js

- **Comando iniciar mongodb :** mongod --dbpath Documents/databaseMongoDB  *(en mi ordenador)*