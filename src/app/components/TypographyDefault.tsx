import { Typography } from "@material-tailwind/react";
import { TypographyDefaultInterface } from "../services/interfaces/TypographyDefaultInterface";
import { useMediaQuery } from "../services/hooks/useMediaQuery";

export function TypographyDefault({
  children,
  variant,
  className,
}: TypographyDefaultInterface) {
  const isMobile = useMediaQuery("(max-width: 530px)");
  return (
    <>
      {children.map((el, index) => (
        <Typography
          key={index}
          variant={variant}
          className={`paragraph ${
            isMobile ? "text-xl" : "text-2xl"
          }  ${className}`}
        >
          {el}
        </Typography>
      ))}
    </>
  );
}
