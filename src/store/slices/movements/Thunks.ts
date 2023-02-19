//import { pokemonApi } from "../../../api/pokemonApi";
import { MovementsService } from "../../../services/api/movements";
import { Dispatch } from "../../Store";
import { setMovements, startLoading } from "./Movements.slice";
//import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getMovements = (page = 0) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading());
      const response = await MovementsService.getMovements();
      console.log(response);
      dispatch(setMovements({
          movements: response, page: page + 1,
          isLoading: false
      }));
    } catch (error: any) {
      console.log(error);
      const { response } = error;
      if (response.status === 401) {
        //  return setOpen(true);
      } else {
        // eslint-disable-next-line no-useless-return
        return;
      }
    }
  };
};
