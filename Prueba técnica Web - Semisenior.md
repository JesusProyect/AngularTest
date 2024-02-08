# PRUEBA TÉCNICA SEMISENIOR

Esta prueba de Angular consiste en crear un proyecto desde 0, que muestre una Wiki sobre los personajes de la serie "Rick And Morty".

Los datos de los personajes deberan obtenerse desde:
    
> https://rickandmortyapi.com/api/character

La aplicación deberá tener los siguientes requisitos:

* Ser responsive.
  
* Un título con el texto "Rick And Morty Wiki" con la fuente de letra 'Roboto'. 

* Una tabla donde aparezcan todos los personajes con los campos: imagen, nombre, género y estado (vivo, fallecido o desconocido). Para pantallas más pequeñas, los personajes deberán mostrarse en tarjetas con la misma información que la tabla.
    
* Un filtro en el que se pueda seleccionar el campo por el que se filtra: nombre (obligatorio) y otro a elección. Dicho filtro se hará sobre los 20 personajes que devuelve la llamada a la API.
    
* Posibilidad de ordenar los resultados por nombre (sin orden, ascendente o descendente).
    
* Al pasar el ratón por las filas de la tabla, que realice algún efecto para mostrar sobre qué fila está el ratón. Hacer lo mismo para pantallas pequeñas, cuando pase el ratón por la tarjeta,que realice algún efecto para mostrar sobre cuál está el ratón.

* Que tanto al pulsar sobre una fila de la tabla, como al pulsar sobre una tarjeta, que redireccione a una página (la ruta deberá contener el id del personaje) que muestre los siguientes datos:
    
    * Nombre (como título)
    * Imagen
    * Estado (vivo, fallecido o desconocido)
    * Especie
    * Género
    * Fecha de creación (formato DD/MM/YYYY HH:mm)

* Implementar un control de errores que controle si la página no existe y muestre un mensaje de error.

Se valorará una buena estructura tanto del proyecto como del código. 