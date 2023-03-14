import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import "./navbar.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useMemo } from "react";
import { Button } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LoginIcon from "@mui/icons-material/Login";

const drawerWidth = 470;

// class li item
const ButtonMenu = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
  borderRadius: "8px",

  "&:hover": {
    backgroundColor: "rgba(234, 234, 255, 0.05)",
  },
}));

const drawerStyle = {
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    backgroundColor: "rgb(255, 255, 255)",
    boxSizing: "border-box",
  },
};

const Navbar = (): JSX.Element => {
  return (
    <Box sx={{ display: "flex" }} className="nav-bar-root">
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          anchor="right"
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            ...drawerStyle,
          }}
          open
        >
          <div className="flex flex-col h-full">
            <Toolbar />
            <div className="flex flex-row justify-between my-6 mx-5">
              <p className=" text-2xl font-bold">Canasta</p>
              <Button disabled className="!underline !font-bold">
                Vaciar Canasta
              </Button>
            </div>
            <Divider />

            <div className="grow	">No hay nada</div>

         

            <Divider />

            <div className="flex flex-col mx-5 my-6">
              <div className="flex justify-between">
                <p>f</p>
                <p>ff</p>
              </div>
              <Button
               // onClick={() => navigate('createSales')}
                className="!py-3 !bg-amber-400 !font-bold !text-black"
                size="large"
                variant="contained"
               // color="warning"
              >
                Confirmar productos
              </Button>
            </div>
          </div>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
