import { Typography } from "@material-tailwind/react";
import { useMediaQuery } from "../services/hooks/useMediaQuery";

const currentYear = new Date().getFullYear();

export function Footer() {
  const isMobile = useMediaQuery("(max-width: 530px)");

  return (
    <footer className="relative w-full mt-20">
      <div className="mx-auto w-full px-8 text-center">
        <Typography
          variant="paragraph"
          className={`mx-auto text-4xl italic" ${isMobile && "text-2xl"}`}
        >
          "La Mer, bien plus qu'un métier... Une passion !..."
        </Typography>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between ">
          <Typography
            variant="small"
            className=" mx-auto mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; 2024 - {currentYear} Loïck Ferelloc. Tous droits réservés
          </Typography>
          {/* <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            reseau sociaux ?
          </div> */}
        </div>
      </div>
    </footer>
  );
}
