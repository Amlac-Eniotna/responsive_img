"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { numberOfInput } from "@/lib/sizes/sizes.actions";
import { Minus, Plus } from "lucide-react";

export function NumberOfValue() {
  const dispatch = useAppDispatch();
  const [number, setNumber] = useState(1);
  useEffect(() => {
    dispatch(numberOfInput(number));
  });
  function handleClick(btn: string) {
    if (btn === "Add") setNumber(number + 1);
    if (number > 1 && btn === "Sub") setNumber(number - 1);
  }

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => handleClick("Sub")}>
        <Minus size={20} strokeWidth={2.5} />
      </Button>
      <p className="w-6 text-center">{number}</p>
      <Button onClick={() => handleClick("Add")}>
        <Plus size={20} strokeWidth={2.5} />
      </Button>
    </div>
  );
}
