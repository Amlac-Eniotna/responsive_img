"use client";

import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { file, originalResolution } from "@/lib/sizes/sizes.actions";
import { useEffect, useState } from "react";

export function InputFile() {
  const [image, setImage] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const reader = new FileReader();
    if (image) {
      reader.readAsDataURL(image);
      reader.onload = () => {
        //@ts-ignore
        dispatch(file(reader.result));
        const img: HTMLImageElement = new Image();
        img.onload = () => {
          const width = img.naturalWidth;
          const height = img.naturalHeight;
          dispatch(originalResolution(`${width} x ${height}`));
        };
        //@ts-ignore
        img.src = reader.result;
      };
    }
  }, [image, dispatch]);

  function handleChange(e: any) {
    setImage(e.target.files[0]);
  }

  return (
    <>
      <Input
        type="file"
        onChange={handleChange}
        placeholder="px"
        className="max-w-72"
        min={1}
        max={4999}
        accept="image/*"
      ></Input>
    </>
  );
}
