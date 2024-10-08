import { InputDefaultInterface } from "@/app/services/interfaces/InputDefaultInterface";
import { Input } from "@material-tailwind/react";
import { FieldValues } from "react-hook-form";

export function InputDefault<T extends FieldValues>({
  label,
  name,
  type,
  register,
  errors,
}: InputDefaultInterface<T>) {
  return (
    <div>
      <Input label={label} type={type} {...register(name)} />
      {errors && (
        <small className="text-red-600 ml-small">{errors[name]?.message}</small>
      )}
    </div>
  );
}
