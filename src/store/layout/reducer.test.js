import { reducer } from "./index";

describe("Layout Reducer", () => {
  test("deve iniciar o state", () => {
    expect(reducer(undefined, {})).toEqual({
      showMessage: false,
    });
  });

  test("deve retornar o state showMessage= true", () => {
    expect(reducer(undefined, { type: "SHOW_MESSAGE" })).toEqual({
      showMessage: true,
    });
  });

  test("deve retornar o state showMessage= false", () => {
    expect(reducer(undefined, { type: "HIDE_MESSAGE" })).toEqual({
      showMessage: false,
    });
  });
});
