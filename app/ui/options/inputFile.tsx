"use client";

import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { file } from "@/lib/sizes/sizes.actions";
import { useEffect, useState } from "react";

export function InputFile() {
  const [image, setImage] = useState<any>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const reader = new FileReader();
    if (image) {
      reader.readAsDataURL(image);
      reader.onload = () => {
        //@ts-ignore
        dispatch(file(reader.result));
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
