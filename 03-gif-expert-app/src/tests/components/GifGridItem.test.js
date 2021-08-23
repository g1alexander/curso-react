import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("tests component GifGridItem", () => {
  const title = "un titulo",
    image = "http://localhost/hola.png";
  let wrapper = shallow(<GifGridItem title={title} image={image} />);

  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener un h3 con el title", () => {
    const $h3 = wrapper.find("h3");

    expect($h3.text().trim()).toBe(title);
  });

  test("debe tener la imagen igual al url y alt de los props", () => {
    const $img = wrapper.find("img");

    //$img.props() == {src: "...", alt: "..."}

    expect($img.prop("src")).toBe(image);
    expect($img.prop("alt")).toBe(title);
  });

  test("debe tener el componente la clase animate__bounce", () => {
    const $div = wrapper.find("div");

    //alternativa: const className = $div.prop("className") == card animate__animated animate__bounce

    expect($div.hasClass("animate__bounce")).toBe(true);
  });
});
