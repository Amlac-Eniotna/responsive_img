"use client";

import { Button } from "@/components/ui/button";
import { createZip } from "../services/zip";
import { useAppSelector } from "@/lib/hooks";

export function ZipButton() {
  //@ts-ignore
  const images: {
    url: string;
    height: number;
    width: number;
  }[] = useAppSelector((state) => state.sizes.images);
  //@ts-ignore
  const widthOrHeight: string = useAppSelector(
    (state) => state.sizes.widthHeight,
  );

  function handleClick() {
    createZip(images, widthOrHeight);
  }

  return <Button onClick={handleClick}>Download ZIP</Button>;
}
