import { combineReducers } from "redux";

import * as data from "./../../Pages/App/ReduxApp/Redux";
import * as auth from "./../../Pages/Auth/ReduxAuth/Redux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  data: data.reducer,
});
