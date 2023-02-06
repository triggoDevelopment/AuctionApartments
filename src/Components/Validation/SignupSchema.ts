import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const SignupSchema = yup.object().shape({
  firstName: yup.string().min(3, "minimum 3").max(10).required(),
  lastName: yup.string().min(3, "minimum 3").max(10).required(),
  email: yup.string().email().required(),
  userName: yup.string().min(3, "minimum 3").max(10).required(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .label("confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
