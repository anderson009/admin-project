//import { pokemonApi } from "../../../api/pokemonApi";
import { MovementsService } from "../../../services/api/movements";
import { checkPageFilter } from "../../../utils/utils";
import { Dispatch } from "../../Store";
import { setMovements, startLoading } from "./Movements.slice";
//import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getMovements = (filters?: any, page = 0) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading());

      const obj: Record<string, any> = {
        searchText: filters?.textSearch,
        page: checkPageFilter(filters?.page).toString(),
        limit: filters?.rowsPerPage.toString(),
        filter: filters?.filters,
      };

      if (filters?.orderField !== undefined) {
        obj.orderField = filters?.orderField;
        obj.orderType = filters?.orderBy;
      }

      if (Object.keys(filters?.filters).length > 0) {
        obj.filter = filters?.filters;
      }
      const response = await MovementsService.getMovements(obj);

      dispatch(
        setMovements({
          data: response,
          page: page + 1,
          isLoading: false,
        })
      );
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
