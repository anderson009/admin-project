import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import Navbar from "../../components/drawer";
//import PermanentDrawerRight from "../layout/PermanentDrawerRight/Navbar";
import SearchIcon from "@mui/icons-material/Search";

const Sales = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col w-full">
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
      <Navbar />
    </div>
  );
};

export { Sales };
