import { InputFile } from "./options/inputFile";
import { NumberOfValue } from "./options/numberOfValue";
import { Quality } from "./options/quality";
import { WidthHeight } from "./options/widthHeight";

export function Options() {
  return (
    <>
      <InputFile />
      <Quality />
      <NumberOfValue />
      <WidthHeight />
    </>
  );
}
