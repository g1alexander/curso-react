import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

interface Form {
  name: string;
  email: string;
}
describe("test useForm", () => {
  const initialForm: Form = {
    name: "hey",
    email: "hi@hi.com",
  };
  test("should return default values", () => {
    const { result } = renderHook(() => useForm<Form>(initialForm));

    expect(result).toEqual({
      current: {
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        handleInputChange: expect.any(Function),
        handleResetForm: expect.any(Function),
      },
    });
  });

  test("should change form's name value", () => {
    const { result } = renderHook(() => useForm<Form>(initialForm));

    const { handleInputChange } = result.current;

    const newValue = "Juan";

    const event = {
      target: { value: newValue, name: "name" },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      handleInputChange(event);
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("should reset form", () => {
    const { result } = renderHook(() => useForm<Form>(initialForm));

    const { handleInputChange, handleResetForm } = result.current;

    const newValue = "Juan";

    const event = {
      target: { value: newValue, name: "name" },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      handleInputChange(event);
      handleResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
