"use client";

import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function CreateFormButton({
  title,
  buttonLabel,
  className,
  children,
}: {
  title: string;
  buttonLabel: string;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="hover:cursor-pointer">
            {buttonLabel}
          </Button>
        </DialogTrigger>
        <DialogOverlay />
        <DialogContent className={className}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto">{children}</div>
        </DialogContent>
        <DialogDescription />
      </Dialog>
    </React.Fragment>
  );
}
