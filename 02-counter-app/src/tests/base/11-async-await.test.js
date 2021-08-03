import { getImagen } from "../../base/11-async-await";

describe("test con async y await", () => {
  test("debe retornar la url de la imagen", async () => {
    const url = await getImagen();

    expect(url.includes("https://")).toBe(true);
  });
});
