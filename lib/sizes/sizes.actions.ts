import { createAction } from "@reduxjs/toolkit";

export const NUMBER_OF_INPUT = "numberOfInput";
export const WIDTH_HEIGHT = "widthHeight";
export const INPUT_VALUE = "inputValue";
export const FILE = "file";
export const IMAGES = "images";

export const numberOfInput = createAction<number>(NUMBER_OF_INPUT);
export const widthHeight = createAction<string>(WIDTH_HEIGHT);
export const inputValue = createAction<number[]>(INPUT_VALUE);
export const file = createAction<string>(FILE);
export const images = createAction<any[]>(IMAGES);
