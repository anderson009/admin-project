import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface MovementsSlice {
  page: number;
  data: any;
  isLoading: boolean;
}

const initialState: MovementsSlice = {
  page: 0,
  data: {},
  isLoading: false,
};

export const movementsSlice = createSlice({
  name: "movements",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },

    setMovements: (state, action: PayloadAction<MovementsSlice>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.data = action.payload.data;
    },
  },
});

export default movementsSlice.reducer;

export const {
  startLoading,
  setMovements,
} = movementsSlice.actions;
