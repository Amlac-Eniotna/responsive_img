import JSZip from "jszip";
import { saveAs } from "file-saver";

export async function createZip(
  images: { url: string; width: number; height: number }[],
  widthOrHeight: string,
) {
  const zip = new JSZip();
  const name = `${createName()}`;

  for (const image of images) {
    const base64Data = image.url.split(",")[1];
    const binaryData = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryData.length; i++) {
      uintArray[i] = binaryData.charCodeAt(i);
    }

    zip.file(
      `${name}_${widthOrHeight == "width" ? `w_${image.width}` : `h_${image.height}`}px.webp`,
      uintArray,
      { binary: true },
    );
  }

  const content = await zip.generateAsync({ type: "blob" });

  saveAs(content, "images.zip");
}

function createName() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
