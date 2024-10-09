"use client";
import { Card, Button } from "@material-tailwind/react";
import { InputDefault } from "./InputDefault";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMediaQuery } from "@/app/services/hooks/useMediaQuery";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaDefault } from "./TextareaDefault";
import { RegisterFormSchema } from "@/app/services/yupSchema/ContactFormSchema";
import { UseFormInterface } from "@/app/services/interfaces/UseFormInterface";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const isMobile = useMediaQuery("(max-width: 700px)");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseFormInterface>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit: SubmitHandler<UseFormInterface> = async (data, e) => {
    e?.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          tel: data.phoneNumber,
          project: data.project,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then((res) => {
        console.log("SUCCESS!");
      })
      .catch((err) => {
        console.log("FAILED...", err.text);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className=" flex gap-10 p-5">
        <div className={`flex gap-4 ${isMobile && "flex flex-col gap-10"}`}>
          <InputDefault
            label="Votre prénom"
            name="firstname"
            type="text"
            register={register}
            errors={errors}
          />
          <InputDefault
            label="Votre nom"
            name="lastname"
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
