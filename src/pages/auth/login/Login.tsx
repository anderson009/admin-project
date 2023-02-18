import { TextField, Button, Card } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "./form_validator";
import { AuthService } from "../../../services/api/auth";

const Login = () => {
  const navigate = useNavigate();

  const login = async (data: any): Promise<void> => {
    try {
      const response = await AuthService.login(data);
      console.log(response);

      navigate("/admin/dashboard", { replace: true });
    } catch (error: any) {
      console.log(error);
      const { response } = error;
      if (response.status === 401) {
        //  return setOpen(true);
      } else {
        // eslint-disable-next-line no-useless-return
        return;
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema,

    onSubmit: async (values) => {
      login(values);
    },
  });

  return (
    <div className="w-full bg-amber-100  justify-center min-h-screen flex items-center flex-col rounded-3xl relative overflow-hidden">
      <Card className="w-1/3 justify-center flex items-center flex-col !p-8 !rounded-2xl ">
        <img
          src="https://react-material.fusetheme.com/assets/images/logo/logo.svg"
          alt=""
        />

        <p className="text-3xl font-bold mb-6 ">Inicia sesion</p>
        <p className="text-sm text-gray-500">Enter your details below.</p>
        <br />

        <div>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={
                (formik.touched.email ?? false) && Boolean(formik.errors.email)
              }
              helperText={
                (formik.touched.email ?? false) && formik.errors.email
              }
            />

            <TextField
              className="!mt-8"
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={
                (formik.touched.password ?? false) &&
                Boolean(formik.errors.password)
              }
              helperText={
                (formik.touched.password ?? false) && formik.errors.password
              }
            />

            <Button
              disabled={!formik.isValid}
              className={`!mt-8 !h-12 !py-4 !px-3 !mb-10 !font-bold !bg-amber-400 ${
                !formik.isValid ? "!bg-slate-300 !text-gray-500" : null
              } !text-black`}
              variant="contained"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </form>

          {/* <Snacbar
            duration={3000}
            vertical={'top'}
            horizontal={'center'}
            title={'Credenciales Erroneas'}
            type={'error'}
            open={open}
            setOpen={setOpen}
          /> */}
        </div>
        <p className="text-lg  ">
          ¿No tienes cuenta en Treinta?{" "}
          <Link
            to={"/register"}
            className="text-blue-500 text-lg hover:text-blue-700 hover:text-xl   "
          >
            Registrate
          </Link>
        </p>
      </Card>
    </div>
  );
};

export { Login };
