"use client";

import { Switch } from "@/components/ui/switch";
import { useAppDispatch } from "@/lib/hooks";
import { widthHeight } from "@/lib/sizes/sizes.actions";
import { useEffect, useState } from "react";

export function WidthHeight() {
  const dispatch = useAppDispatch();
  const [dimension, setDimension] = useState("width");

  useEffect(() => {
    dispatch(widthHeight(dimension));
  });

  function handleCheck(e: boolean) {
    if (e === false) setDimension("width");
    if (e === true) setDimension("height");
  }

  return (
    <div className="flex items-center gap-4">
      <p>width</p>
      <Switch defaultChecked={false} onCheckedChange={handleCheck} />
      <p>height</p>
    </div>
  );
}
