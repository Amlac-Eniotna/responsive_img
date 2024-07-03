import { PayloadAction } from "@reduxjs/toolkit";
import {
  NUMBER_OF_INPUT,
  WIDTH_HEIGHT,
  INPUT_VALUE,
  FILE,
  IMAGES,
  QUALITY,
} from "./sizes.actions";

const initialState: {
  numberOfInput: number;
  widthHeight: string;
  inputValue: number[];
  quality: number;
  file: string;
  images: { url: string; height: number; width: number }[];
} = {
  numberOfInput: 1,
  widthHeight: "width",
  inputValue: [],
  quality: 0.8,
  file: "",
  images: [],
};

export default function sizesReducer(
  state = initialState,
  action: PayloadAction<
    | string
    | number
    | number[]
    | { url: string; height: number; width: number }[]
  >,
) {
  switch (action.type) {
    case NUMBER_OF_INPUT:
      return { ...state, numberOfInput: action.payload };
    case WIDTH_HEIGHT:
      return { ...state, widthHeight: action.payload };
    case INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case QUALITY:
      return { ...state, quality: action.payload };
    case FILE:
      return { ...state, file: action.payload };
    case IMAGES:
      return { ...state, images: action.payload };
    default:
      return state;
  }
}
