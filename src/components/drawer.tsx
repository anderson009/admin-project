import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";;
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";

const drawerWidth = 470;

const drawerStyle = {
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    backgroundColor: "rgb(255, 255, 255)",
    boxSizing: "border-box",
  },
};

const Canasta = (): JSX.Element => {
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

            <div className="grow flex flexcol justify-center mt-20">
              No hay nada
            </div>

            <Divider />

            <div className="flex flex-col mx-5 my-6">
              <div className="flex justify-between mb-3">
                <p className=" text-xl font-bold">Total</p>
                <p className=" text-xl font-bold">$ 0</p>
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

export default Canasta;
