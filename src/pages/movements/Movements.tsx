import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  CardContent,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import styled from "@emotion/styled";
import Tab from "../../components/Tab";
import useChangeSearch from "../../hooks/useChangeSearch";
import useFilter from "../../hooks/useFilter";

const Movements = () => {

  const [valueFilter, setValueFilter] = useState<any>({});

  const changeValue = (key: string, value: any) => {
    setValueFilter({ ...valueFilter, [key]: value });
  };


  const { textSearch, onChangeSearch } = useChangeSearch();

  const { filters, onChangeFilter } = useFilter();

  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 300,
      fontSize: 17,
      backgroundColor: "black",
    },
  });

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row">
          <FormControl sx={{ minWidth: 220, marginRight: 3 }} size="small">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              onChange={(e: any) => onChangeFilter({type: e.target.value})}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={'ventas'}>Ventas</MenuItem>
              <MenuItem value={20}>Semanal</MenuItem>
              <MenuItem value={30}>Mensual</MenuItem>
              <MenuItem value={30}>Anual</MenuItem>
            </Select>
          </FormControl>

          <TextField
            size="small"
            onChange={onChangeSearch}
            placeholder="Busqueda por concepto"
            InputProps={{
              startAdornment: (
                <InputAdornment className="mr-5" position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      <div className="grid grid-rows-1 contenido grid-cols-3 mb-8 w-full grid-flow-col gap-7 pt-5">
        <div>
          <CustomWidthTooltip
            arrow
            title="These are the profits of your business and correspond to registered sales minus registered expenses"
          >
            <Card sx={{ display: "flex" }}>
              <TrendingUpIcon
                color="success"
                sx={{ width: 151, fontSize: 100 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Balanc
                  </Typography>
                  <Typography component="div" variant="h5">
                    $ 100
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </CustomWidthTooltip>
        </div>

        <div>
          <CustomWidthTooltip
            arrow
            title="this is the total value of sales registered in your business"
          >
            <Card sx={{ display: "flex" }}>
              <PriceChangeIcon
                color="success"
                sx={{ width: 151, fontSize: 100 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Total sales
                  </Typography>
                  <Typography color={"green"} component="div" variant="h5">
                    $ 100
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </CustomWidthTooltip>
        </div>

        <div>
          <CustomWidthTooltip
            arrow
            title="this is the total value of the expenses recorded in your business"
          >
            <Card sx={{ display: "flex" }}>
              <PriceChangeIcon
                color="error"
                sx={{ width: 151, fontSize: 100 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Total expenses
                  </Typography>
                  <Typography color={"red"} component="div" variant="h5">
                    $ 100
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </CustomWidthTooltip>
        </div>
      </div>

      <Tab textSearch={textSearch} filters={filters} onChangeSearch={onChangeSearch} />
    </div>
  );
};

export { Movements };
