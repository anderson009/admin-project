import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/drawer";
//import PermanentDrawerRight from "../layout/PermanentDrawerRight/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { getProducts } from "../../store/slices/products/Thunks";
import Box from "@mui/material/Box";
import OutlinedCard from "../../components/card";

const Sales = (): JSX.Element => {
  const [carrito, setCarrito] = useState<any>([]);
  const { data, isLoading } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const agregarCarrito = (producto: any) => {
    if (carrito.some((articulo: any) => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map((articulo: any) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });

      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
    
  };

  const agregateProduct = (product: any) => {
    const { _id, name, cantidadDisp, precioUnitario } = product;

    const prroductoSeleccionado = {
      id: _id,
      name,
      cantidadDisp,
      precioUnitario,
      // cantidad,
    };

    console.log(carrito);
    
    agregarCarrito(prroductoSeleccionado);
  };

  return (
    <div className="flex">
      <div className="w-[100%]">
        <div className="flex flex-col">
          <TextField
            size="small"
            className=" w-[40%]"
            //  onChange={onChangeSearch}
            placeholder="Busqueda producto"
            InputProps={{
              startAdornment: (
                <InputAdornment className="mr-5" position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <FormControl className="w-[15%] !mt-5" size="small">
            <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
            <Select
              //  onChange={(e: any) => onChangeFilter({ type: e.target.value })}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Categorias"
            >
              <MenuItem value={"ventas"}>Ventas</MenuItem>
              <MenuItem value={20}>Semanal</MenuItem>
              <MenuItem value={30}>Mensual</MenuItem>
              <MenuItem value={30}>Anual</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="grid grid-cols-4 mb-10 w-full my-8 gap-7">
          {data.data.map((el: any) => (
            <OutlinedCard
              el={el}
              func={agregateProduct}
              price={el.precioUnitario}
              amount={el.cantidadDisp}
              name={el.name}
            />
          ))}
        </div>
      </div>

      <div>
        <Navbar data={carrito} />
      </div>
    </div>
  );
};

export { Sales };
