import { InputFile } from "./options/inputFile";
import { NumberOfValue } from "./options/numberOfValue";
import { WidthHeight } from "./options/widthHeight";

export function Options() {
  return (
    <>
      <InputFile />
      <NumberOfValue />
      <WidthHeight />
    </>
  );
}
