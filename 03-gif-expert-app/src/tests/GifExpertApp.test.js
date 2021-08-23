import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("pruebas en el componente <GifExpertApp />", () => {
  test("se debe mostrar correctamente el componente", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrarse un item cuando se le pasa una categoria", () => {
    const categories = ["the beatles"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
