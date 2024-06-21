export function convert(file: any, hOrW: string, size: number) {
  if (file) {
    const reader = new FileReader();
    reader.onload = obj;
    reader.readAsDataURL(file);

    function obj() {
      const img = new Image();
      img.onload = go;
      img.src = reader.result;

      function go() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 1920;
        canvas.height = 1080;
        ctx.drawImage(img, 0, 0, 1920, 1080);

        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/webp");
        a.download = "converted.webp";
        a.click();
        a.remove();
      }
    }
  }
}
