"use client";

import { Input } from "@/components/ui/input";
import { ChangeEvent, useEffect, useState } from "react";

export function InputFile() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    let objectUrl = "";
    if (image) objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

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
      ></Input>
      <img src={preview} alt="salurt" />
    </>
  );
}
