import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { DynamicTable, TableConfigCells } from "./dinamyc-table";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovements } from "../store/slices/movements/Thunks";
import { useAppDispatch, useAppSelector } from "../shared/hooks";
import { headerCells } from "../pages/movements/utils/HeaderTable";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [dataHeaders, setdataHeaders] = React.useState<TableConfigCells[]>([]);

  const { movements, page, isLoading } = useAppSelector(
    (state) => state.movements
  );

  console.log(movements, isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
     setdataHeaders(headerCells(actionsTable));
  }, []);

  const actionsTable = (): JSX.Element => {
    return (
      <TrendingUpIcon />
    );
  };

  useEffect(() => {
    dispatch(getMovements());
  }, []);

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
            data={movements}
            // orderBy={orderBy}
            //orderField={orderField}
            page={page}
            //total={totalUsers}
            //rowsPerPage={rowsPerPage}
            //onSortChange={onSortChange}
            //onPageChange={onPageChange}
            //onRowsPerPageChange={onRowsPerPageChange}
          />
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
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
