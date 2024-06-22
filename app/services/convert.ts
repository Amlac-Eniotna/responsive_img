"use client";

export function convert(
  file: string,
  widthOrHeight: string,
  size: number,
): Promise<{ url: string; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const data = { url: "", width: size, height: size };
    if (size == null || size < 8) size = 8;
    if (file) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        //@ts-ignore
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
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
        resolve(data);
      };
      img.onerror = reject;
      img.src = file;
    } else {
      resolve(data);
    }
  });
}
