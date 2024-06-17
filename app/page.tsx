import { Options } from "./ui/options";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { InputSizes } from "./ui/sizes";

export default function Home() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col gap-8 p-8">
      <section id="option" className="flex items-center gap-8">
        <Options />
      </section>
      <section id="size" className="flex flex-wrap items-center gap-8">
        <InputSizes />
      </section>
      <section id="canvas">
        <ScrollArea className="whitespace-nowrap rounded-md border">
          <div className="flex w-max items-center gap-8 p-4 pb-6">
            <div className="relative h-72 w-96 rounded border border-slate-400 bg-white">
              <p className="absolute mt-4 bg-slate-900/50 px-1 text-white">
                1920 x 1080
              </p>
            </div>
            <div className="relative h-72 w-96 rounded border border-slate-400 bg-white">
              <p className="absolute mt-4 bg-slate-900/50 px-1 text-white">
                1920 x 1080
              </p>
            </div>
          </div>
          <ScrollBar orientation="horizontal" className="mx-4 my-1 h-4" />
        </ScrollArea>
      </section>
      <section id="download">
        <Button>Download ZIP</Button>
      </section>
    </main>
  );
}
