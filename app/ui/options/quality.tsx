"use client";

import { Slider } from "@/components/ui/slider";
import { useAppDispatch } from "@/lib/hooks";
import { quality } from "@/lib/sizes/sizes.actions";
import { useEffect, useState } from "react";

export function Quality() {
  const dispatch = useAppDispatch();
  const [qualityState, setQualityState] = useState(0.8);

  useEffect(() => {
    dispatch(quality(qualityState));
  });

  function handleChange(e: any) {
    setQualityState(e[0]);
  }

  return (
    <div className="flex items-center gap-4">
      <p>quality : {qualityState}</p>
      <Slider
        defaultValue={[0.8]}
        max={1}
        step={0.1}
        onValueChange={handleChange}
        className="w-72"
      />
    </div>
  );
}
