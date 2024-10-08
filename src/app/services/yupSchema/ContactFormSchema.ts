import { number, object, string } from "yup";

export const RegisterFormSchema = object({
  lastname: string().required("Votre nom est requis"),
  firstname: string().required("Votre prénom est requis"),
  phoneNumber: string().required("Votre numéro de téléphone"),
  email: string()
    .required("L'email est requis")
    .email("L'email n'est pas valide"),
  project: string().required("Votre projet, parlons-en !..."),
}).required();
