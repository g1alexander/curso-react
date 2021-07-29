export function App() {
  const saludo = "Hola mundo";
  // const saludo = 3;
  // const saludo = 32.2;
  // const saludo = true;
  // const saludo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const saludo = {
  //   nombre: "Alex",
  //   edad: 21,
  // };
  // const verdad = false;

  return (
    <>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      {/* <h1>{verdad ? "es verdad" : "F"}</h1> */}
      <h1>{saludo}</h1>
      <p>Hola</p>
    </>
  );
}
