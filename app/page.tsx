import { Input } from "@/components/ui/input";
import { Options } from "./ui/options";

export default function Home() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col gap-8 p-8">
      <section id="option" className="flex items-center gap-8">
        <Options />
      </section>
      <section id="size" className="flex items-center gap-8">
        <Input
          type="number"
          placeholder="px"
          className="w-24"
          min={1}
          max={4999}
        ></Input>
        <Input
          type="number"
          placeholder="px"
          className="w-24"
          min={1}
          max={4999}
        ></Input>
        <Input
          type="number"
          placeholder="px"
          className="w-24"
          min={1}
          max={4999}
        ></Input>
        <Input
          type="number"
          placeholder="px"
          className="w-24"
          min={1}
          max={4999}
        ></Input>
        <Input
          type="number"
          placeholder="px"
          className="w-24"
          min={1}
          max={4999}
        ></Input>
        <Input
          type="number"
          placeholder="px"
          className="w-24"
          min={1}
          max={4999}
        ></Input>
      </section>
      <section id="canvas"></section>
      <section id="download"></section>
    </main>
  );
}
