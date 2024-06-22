"use client";

export function convert(
  file: any,
  widthOrHeight: string,
  size: number,
): { url: string; width: number; height: number } {
  const data = { url: "", width: size, height: size };
  if (size == null) size = 1;
  if (file) {
    const img = new Image();
    img.onload = function go() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      let ratio = 0;
      if (widthOrHeight === "height") {
        ratio = Math.round((img.width * size) / img.height);
        data.height = size;
        data.width = ratio;
        canvas.width = ratio;
        canvas.height = size;
      }
      if (widthOrHeight === "width") {
        ratio = Math.round((size * img.height) / img.width);
        data.width = size;
        data.height = ratio;
        canvas.width = size;
        canvas.height = ratio;
      }
      ctx.drawImage(img, 0, 0, data.width, data.height);
      data.url = canvas.toDataURL("image/webp");

      // a.click();
      // a.remove();
    };
    img.src = file;
  }
  return data;
}
