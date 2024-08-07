import { Options } from "./ui/options";
import { InputSizes } from "./ui/sizes";
import { ZipButton } from "./ui/zip-button";
import { AdBanner } from "./ui/adsense/ad-banner";
import { ImageZone } from "./ui/image-zone";

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
        <ImageZone />
      </section>
      <section id="download">
        <ZipButton />
      </section>
      <section id="pub">
        <AdBanner dataAdFormat="auto" dataFullWidthResponsive={true} />
      </section>
    </main>
  );
}
