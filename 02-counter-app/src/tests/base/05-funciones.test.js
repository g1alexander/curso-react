import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("test del archivo 05-funciones.js", () => {
  test("getUser debe retornar un objecto", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const result = getUser();
    expect(result).toEqual(user);
  });

  test("getUsuarioActivo debe retornar el objecto que pasamos como parametro", () => {
    const nombre = "El_Papi1502";

    const user = {
      uid: "ABC567",
      username: nombre,
    };

    const result = getUsuarioActivo(nombre);
    expect(result).toEqual(user);
  });
});
