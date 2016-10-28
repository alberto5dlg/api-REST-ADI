#Api REST Practica 2 ADI 

##Metodos Implementados 
### GET: 
- **Usuarios**

	- /usuarios/:login -> Busca un usuario por login

	- /usuarios -> Devuelve todos los usuarios

- **Noticias**

	- /noticias -> Coleccion de Noticias

### POST 
- **Usuarios**

	- /usuarios/nuevo -> A partir de un JSON que se le pasa añade un nuevo usuario a la base de datos 

- **Noticias** 

	- /noticias/nuevo -> Añade una nueva noticia


### DELETE
- **Usuarios**
	
	- /usuarios/:login -> Borramos el usuario indicado en el login
	
- **Noticias**



### PUT 
- **Usuarios**

	- /usuarios/:login -> Editamos al usuario que indicamos en el login a traves de un JSON con sus campos

- **Noticias**


##Lista de comandos para pruebas
Estos comandos se usan en un sistema operativo con MacOs. 

- **Iniciar Servidor :** node index.js

- **Comando iniciar mongodb :** mongod --dbpath Documents/databaseMongoDB  *(en mi ordenador)*