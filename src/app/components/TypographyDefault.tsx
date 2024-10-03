import { Typography } from "@material-tailwind/react";
import { TypographyDefaultInterface } from "../services/interfaces/TypographyDefaultInterface";

export function TypographyDefault({
  children,
  variant,
  className,
}: TypographyDefaultInterface) {
  return (
    <>
      {children.map((el, index) => (
        <Typography
          key={index}
          variant={variant}
          className={`paragraph text-2xl ${className}`}
        >
          {el}
        </Typography>
      ))}
    </>
  );
}
