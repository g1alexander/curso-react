import { getGifApi } from "../../helpers/getGifApi";

describe("pruebas en el helper getGifApi", () => {
  test("debe recibir un arreglo con 10 elementos", async () => {
    const gifs = await getGifApi("the beatles");

    expect(gifs.length).toBe(10);
  });

  test("debe recibir un arreglo vacio", async () => {
    const gifs = await getGifApi("");

    expect(gifs.length).toBe(0);
  });
});
