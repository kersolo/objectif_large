"use client";
import { Card, Button } from "@material-tailwind/react";
import { InputDefault } from "./InputDefault";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMediaQuery } from "@/app/services/hooks/useMediaQuery";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaDefault } from "./TextareaDefault";
import { RegisterFormSchema } from "@/app/services/yupSchema/ContactFormSchema";
import { UseFormInterface } from "@/app/services/interfaces/UseFormInterface";

export function ContactForm() {
  const isMobile = useMediaQuery("(max-width: 700px)");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseFormInterface>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit: SubmitHandler<UseFormInterface> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className=" flex gap-10 p-5">
        <div className={`flex gap-4 ${isMobile && "flex flex-col gap-10"}`}>
          <InputDefault
            label="Votre nom"
            name="lastname"
            type="text"
            register={register}
            errors={errors}
          />
          <InputDefault
            label="Votre prénom"
            name="firstname"
            type="text"
            register={register}
            errors={errors}
          />
        </div>
        <InputDefault
          label="Votre numéro de téléphone"
          name="phoneNumber"
          type="tel"
          register={register}
          errors={errors}
        />
        <InputDefault
          label="Votre email"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />
        <TextareaDefault
          label="Votre projet, parlons-en !..."
          name="project"
          register={register}
          errors={errors}
        />
        <Button type="submit">Envoyer</Button>
      </Card>
    </form>
  );
}
