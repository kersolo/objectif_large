import { InputDefaultInterface } from "@/app/services/interfaces/InputDefaultInterface";
import { Input } from "@material-tailwind/react";

export function InputDefault({ label, name, type }: InputDefaultInterface) {
  return <Input label={label} name={name} type={type} />;
}
