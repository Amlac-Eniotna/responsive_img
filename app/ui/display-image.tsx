"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export function DisplayImage() {
  //@ts-ignore
  const numberOfImage: number = useAppSelector(
    (state) => state.sizes.numberOfInput,
  );

  const imageData = [
    { src: "https://image.jpg", size: "1920 x 1080" },
    { src: "https://image.jpg", size: "1920 x 1080" },
    { src: "https://image.jpg", size: "1920 x 1080" },
  ];

  const images = [];
  for (let i = 0; i < numberOfImage; i++) {
    images.push(
      <div
        key={i}
        className="relative h-72 w-96 rounded-md border border-slate-400 bg-white"
      >
        <p className="absolute mt-4 bg-slate-900/50 px-1 text-white">
          {imageData[i] ? imageData[i].size : null}
        </p>
        {imageData[i] ? <img src={imageData[i].src} /> : null}
      </div>,
    );
  }

  return (
    <div className="flex w-max items-center gap-8 p-4 pb-6">
      {images.map((image) => {
        {
          return image;
        }
      })}
    </div>
  );
}
