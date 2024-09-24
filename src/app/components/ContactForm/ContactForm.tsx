import { Card, Button, Textarea } from "@material-tailwind/react";
import { InputDefault } from "./InputDefault";

export function ContactForm() {
  return (
    <form>
      <Card className=" flex gap-10 p-5 ">
        <div className="flex gap-4">
          <InputDefault label="Votre nom" name="lastname" type="text" />
          <InputDefault label="Votre prénom" name="firstname" type="text" />
        </div>
        <InputDefault
          label="Votre numéro de téléphone"
          name="phoneNumber"
          type="tel"
        />
        <InputDefault label="Votre email" name="email" type="email" />
        <Textarea resize label="Votre projet, parlons-en !..." />
        <Button type="submit">Envoyer</Button>
      </Card>
    </form>
  );
}
