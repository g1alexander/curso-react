import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("pruebas del archivo 08-impor-arr", () => {
  test("debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("debe retornar un undefind si no existe id", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("debe retornar un array con los heroes de dc", () => {
    const owner = "DC";
    const dc = getHeroesByOwner(owner);
    // console.log(dc);
    const filterOwner = heroes.filter((h) => h.owner === owner);

    expect(dc).toEqual(filterOwner);
  });

  test("debe retornar un arreglo con los heroes de marvel", () => {
    const owner = "Marvel";
    const marvel = getHeroesByOwner(owner);

    expect(marvel.length).toBe(2);
  });

  test("debe retornar un arreglo vacio si no existe owner", () => {
    const owner = "dasdsa";
    const arr = getHeroesByOwner(owner);

    expect(arr).toEqual([]);
  });
});
