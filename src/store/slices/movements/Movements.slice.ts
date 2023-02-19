import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movements } from "../../../models/Movements";

interface MovementsSlice {
  page: number;
  movements: movements[];
  isLoading: boolean;
}

const initialState: MovementsSlice = {
  page: 0,
  movements: [],
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
      state.movements = action.payload.movements;
    },
  },
});

export default movementsSlice.reducer;

export const {
  startLoading,
  setMovements,
} = movementsSlice.actions;
