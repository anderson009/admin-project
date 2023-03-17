import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const drawerWidth = 470;

const drawerStyle = {
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    backgroundColor: "rgb(255, 255, 255)",
    boxSizing: "border-box",
  },
};

interface Props {
  data: any[];
}

const Canasta = (props: Props): JSX.Element => {
  const { data = [] } = props;
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
          <div className="flex flex-col h-screen">
            <Toolbar />
            <div className="flex flex-row justify-between my-6 mx-5">
              <p className=" text-2xl font-bold">Canasta</p>
              <Button disabled className="!underline !font-bold">
                Vaciar Canasta
              </Button>
            </div>
            <Divider />

            {data.length <= 0 ? (
              <div className="grow flex justify-center mt-20">
                <p>No hay nada</p>
              </div>
            ) : (
              <div className="grow">
                {data.map((el: any) => (
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
                        <p className=" text-xs font-sans">{el.cantidadDisp} Unidades disponibles</p>
                        <p className="mt-3 font-bold">$ {el.precioUnitario}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-36  items-center mt-4">
                      <div className=" flex border w-full p-2 justify-between">
                        <span className="border rounded-xl font-bold px-1 hover:bg-slate-100 cursor-pointer">
                          -
                        </span>

                        <input
                          className="w-14 flex text-center"
                          type="text"
                          value={5}
                        />

                        <span className="border rounded-xl px-1 font-bold hover:bg-slate-100 cursor-pointer">
                          +
                        </span>
                      </div>
                      <p className="mt-2">Total</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Divider />

            <div className="flex flex-col mx-5 my-6 relative">
              <div className="flex justify-between mb-3">
                <p className=" text-xl font-bold">Total</p>
                <p className=" text-xl font-bold">$ 0</p>
              </div>
              <Button
                // onClick={() => navigate('createSales')}
                className={`!py-3 ${
                  data.length <= 0
                    ? "bg-amber-100 !text-gray-500   "
                    : "!bg-amber-400"
                } !font-bold !text-black`}
                size="large"
                variant="contained"
                disabled={data.length <= 0}
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
