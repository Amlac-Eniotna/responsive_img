import { PayloadAction } from "@reduxjs/toolkit";
import { numberOfInput } from "./sizes.actions";

const initialState = {
  numberOfInput: 1,
  widthHeight: "width",
  inputValue: [],
};

export default function sizesReducer(
  state = initialState,
  action: PayloadAction<number | string | number[]>,
) {
  switch (action.type) {
    case "numberOfInput":
        return {...state, action.payload}
    case "widthHeight":
        return {...state, action.payload}
    case "inputValue":
        return {...state, action.payload}
    default:
      return state;
  }
}
