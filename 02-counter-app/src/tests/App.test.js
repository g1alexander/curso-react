// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import { App } from "../App";

describe("test component <App />", () => {
  // test('debe mostrar el mensaje "Hola, Soy Goku"', () => {
  //   const saludo = "Hola, Soy Goku";
  //   const { getByText } = render(<App saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test("debe mostrar <App /> correctamente", () => {
    const saludo = "Hola, Soy Goku";
    const wrapper = shallow(<App saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el subtitulo mandado por props", () => {
    const saludo = "Hola, Soy Goku";
    const subTitulo = "Soy subtitulo";
    const wrapper = shallow(<App saludo={saludo} subtitulo={subTitulo} />);

    const $p = wrapper.find("p").text();

    //wrapper.find() funciona igual a document.querySelector()

    expect($p).toBe(subTitulo);
  });
});
