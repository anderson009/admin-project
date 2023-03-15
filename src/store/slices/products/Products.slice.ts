import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ProductsSlice {
  page: number;
  data: any;
  isLoading: boolean;
}

const initialState: ProductsSlice = {
  page: 0,
  data: {},
  isLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },

    setProducts: (state, action: PayloadAction<ProductsSlice>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.data = action.payload.data;
    },
  },
});

export default productsSlice.reducer;

export const {
  startLoading,
  setProducts,
} = productsSlice.actions;
