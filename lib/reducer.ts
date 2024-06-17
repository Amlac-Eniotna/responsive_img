import { combineReducers } from "redux";

import sizesReducer from "./sizes/sizes.reducer";

const rootReducer = combineReducers({
  sizes: sizesReducer,
});

export default rootReducer;
