"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <Input
        type="file"
        placeholder="px"
        className="max-w-72"
        min={1}
        max={4999}
      ></Input>
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
