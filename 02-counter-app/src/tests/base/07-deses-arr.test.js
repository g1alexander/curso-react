import { retornaArreglo } from "../../base/07-deses-arr.js";

describe("pruebas del archivo 07-deses-arr", () => {
  test("debe retornar un array de string y numero", () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
