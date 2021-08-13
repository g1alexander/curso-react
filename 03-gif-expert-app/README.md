# Hooks

## useState()

- Para adiccionar como se usa el [useState()](https://reactjs.org/docs/state.html) tenemos que hay varias maneras que podemos modificar el estado. estas son:

  ```jsx
  const [categories, setCategories] = useState(["one", "two", "three", "four"]);

  const handleAdd = () => {
    setCategories([...categories, "five"]);
    //setCategories(cat => [...cat, "five"]);
  };
  ```

  - La diferencia entre estas dos formas de cambiar el estado es que con la primera tenemos que tener el estado disponible en la variable **categories** mientras que la segunda tenemos acceso a la referencia del estado mendiante la **function**
  - La segunda forma es mas practica en comunicacion de componentes (en el componente padre tiene el estado y en el hijo cambias el estado y solo tienes que pasarle la funcion **setCategories** sin necesidad de pasarle el estado **categories**)

---

## useEffect()

- Este hook es muy importante, debido a que es un metodo que permite manejar el ciclo de vida de un componente.

- el **useEffect()** es importante para cuando hace un llamado a una peticion **HTTP**, debido a que como los componente de **React** se rendizan cada vez que se dispara una accion, sino tenemos control de esto estaremos haciendo peticiones de manera infinita

- aca es donde entra este Hook es cual atraves de una lista de depencias le dice a **React** que solo hara la peticion cuando cargue el componente una sola vez

- los parametros de este Hook son:

  - el primero es una **callback** la cual ejecutara nuestro codigo
  - el segundo sera una lista de depencias (la cual es un array), si queremos que el **useEffect()** solo se ejecute una sola vez ponemos un array vacio **"[]"**

  ```jsx
  import { useEffect } from "react";

  export function GifGrid({ category }) {
    useEffect(() => {
      getGifApi();
    }, []);

    const getGifApi = async () => {
      const api = `http://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=NP5cQV4cSEAzBTGF0UJooDCwFcYASGyH`;

      const response = await fetch(api);
      const { data } = await response.json();

      const gifs = data.map(({ id, images, title }) => {
        return {
          id,
          image: images?.downsized_medium.url,
          title,
        };
      });

      console.log(gifs);
    };

    return (
      <>
        <h3>{category}</h3>
      </>
    );
  }
  ```

- dependencias en **useEffects()**, sirven para decirle al hook que si llega a ver un cambio en el estado vuelva a ejecutar el **useEffects()**, esto es muy importante debido a que por lo general este cambia

```jsx
//las categories pueden cambiar, por eso lo ponemos como depencia
useEffect(() => {
  //llamado a una api
  getGifApi(category).then((data) => {
    setState({
      data,
      loading: false,
    });
  });
}, [category]);
```

---

## Custom Hooks

- son funciones que creamos para reutilizar la logica que empleemos en nuestros componentes, lo magico de esto es que podemos utilizarlo muchas veces en diferentes componentes

- si bien estos hooks estan separados de los componentes, eso no quita que podamos utilizar las herramientas de **React** (en ellos podemos utilizar los hooks de React :D)

- Ideas para implementar un custom hook:

  - peticiones **HTTP**
  - validacion de formularios
  - separar la logica de un componente (si este se empieza a ver ilegible)

  ```jsx
  import { useEffect, useState } from "react";
  import { getGifApi } from "../helpers/getGifApi";

  export function useFetchGif(category) {
    const [state, setState] = useState({
      data: [],
      loading: true,
    });

    useEffect(() => {
      //llamado a una api
      getGifApi(category).then((data) => {
        setState({
          data,
          loading: false,
        });
      });
    }, [category]);

    return state;
  }
  ```
