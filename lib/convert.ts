const convert = {
  reader: null,
  img: null
  read: () => {
    convert.reader = new FileReader();
    convert.reader.onload = convert.obj;
    convert.reader.readAsDataURL(document.getElementById("cFile").files[0]);
    return false;
  },

  obj: () => {
    convert.img = new Image();
    convert.img.onload = convert.go;
    convert.img.src = convert.reader.result;
  },

  go: () => {
    let canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d")

    canvas.width = convert.img.width;
    canvas.height = convert.img.height;
    ctx?.drawImage(convert.img, 0 ,0)
  }
};
