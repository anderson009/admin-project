import { configureStore } from "@reduxjs/toolkit";
import Movements from "./slices/movements/Movements.slice";
import Products from "./slices/products/Products.slice";
// import { todosApi } from "./apis/TodoApi";
// import { counterSlice } from "./slices/counter";
// import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
  reducer: {
    movements: Movements,
    products: Products,
    // pokemons: pokemonSlice.reducer,
    // [todosApi.reducerPath]: todosApi.reducer,
  },

  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
// export type Thunk = ThunkAction<
//   Promise<unknown>,
//   RootState,
//   unknown,
//   Action<unknown>
// >;

// export const persistor = persistStore(store);

// export default store;
