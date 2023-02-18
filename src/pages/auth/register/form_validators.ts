import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().required().email('Email is required'),
  password: yup.string().required('Password is required'),
  company: yup.string().required('company is required'),

});
