import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  fname: yup.string().min(3).max(10).required(),
  lname: yup.string().min(3).max(10).required(),
});
