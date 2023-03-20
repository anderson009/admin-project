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
import "./style.css";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Sales = (): JSX.Element => {
  const [carrito, setCarrito] = useState<any[]>([]);
  const [cantidad, setCantidad] = useState<number>(1);
  const { data, isLoading } = useAppSelector((state) => state.products);
  const [total, setTotal] = useState<number>(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const agregarCarrito = (producto: any) => {
    if (carrito.find((articulo: any) => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map((articulo: any) => {
        if (articulo.id === producto.id) {
          articulo.cantidad === producto.cantidad;
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
      cantidadDisp: cantidadDisp - cantidad,
      precioUnitario,
      cantidad,
      total: cantidad * precioUnitario,
    };

    agregarCarrito(prroductoSeleccionado);
  };

  const actualizarCantidad = (producto: any) => {
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
        articulo.cantidadDisp = producto.cantidadDisp;
        articulo.total = producto.precioUnitario * producto.cantidad;

        console.log(articulo.cantidadDisp);
        console.log(producto.cantidadDisp);
        console.log(producto);
      }
      return articulo;
    });
    setCarrito(carritoActualizado);
  };

  useEffect(() => {
    let totalVentas = carrito.reduce(
      (acumulador: any, actual: any) => acumulador + actual.total,
      0
    );
    setTotal(totalVentas);
  }, [carrito]);

  const fun = () => {
    console.log(carrito);
  };

  const confirmarSales = () => {
    let obj = {
      type: "sales",
      categoria: "sales",
      totals: total,
      products: carrito,
      concepto: "lslls",
    };
    console.log(obj);
  };

  return (
    <div className="flex ">
      <section className=" mx-14 mt-[100px] w-[70%]">
        <div className="flex flex-col mb-5">
          <TextField
            size="small"
            className=" w-[100%]"
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

          <FormControl className="w-[25%] !mt-5" size="small">
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

        <div className="iudHkp">
          <div className="hNbxXQ">
            <div className="tyle">
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
              <button onClick={() => fun()}>dddddddddddddd</button>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-[70px] w-[30%] bvRDGf ">
        <div className="flex flex-row justify-between my-6 px-5 border-b pb-3 ">
          <p className=" text-2xl font-bold">Canasta</p>
          <Button
            onClick={() => {
              setCarrito([]);
              setCantidad(1);
            }}
            disabled={carrito.length <= 0}
            className="!underline !font-bold"
          >
            Vaciar Canasta
          </Button>
        </div>
        <div className="h-full overflow-y-auto">
          {carrito.length <= 0 ? (
            <div className="flex items-center flex-col mt-20">No hay Nada</div>
          ) : (
            <div>
              {carrito.map((el: any) => (
                <div className="flex justify-between border-b-2 mx-5 mt-5">
                  <div className="flex items-center mb-5">
                    <DeleteIcon
                      color="error"
                      className="hover:text-red-400 cursor-pointer"
                    />

                    <div className="">
                      <img
                        className=" w-20 "
                        src="../../public/search-fail.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="mb-2 font-bold ">{el.name}</p>
                      <p className=" text-xs font-sans">
                        {el.cantidadDisp} Unidades disponibles
                      </p>
                      <p className="mt-3 font-bold">$ {el.precioUnitario}</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-36  items-center mt-4">
                    <div className=" flex border w-full p-2 justify-between">
                      <span
                        onClick={() => {
                          console.log(el);
                          console.log(carrito);
                        }}
                        className="border rounded-xl font-bold px-1 hover:bg-slate-100 cursor-pointer"
                      >
                        -
                      </span>

                      <input
                        onChange={(e) => {
                         // setCantidad(parseInt(e.target.value));
                          actualizarCantidad({
                            ...el,
                            cantidad: parseInt(e.target.value),
                            cantidadDisp:
                              el.cantidadDisp - Number(parseInt(e.target.value) - 1),
                            id: el.id,
                          });
                        }}
                        className="w-14 flex text-center"
                        type="text"
                        value={el.cantidad}
                      />

                      <span
                        onClick={() => {
                          setCantidad(cantidad + 1);
                          actualizarCantidad({
                            ...el,
                            cantidad: el.cantidad + 1,
                            cantidadDisp: el.cantidadDisp - 1,
                            id: el.id,
                          });
                        }}
                        className="border rounded-xl px-1 font-bold hover:bg-slate-100 cursor-pointer"
                      >
                        +
                      </span>
                    </div>
                    <p className="mt-2 font-bold">
                      {" "}
                      = {el.precioUnitario * el.cantidad}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col a my-6 ">
          <div className="flex justify-between mt-5 mx-5 mb-3">
            <p className=" text-xl font-bold">Total</p>
            <p className=" text-xl font-bold">$ {total}</p>
          </div>
          <Button
            onClick={() => confirmarSales()}
            className={`!py-3  !mx-5 ${
              carrito.length <= 0
                ? "bg-amber-100 !text-gray-500   "
                : "!bg-amber-400"
            } !font-bold !text-black`}
            size="large"
            variant="contained"
            disabled={carrito.length <= 0}
          >
            Confirmar productos
          </Button>
        </div>
      </section>
    </div>
  );
};

export { Sales };
