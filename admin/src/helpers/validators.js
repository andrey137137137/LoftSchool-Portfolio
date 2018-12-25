import { helpers } from "vuelidate/lib/validators";
import * as regexp from "@/constants/validation/regexp";

export const email = helpers.regex("email", regexp.email);
export const phone = helpers.regex("numeric", regexp.phone);
export const password = helpers.regex("alphaNum", regexp.password);
export const emailPhone = () => email || phone;
