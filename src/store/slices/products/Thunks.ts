//import { pokemonApi } from "../../../api/pokemonApi";
import { ProductsService } from "../../../services/api/products";
import { checkPageFilter } from "../../../utils/utils";
import { Dispatch } from "../../Store";
import { setProducts, startLoading } from "./Products.slice";
//import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getProducts = (filters?: any, page = 0) => {
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

      // if (Object.keys(filters?.filters).length > 0) {
      //   obj.filter = filters?.filters;
      // }
      const response = await ProductsService.getProducts(obj);
      console.log(response);

      dispatch(
        setProducts({
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

export const getNewProducts = (id: any, obj: any, page = 0) => {
  return async (dispatch: Dispatch) => {
    try {
      await ProductsService.getNewProducts(id, obj);

      const response = await ProductsService.getProducts();

      dispatch(
        setProducts({
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

export const g = (data: any[], el: any, cantidad: number, page = 0) => {
  return (dispatch: Dispatch) => {
    const dat: any = data.map((d: any) => {
      if (el === d._id) {
        return { ...d, cantidadDisp: d.cantidadDisp - cantidad };
      }
      return d;
    });
    dispatch(
      setProducts({
        data: {
          data: dat,
        },
        page: page + 1,
        isLoading: false,
      })
    );
  };
};

export const t = (data: any[], el: any, cantidad: number, page = 0) => {
  return (dispatch: Dispatch) => {
    const dat: any = data.map((d: any) => {
      if (el === d._id) {
        return { ...d, cantidadDisp: d.cantidadDisp + cantidad };
      }
      return d;
    });
    dispatch(
      setProducts({
        data: {
          data: dat,
        },
        page: page + 1,
        isLoading: false,
      })
    );
  };
};
