import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface InputDefaultInterface<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  register: UseFormRegister<T>;
  errors?: any;
}

export interface TextareaDefaultInterface<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: any;
}
