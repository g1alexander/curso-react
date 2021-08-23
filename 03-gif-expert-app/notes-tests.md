#### accediendo a los atributos y clases de los componentes

- un dato para recordar de React es que los atributos de los elementos (componentes) se les conoce como **props**.
- para acceder a estas **props** tenemos varias formas:
  - llamando a **elemento.props()** -> devuelve un objeto con todos los props que hayamos declarado
  - tambien podemos acceder a una prop directamente mediante **elemento.prop("nombre_prop")**
- con esto podemos validar en un test que no lleguen ciertas propiedades

  ***

- para acceder a una clase de un elemento tenemos que hacer lo siguiente:
  - **elemento.props("className")** el cual nos traera todas las clases del elemento
  - tambien podemos acceder a una clase directamente mediante **elemento.hasClass("animate\_\_bounce")**
  - cualquiera de las dos formas podemos validar que un elemento tenga o no una clase

```js
test("debe tener la imagen igual al url y alt de los props", () => {
  const $img = wrapper.find("img");

  //$img.props() == {src: "...", alt: "..."}

  expect($img.prop("src")).toBe(image);
  expect($img.prop("alt")).toBe(title);
});

test("debe tener el componente la clase animate__bounce", () => {
  const $div = wrapper.find("div");

  //alternativa: const className = $div.prop("className") == card animate__animated animate__bounce

  expect($div.hasClass("animate__bounce")).toBe(true);
});
```

---

#### simulando eventos

- **(cambio en la caja de texto del input)**

  - podemos simular un evento con **wrapper.find("input").simulate("change", {target: {value: "..."}})** esto nos permite que atraves del metodo .**find()** podamos acceder a los elementos (en este caso el **input**) y luego podemos simular un evento con el metodo .**simulate()** este metedo hay que pasarle dos parametros: el nombre del evento y un objeto con la informacion del evento
  - la informacion del evento es super necesario para que el evento se ejecute correctamente, si no se pasa el evento que se recibe entrar como **undenifed**
  - una vez que el evento se haya simulado podemos validar nuestro **test**

- **(envio de formulario)**
  - para el simular el evento del formulario podemos usar el mismo metodo visto anteriormente pero tambien debemos tener cuidado con el segundo argumento de metodo **simulate()**
  - para procesar el formulario en este ejemplo tenemos que modificamos el estado (ejecutamos una **function**) y para simular esto **jest** nos permite usar el metodo llamado **fn()**
  - el metodo **fn()** nos permite crear una funcion que **jest** pueda ejecutar y llevar registro de la ejecucion
  - con el dato de **jest.fn()** podemos validar el test con una funciones llamadas **toHaveBeenCalled()** la cual nos dice atraves de un **boolean** si el numero de ejecuciones se cumple o no

```js
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("pruebas del componente <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("debe de cambiar la caja de texto", () => {
    const $input = wrapper.find("input"),
      value = "hola mundo";

    $input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    const $input = wrapper.find("input"),
      value = "hello there";

    $input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect($input.prop("value")).toBe("");
  });
});
```

---

#### Mock - custom Hook

- En componentes dinamicos en los cuales se renderizan teniendo en cuenta la informacion recibida, para el caso del testing lo que se hace es:

- simular una data recibida por medio de una **function** de **jest** llamada **mock**

- esta funcion me permite poder usarla para ejecutar el llamado de un **custom hook** (este se encarga se realizar el llamado al api y retornar el **estado** con datos para el componente <GifGridItem />)

- para simular el llamado atraves del **custom hook** accedemos a un metodo **mockReturnValue** el cual recibe como parametro el valor que este espera retornar y con esto ya podemos realizar las pruebas que veamos convenientes

- podemos evaluar que dependiendo del estado del componente se muestre o no un componente, etc..

```js
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";
jest.mock("../../hooks/useFetchGif");

describe("pruebas del componente <GifGrid />", () => {
  const text = "the beatles";
  test("debe mostrarse items cuando se cargan imagenes useFetchGif", () => {
    const gifs = [
      {
        id: "ABC",
        title: "hola",
        image: "https://localhost/hola.png",
      },
    ];

    useFetchGif.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={text} />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
```

---

#### cosas que aun no se pueden hacer en las pruebas

- Al momento de realizar pruebas en componentes con **estado** y este se encuentra de manera directa en el **estado** no es posible realizar pruebas a este estado, debido a que en las pruebas con se puede poner el **estado** de esta manera
- Para soluciar esto de puede pasar el estado por medio de **props** (esto tambien haria que sea mas dinamico el componente) y asi cuando montemos el componente en la prueba lo podamos pasar

```js
// export function GifExpertApp() {
export function GifExpertApp({ defaultCategories = [] }) {
  // const [categories, setCategories] = useState(["the beatles"]);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
}
```

```js
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("pruebas en el componente <GifExpertApp />", () => {
  test("debe mostrarse un item cuando se le pasa una categoria", () => {
    const categories = ["the beatles"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
```

---

#### pruebas en custom hooks
 
- Para hacer pruebas sobre custom hooks surge un problema y es que los **hooks** solo se pueden ejecutar sobre un **functional component**

- Para solventar esto hay una libreria externa que nos permite ejecutar pruebas sobre esta la libreria es **react-hooks-testing-library**

```bash
  npm install --save-dev @testing-library/react-hooks
```

- por medio del metodo **renderHook()** de esta libreria nos permite emular la ejecucion del hook

  - este metodo recibe una **callback** el cual le pasamos el **hook**
  - el retorno del metedo es un objecto el cual podemos destructurar
  - una de las propiedades es el **result** este objecto tiene una propiedad llamada **current** y es el retorno del **hook** (el estado que esperamos) que es el lo que esperiamos si lo ejecutamos en un **functional component**

  - otra propiedad que seria mas bien un metodo el cual se llama **waitForNextUpdate()** este metodo resuelve una promesa sin retorno, cual nos permite que podamos modificar el **estado del hook**

```js
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGif } from "../../hooks/useFetchGif";

describe("pruebas en hook useFetchGif", () => {
  test("debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("the beatles")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    // const { data, loading } = useFetchGif("the beatles");

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe de retornar un arreglo de imgs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("the beatles")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});

```