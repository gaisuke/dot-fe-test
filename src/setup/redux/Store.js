import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {persistStore} from 'redux-persist'
import {rootReducer} from './RootReducer'

const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
]

const store = configureStore({
  reducer: rootReducer, 
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
})


export const persistor = persistStore(store)

export default store
