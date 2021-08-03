import { getSaludo } from "../../base/02-template-string.js";

describe("pruebas del archivo 02-template-string.js", () => {
  test("getSaludo debe devolver Hola Alex!", () => {
    const nombre = "Alex";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola Alex!");
  });

  test("getSaludo debe retornar Hola Carlos! si no hay argumento", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos!");
  });
});
