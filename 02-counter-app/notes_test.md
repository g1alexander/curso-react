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

---

#### test en React

- Para hacer pruebas en **React** las podemos hacer de varias maneras, la que viene por defecto es **@testing-library/react** con esta forma podemos renderizar los componentes y verificar que se renderizan correctamente.
- esta forma para el manejo de errores se hace un poco compleja, por ello el profe Fernando recomenda usar otra libreria que extienda las funcionalidades de **jest.js** para **React**

```js
import { render } from "@testing-library/react";
import { App } from "../App";

describe("test component <App />", () => {
  test('debe mostrar el mensaje "Hola, Soy Goku"', () => {
    const saludo = "Hola, Soy Goku";

    const { getByText } = render(<App saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument(); //comprueba que el llega el saludo
  });
});
```

---

#### test en React con "enzyme"

- Como se menciono anteriormente hacer pruebas de componentes en **React** con la configuracion de **jest.js** es muy compleja, por ello ocuparemos una libreria que extiende las funcionalidades de **jest.js**, esta libreria fue creada por Airbnb y actualmente es manstenida por Facebook

- para hacer uso de esta libreria debemos instalarla con npm

  ```bash
    npm i - D @wojtekmaj/enzyme-adapter-react-17 enzyme enzyme-to-json
  ```

  - NOTA: para la version actual de React (v17) aun no esta el adaptador de **enzyme**, por lo que debemos instalar la version anterior (v16) o si queremos ocupar la version actual (v17) debemos instalar el adaptador de **nooficial** de **enzyme** (wojtekmaj trabaja en enzyme y proporciona un adaptador)

- Para configurar el entorno de **enzyme** con **jest** nos vamos al archivo **setupTests.js**

  ```js
  import Enzyme from "enzyme";
  import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
  import { createSerializer } from "enzyme-to-json";

  Enzyme.configure({ adapter: new Adapter() });
  expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
  ```

  - Esto nos permitira hacer pruebas de componentes en **React** y que estos se muestren de una forma mas entendible y legible en los tests.

- En cada **test** sobre un componente debemos ocupar un metodo llamado **shadow()** el cual se encarga de renderizar el componente y para poder hacer pruebas sobre el comportamiento de este ocupamos en el **expect** un metodo llamado **toMatchSnapshot**.

  ```js
  import { shallow } from "enzyme";
  import { App } from "../App";

  describe("test component <App />", () => {
    test("debe mostrar <App /> correctamente", () => {
      const saludo = "Hola, Soy Goku";
      const wrapper = shallow(<App saludo={saludo} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
  ```

  - el metodo **toMatchSnapshot** creara una carpeta llamada **snapshots** en el directorio de **tests** (el cual no hay que modificar) y dentro de este creara un archivo por cada componente que hayamos hecho pruebas. en el archivo se guardara una copia del componente renderizado y en el caso de que el test falle se mostrara el codigo del componente con el error que ocurrio.

---

#### simular eventos y ciclos de vida en los test

- Para simular eventos en los componentes debemos usar el metodo **simulate()** de **enzyme**

  - NOTA: debemos tener cuidado cuando hagamos uso de interacciones del DOM en los **test**, debido a que cuando corre los **tests** estos se ejecutan secuencialmente y por lo tanto un **test** puede afectar el comporatamiento de otro **test**.
    Para solucionar estos **jest** implementa ciclo de vida el cual resetea el valor que hayamos declarado en el componente y lo vuelve a declarar en cada **test**.

  ```js
  //ciclo de vida | se declara debajo de "describe" y fuera de los "tests"
    describe("test component <CounterApp />", () => {

      let wrapper = shallow(<CounterApp />);
      beforeEach(() => {
        wrapper = shallow(<CounterApp />);
      });

     test("debe mostrar el valor por defecto de 100", () => {
      const count = 100;
      const wrapper = shallow(<CounterApp value={count} />);
      const $h2 = wrapper.find("h2").text();

      expect($h2).toBe(count.toString());
      });

      test("debe de incrementar con el boton +1", () => {
        const $btn = wrapper.find("button").at(0);
        $btn.simulate("click");
        const $h2 = wrapper.find("h2").text();

        expect($h2).toBe("11");
      });
    }

  ```
