"use client";

import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { inputValue } from "@/lib/sizes/sizes.actions";
import { ChangeEvent, useEffect, useState } from "react";

export function InputSizes() {
  //@ts-ignore
  const numberOfInput: number = useAppSelector(
    (state) => state.sizes.numberOfInput,
  );
  const dispatch = useAppDispatch();
  const [values, setValues] = useState([8]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(inputValue(values));
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch, values]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value: number[] = [...values];
    //@ts-ignore
    const id = parseInt(e.target.dataset.id);
    if (parseInt(e.target.value) < 0) e.target.value = "8";
    if (parseInt(e.target.value) > 4999) e.target.value = "4999";
    if (e.target.value) value[id] = parseInt(e.target.value);
    setValues(value);
  }

  const inputs = [];
  for (let i = 0; i < numberOfInput; i++) {
    inputs.push(
      <Input
        key={i}
        type="number"
        placeholder="px"
        className="w-24"
        onChange={handleChange}
        min={8}
        max={4999}
        data-id={`${i}`}
      ></Input>,
    );
  }

  return (
    <>
      {inputs.map((input) => {
        {
          return input;
        }
      })}
    </>
  );
}
