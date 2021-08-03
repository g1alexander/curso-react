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
