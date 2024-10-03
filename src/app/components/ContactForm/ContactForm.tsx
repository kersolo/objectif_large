import { Card, Button, Textarea } from "@material-tailwind/react";
import { InputDefault } from "./InputDefault";
import { SubmitHandler, useForm } from "react-hook-form";

export type InputType = {
  lastname: string;
  firstname: string;
  phoneNumber: string;
  email: string;
  project: string;
};

export function ContactForm() {
  //TEST EmailJS pour envoyer data du form à l'adress mail

  const { register, handleSubmit } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className=" flex gap-10 p-5">
        <div className="md:flex md:gap-4">
          <InputDefault
            label="Votre nom"
            name="lastname"
            type="text"
            register={register}
          />
          <InputDefault
            label="Votre prénom"
            name="firstname"
            type="text"
            register={register}
          />
        </div>
        <InputDefault
          label="Votre numéro de téléphone"
          name="phoneNumber"
          type="tel"
          register={register}
        />
        <InputDefault
          label="Votre email"
          name="email"
          type="email"
          register={register}
        />
        <Textarea name="project" resize label="Votre projet, parlons-en !..." />
        <Button type="submit">Envoyer</Button>
      </Card>
    </form>
  );
}
