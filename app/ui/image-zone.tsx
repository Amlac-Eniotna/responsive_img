"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DisplayImage } from "./display-image";
import { useAppSelector } from "@/lib/hooks";

export function ImageZone() {
  //@ts-ignore
  const originalResolution: string = useAppSelector(
    (state) => state.sizes.originalResolution,
  );

  return (
    <ScrollArea className="h-[370px] whitespace-nowrap rounded-md border">
      <p className="z-50 mt-4 w-min bg-slate-900/50 px-1 text-center text-white">
        original : {originalResolution}
      </p>
      <DisplayImage />
      <ScrollBar orientation="horizontal" className="mx-4 my-1 h-4" />
    </ScrollArea>
  );
}
