import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";

export function DialogDefault({ open }: { open: boolean }) {
  const handleOpen = () => open;

  return (
    <>
      <Button type="submit" onClick={handleOpen} variant="gradient">
        Envoyer
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="text-black">
          Votre message à été envoyé avec succès !!
        </DialogHeader>
        <DialogBody className="text-black">
          Nous allons étudier votre message et nous reviendrons vers vous le
          plus rapidement possible.
          <br /> Bonne journée à vous !!
        </DialogBody>
        <DialogFooter>
          <Link href={"/"}>
            <Button onClick={handleOpen} variant="gradient">
              revenir à la pge d'accueil
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </>
  );
}
