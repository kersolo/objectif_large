import { TextareaDefaultInterface } from "@/app/services/interfaces/InputDefaultInterface";
import { Textarea } from "@material-tailwind/react";
import { FieldValues } from "react-hook-form";

export function TextareaDefault<T extends FieldValues>({
  label,
  name,
  register,
  errors,
}: TextareaDefaultInterface<T>) {
  return (
    <div>
      <Textarea label={label} resize {...register(name)} />
      {errors && (
        <small className="text-red-600 ml-small">{errors[name]?.message}</small>
      )}
    </div>
  );
}
