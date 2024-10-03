import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full mt-20">
      <div className="mx-auto w-full px-8 ">
        <Typography
          variant="paragraph"
          className="mx-auto max-w-screen-lg text-4xl italic"
        >
          "La Mer, bien plus qu'un métier ... une passion !..."
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
