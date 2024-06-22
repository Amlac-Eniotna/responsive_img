"use client";

import { useAppSelector } from "@/lib/hooks";
import { convert } from "../services/convert";
import { useEffect, useState } from "react";

export function DisplayImage() {
  //@ts-ignore
  const numberOfImage: number = useAppSelector(
    (state) => state.sizes.numberOfInput,
  );
  const file = useAppSelector((state) => state.sizes.file);
  //@ts-ignore
  const sizes: number[] = useAppSelector((state) => state.sizes.inputValue);
  //@ts-ignore
  const widthOrHeight: string = useAppSelector(
    (state) => state.sizes.widthHeight,
  );

  const [datas, setDatas] = useState([{ width: 1, height: 1, url: "" }]);
  const data = [{ width: 1, height: 1, url: "" }];

  useEffect(() => {
    for (let i = 0; i < numberOfImage; i++) {
      data[i] = convert(file, widthOrHeight, sizes[i]);
      setDatas(data);
    }
  }, [file, numberOfImage, widthOrHeight, sizes]);

  return (
    <div className="flex w-max items-center gap-8 p-4 pb-6">
      {datas.map((data, i) => {
        const ratio = data ? Math.round((data.width * 288) / data.height) : 384;
        {
          return (
            <div
              key={i}
              className="relative h-[288px] overflow-hidden rounded-md border border-slate-400 bg-white"
              style={{ width: `${ratio}px` }}
            >
              {data ? (
                <>
                  <p className="absolute mt-4 bg-slate-900/50 px-1 text-white">
                    {`${data.width} x ${data.height}`}
                  </p>
                  <img
                    src={data.url}
                    className="h-full w-full overflow-hidden object-cover"
                    style={{ imageRendering: "pixelated" }}
                  />
                </>
              ) : null}
            </div>
          );
        }
      })}
    </div>
  );
}
