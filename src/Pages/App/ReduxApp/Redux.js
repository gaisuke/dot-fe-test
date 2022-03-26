import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  Province: "province-data",
};

const initialState = {
  auth: undefined,
  data: undefined,
};

export const reducer = persistReducer(
  { storage, key: "dataRoot", whitelist: ['auth'] },
  (state = initialState, action) => {
    //state = [] , action
    switch (action.type) {
      case actionTypes.Province: {
        let data = action?.payload?.data?.data?.rajaongkir;
        return { data: data };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  acProvince: (data) => ({
    type: actionTypes.Province,
    payload: {data},
  }),
};
