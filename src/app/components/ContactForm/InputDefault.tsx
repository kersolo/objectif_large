import { InputDefaultInterface } from "@/app/services/interfaces/InputDefaultInterface";
import { Input } from "@material-tailwind/react";
import { FieldValues } from "react-hook-form";

export function InputDefault<T extends FieldValues>({
  label,
  name,
  type,
  register,
}: InputDefaultInterface<T>) {
  return <Input label={label} type={type} {...register(name)} />;
}
