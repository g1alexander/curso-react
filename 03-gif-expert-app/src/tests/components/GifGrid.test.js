import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";
jest.mock("../../hooks/useFetchGif");

describe("pruebas del componente <GifGrid />", () => {
  const text = "the beatles";

  test("el componente se debe mostrar correctamente", () => {
    useFetchGif.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={text} />);

    expect(wrapper).toMatchSnapshot();
  });

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
