import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../../services/api/auth";
import { validationSchema } from "./form_validators";

const Register = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const registeruser = async (data: any): Promise<void> => {
    try {
      const response = await AuthService.registerUser(data);
      console.log(response);
      
      navigate('/admin/dashboard', { replace: true });
    } catch (error: any) {
      console.log(error);
      const { response } = error;
      if (response.status === 401) {
        return setOpen(true);
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
      company: "",
    },
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema,

    onSubmit: async (values) => {
      registeruser(values);
    },
  });
  return (
    <div className="flex w-full min-h-screen flex-row p-4">
      <div className="w-1/3 bg-amber-100 justify-center flex items-center flex-col rounded-3xl relative overflow-hidden">
        <div>Container image</div>
        <div>Container image</div>
      </div>
      <div className="w-4/6 justify-center items-center flex">
        <div className="w-2/5      ">
          <img
            src="https://react-material.fusetheme.com/assets/images/logo/logo.svg"
            alt=""
          />

          <p className="text-2xl font-bold mb-6 ">Registrate para comenzar</p>
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
                  (formik.touched.email ?? false) &&
                  Boolean(formik.errors.email)
                }
                helperText={
                  (formik.touched.email ?? false) && formik.errors.email
                }
              />

              <TextField
                className="!mt-8"
                fullWidth
                id="company"
                name="company"
                label="company"
                type="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                error={
                  (formik.touched.company ?? false) &&
                  Boolean(formik.errors.company)
                }
                helperText={
                  (formik.touched.company ?? false) && formik.errors.company
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
                Registrarse
              </Button>
            </form>

            <p className="text-lg  ">
              ¿Ya tienes cuenta en Treinta?{" "}
              <Link to={'/login'} className="text-blue-500 text-lg hover:text-blue-700 hover:text-xl   ">
                Iniciar sesión
              </Link>
            </p>
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
        </div>
      </div>
    </div>
  );
};

export { Register };
