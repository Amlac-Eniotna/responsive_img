import { PayloadAction } from "@reduxjs/toolkit";
import { NUMBER_OF_INPUT, WIDTH_HEIGHT, INPUT_VALUE } from "./sizes.actions";

const initialState = {
  numberOfInput: 1,
  widthHeight: "width",
  inputValue: [],
};

export default function sizesReducer(
  state = initialState,
  action: PayloadAction<string | number | number[]>,
) {
  switch (action.type) {
    case NUMBER_OF_INPUT:
      return { ...state, numberOfInput: action.payload };
    case WIDTH_HEIGHT:
      return { ...state, widthHeight: action.payload };
    case INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
}
