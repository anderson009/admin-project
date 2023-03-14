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

const drawerWidth = 200;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

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

const Navbar = (props: Props): JSX.Element => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const { pathname } = useLocation();
  

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate()

  const drawer = useMemo(
    () => (
      <div className="flex flex-col h-full">
        <Toolbar />
        <Divider />

        <List className="!mb-7">
          {["dashboard", "movements", "inventory"].map((text, index) => (
            <Link to={text} key={index}>
              <ListItem
                key={text}
                disablePadding
                className="px-4 hover:bg-slate-200 "
              >
                <ButtonMenu disableRipple>
                  <ListItemIcon>
                    {index === 0 ? (
                      <DashboardIcon />
                    ) : index === 1 ? (
                      <TrendingUpIcon />
                    ) : index === 2 ? (
                      <InventoryIcon />
                    ) : null}
                  </ListItemIcon>

                  <ListItemText className="capitalize " primary={text} />
                </ButtonMenu>
              </ListItem>
            </Link>
          ))}
        </List>

        <Typography className="!ml-4">Manage your clients</Typography>
        <List sx={{ flexGrow: 1 }}>
          {["clients", "providers"].map((text, index) => (
            <Link to={text} key={index}>
              <ListItem
                key={text}
                disablePadding
                className="px-4 hover:bg-slate-200 "
              >
                <ButtonMenu disableRipple>
                  <ListItemIcon>
                    {index === 0 ? (
                      <AssignmentIndIcon />
                    ) : index === 1 ? (
                      <LocalShippingIcon />
                    ) : null}
                  </ListItemIcon>

                  <ListItemText className="capitalize " primary={text} />
                </ButtonMenu>
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />

        <List>
          {["logout"].map((text, index) => (
            <Link to={text} key={index}>
              <ListItem
                key={text}
                disablePadding
                className={`!px-4 hover:bg-slate-200`}
              >
                <ButtonMenu disableRipple>
                  <ListItemIcon>
                    {index === 0 ? (
                      <LoginIcon className=" !text-red-600" />
                    ) : null}
                  </ListItemIcon>

                  <p className="capitalize text-2xl !text-red-600">{text} </p>
                </ButtonMenu>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    ),
    []
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="nav-bar-root">
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
         ml: { sm: `${drawerWidth}px` },
         zIndex: (theme) => theme.zIndex.drawer + 2
        }}
      >
        <Toolbar className="bg-white">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className="!capitalize !font-bold"
            variant="h5"
            noWrap
            sx={{ flexGrow: 1 }}
            component="div"
          >
            {pathname.slice(7)}
          </Typography>
          {pathname === "/admin/movements" ? (
            <>
              <Button
                onClick={() => navigate('createSales')}
                startIcon={<AddCircleIcon />}
                className="!mr-4"
                size="large"
                variant="contained"
                color="success"
              >
                Nueva Venta
              </Button>

              <Button
                startIcon={<RemoveCircleOutlineIcon />}
                size="large"
                variant="contained"
                color="error"
              >
                Nuevo gasto
              </Button>
            </>
          ) : null}
        </Toolbar>
        <div>
          <hr className=" h-2  bg-green-600" />
        </div>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },

            ...drawerStyle,
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            ...drawerStyle,
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
