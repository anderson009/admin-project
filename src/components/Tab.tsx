import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { DynamicTable, TableConfigCells } from "./dinamyc-table";
import { useEffect, useState } from "react";
import { getMovements } from "../store/slices/movements/Thunks";
import { useAppDispatch, useAppSelector } from "../shared/hooks";
import { headerCells } from "../pages/movements/utils/HeaderTable";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import useTableTools from "../hooks/useTableTools";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: "100%", minWidth: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelPro {
  textSearch: string;
  filters: any;
  onChangeSearch: (value: any) => void;
}

export default function BasicTabs(props: TabPanelPro) {
  const [value, setValue] = React.useState(0);
  const [dataHeaders, setdataHeaders] = React.useState<TableConfigCells[]>([]);

  const { textSearch, onChangeSearch, filters } = props;

  const {
    onSortChange,
    onPageChange,
    onRowsPerPageChange,
    orderField,
    orderBy,
    page,
    rowsPerPage,
    setPage,
  } = useTableTools();

  const filtrsData = {
    textSearch,
    page,
    rowsPerPage,
    orderField,
    orderBy,
    filters,
  };

  const { data, isLoading } = useAppSelector((state) => state.movements);
  

  const dispatch = useAppDispatch();

  useEffect(() => {
    setdataHeaders(headerCells(actionsTable));
  }, []);

  useEffect(() => {
    value === 0 ? (filters.type = "ventas") : null;
    value === 0 ? dispatch(getMovements(filtrsData)) : null;
    value === 1 ? (filters.type = "gastos") : null;
    value === 1 ? dispatch(getMovements(filtrsData)) : null;
  }, [textSearch, filters, value]);

  const actionsTable = (row: any): JSX.Element => {
    return <PriceChangeIcon color={row.type === 'ventas' ? 'success' :  'error'} />;
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          maxWidth: "100%",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          sx={{ maxWidth: "100%" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ maxWidth: "25%" }}
            className="hover:bg-slate-200  w-6/12"
            label="Ingresos"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ maxWidth: "25%" }}
            className="hover:bg-slate-200  w-6/12 "
            label="Egresos"
            {...a11yProps(1)}
          />

          <Tab
            sx={{ maxWidth: "25%" }}
            className="hover:bg-slate-200  w-6/12 "
            label="Por cobrar"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ maxWidth: "25%" }}
            className="hover:bg-slate-200  w-6/12"
            label="Por pagar"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Card className="w-full bg-white ">
          <DynamicTable
            //  loading={loading}
            headerCells={dataHeaders}
            data={data.data}
            orderBy={orderBy}
            orderField={orderField}
            page={page}
            total={data.total}
            rowsPerPage={rowsPerPage}
            onSortChange={onSortChange}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
          />
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card className="w-full bg-white ">
          <DynamicTable
            //  loading={loading}
            headerCells={dataHeaders}
            data={data.data}
            orderBy={orderBy}
            orderField={orderField}
            page={page}
            total={data.total}
            rowsPerPage={rowsPerPage}
            onSortChange={onSortChange}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
          />
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </Box>
  );
}
