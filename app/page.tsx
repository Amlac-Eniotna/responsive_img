import { Options } from "./ui/options";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { InputSizes } from "./ui/sizes";
import { DisplayImage } from "./ui/display-image";
import { ZipButton } from "./ui/zip-button";

export default function Home() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col gap-8 p-8">
      <section id="option" className="flex flex-wrap items-center gap-8">
        <Options />
      </section>
      <section id="size" className="flex flex-wrap items-center gap-8">
        <InputSizes />
      </section>
      <section id="canvas">
        <ScrollArea className="h-[330px] whitespace-nowrap rounded-md border">
          <DisplayImage />
          <ScrollBar orientation="horizontal" className="mx-4 my-1 h-4" />
        </ScrollArea>
      </section>
      <section id="download">
        <ZipButton />
      </section>
    </main>
  );
}
