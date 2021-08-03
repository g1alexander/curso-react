#### estructura para hacer puebas en los proyectos de React

- Para manejar pruebas de un proyecto de React, es necesario tener una estructura de directorios y archivos que sean fáciles de manejar.

- Para esto, se recomienda usar una estructura de directorios y archivos que sean:

  - `src`: contiene el código fuente del proyecto.
  - Dentro de `src` creamos un directorio `tests` que contenta los tests del proyecto. Asi podemos tener un order en el proyecto

- Los archivos que creemos en `tests` deben nombrarse de la siguiente manera:
  - `<nombre del componente>-test.js`
  - asi sabremos identificar el componente a testear y React lo identifica automáticamente para correr las pruebas y ignorarlo en produccion.

---

#### creando pruebas en jest.js

- Para crear pruebas pensariamos que necesitamos de condicionales o demas cosas, pero con jest.js podemos hacerlo de manera sencilla.

- Para usar jest.js, primero debemos instalarlo (en este caso create-react-app ya lo instala por default)

- en jest.js usamos de una funcion llama **test()** la cual recibe dos parametros el primero es un **string** el cual es una descricion de la prueba y el segundo es un **function** que es la función donde se hara el test.

- dentro del callback aplicamos los conceptos de la introduccion la cual es la iniciación de una prueba, el estimulo y comportamiento de esta.

- para saber si una prueba pasa (observar el comportamiento), test.js proporciona una funcion la cual es **expect()** que nos indica lo que espera recibir y esta funcion tiene otra la cual es llama **toBe** que nos indica que el valor esperado es el que recibimos.

- Algo opcional es que podemos usar un metodo llamado **describe** el cual nos sirve para agregar una descripcion a una prueba en todo el archivo.

```js
describe("pruebas del archivo demo.test.js", () => {
  test("los strings deben ser iguales", () => {
    //1. inicializacion
    const message1 = "hola mundo";

    //2. estimulo
    const message2 = `hola mundo`;

    //3. observar el comportamiento
    expect(message1).toBe(message2);
  });
});
```

- Para hacer pruebas de los archivos debemos poner a las funciones **export** para poder utilizarlas en los **test**

---

#### metodos y argumentos para hacer pruebas en jest.js

- toBe: se usa para comparar dos valores primitivos y verificar si son iguales
- toEqual: se usa para comparar dos objectos y verificar si son iguales
- Argumento done: se usa en test de peticiones ascincronas, este argumento el indica a **jest** que espere a que resuelva la petición y luego se ejecute el test. el **done()** es una funcion que se ejecutara cuando la peticion haya terminado.
