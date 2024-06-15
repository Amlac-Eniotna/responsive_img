"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function Options() {
  const [number, setNumber] = useState(1);

  function handleClick(btn: string) {
    if (btn === "Add") setNumber(number + 1);
    if (number > 1) {
      if (btn === "Sub") setNumber(number - 1);
    }
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <Button onClick={() => handleClick("Add")}>Add</Button>
        <p>{number}</p>
        <Button onClick={() => handleClick("Sub")}>Sub</Button>
      </div>
      <div className="flex items-center gap-4">
        <p>width</p>
        <Switch></Switch>
        <p>height</p>
      </div>
    </>
  );
}
