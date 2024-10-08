import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NavBarItemInterface } from "../services/interfaces/NavBarItemInterface";

export default function NavBarItem({
  pathName,
  name,
  onclick,
}: NavBarItemInterface) {
  const pathname = usePathname();
  return (
    <Typography
      as="li"
      variant="small"
      color="white"
      className="flex items-center gap-x-2 p-1 font-medium"
    >
      <Link
        onClick={onclick}
        className={`link ${pathname === pathName && "text-blue-600 "}`}
        href={pathName}
      >
        {name}
      </Link>
    </Typography>
  );
}
