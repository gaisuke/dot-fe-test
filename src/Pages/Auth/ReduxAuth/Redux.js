import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
    Login: "login-data",
    Logout: "logout-data",
};

const initialState = {
  data: undefined,
  auth: undefined,
};

export const reducer = persistReducer(
  { storage, key: "authRoot", whitelist: ['auth'] },
  (state = initialState, action) => {
    //state = [] , action
    switch (action.type) {
      case actionTypes.Login: {
          console.log("action")
        let auth = action?.payload?.data;
        console.log({auth})
        return { auth: auth };
      }
      case actionTypes.Logout: {
          console.log("action logout")
      return { auth: {} };
    }

      default:
        return state;
    }
  }
);

export const actions = {
  acLogin: (data) => ({
    type: actionTypes.Login,
    payload: {data},
  }),
  acLogout: () => ({
    type: actionTypes.Logout,
    payload: {},
  }),
};
