import { createAction } from "@reduxjs/toolkit";

export const NUMBER_OF_INPUT = "numberOfInput";
export const WIDTH_HEIGHT = "widthHeight";
export const INPUT_VALUE = "inputValue";

export const numberOfInput = createAction<number>(NUMBER_OF_INPUT);
export const widthHeight = createAction<string>(WIDTH_HEIGHT);
export const inputValue = createAction<number[]>(INPUT_VALUE);