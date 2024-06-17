"use client";

import { Input } from "@/components/ui/input";

export function InputFile() {
  return (
    <Input
      type="file"
      placeholder="px"
      className="max-w-72"
      min={1}
      max={4999}
    ></Input>
  );
}
