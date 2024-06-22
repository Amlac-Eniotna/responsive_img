"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { convert } from "../services/convert";
import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/sizes/sizes.actions";

export function DisplayImage() {
  //@ts-ignore
  const numberOfImage: number = useAppSelector(
    (state) => state.sizes.numberOfInput,
  );
  //@ts-ignore
  const file: string = useAppSelector((state) => state.sizes.file);
  //@ts-ignore
  const sizes: number[] = useAppSelector((state) => state.sizes.inputValue);
  //@ts-ignore
  const widthOrHeight: string = useAppSelector(
    (state) => state.sizes.widthHeight,
  );

  const dispatch = useAppDispatch();

  const [datas, setDatas] = useState<
    { url: string; width: number; height: number }[]
  >([]);

  useEffect(() => {
    dispatch(images(datas));
  }, [datas, dispatch]);

  useEffect(() => {
    if (file && sizes.length > 0 && numberOfImage > 0) {
      const fetchData = async () => {
        const data = [];
        for (let i = 0; i < numberOfImage; i++) {
          try {
            const convertedData = await convert(file, widthOrHeight, sizes[i]);
            data.push(convertedData);
          } catch (error) {
            console.error("Error converting image:", error);
          }
        }
        setDatas(data);
      };
      fetchData();
    }
  }, [file, numberOfImage, widthOrHeight, sizes]);

  return (
    <div className="flex w-max items-center gap-8 p-4 pb-6">
      {datas.map((data: { url: string; width: number; height: number }, i) => {
        const ratio = data ? Math.ceil((data.width * 288) / data.height) : 384;
        return (
          <div
            key={i}
            className="relative h-72 w-96 overflow-hidden rounded-md border border-slate-400 bg-white"
            style={{ width: `${ratio}px` }}
          >
            <p className="absolute z-50 mt-4 bg-slate-900/50 px-1 text-white">
              {`${data.width} x ${data.height}`}
            </p>
            <Image
              src={data.url}
              className="h-full w-full overflow-hidden object-cover"
              fill={true}
              style={{ imageRendering: "pixelated" }}
              alt="Converted"
            />
          </div>
        );
      })}
    </div>
  );
}
