import { shallow } from "enzyme";
import { CounterApp } from "../CounterApp";

describe("pruebas con el componente CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el valor por defecto de 100", () => {
    const count = 100;
    const wrapper = shallow(<CounterApp value={count} />);
    const $h2 = wrapper.find("h2").text();

    expect($h2).toBe(count.toString());
  });

  test("debe de incrementar con el boton +1", () => {
    const $btn = wrapper.find("button").at(0);
    $btn.simulate("click");
    const $h2 = wrapper.find("h2").text();

    expect($h2).toBe("11");
  });

  test("debe de decrementar con el boton -1", () => {
    const $btn = wrapper.find("button").at(2);
    $btn.simulate("click");
    const $h2 = wrapper.find("h2").text();

    expect($h2).toBe("9");
  });

  test("el valor del count debe de se retearse cuando preciono reset", () => {
    const count = 105;
    const wrapper = shallow(<CounterApp value={count} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");

    wrapper.find("button").at(1).simulate("click");

    const $h2 = wrapper.find("h2").text();

    expect($h2).toBe(`${count}`);
  });
});
