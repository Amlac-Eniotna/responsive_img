export function Header() {
  return (
    <header className="bg-gradient-to-b from-slate-200 from-95%">
      <div className="m-auto w-full max-w-screen-xl px-8 py-7">
        <h1 className="sr-only">Responsive IMG</h1>
        <h1 className="text text-4xl font-black">{"Responsive <img/>"}</h1>
        <p className="mt-0.5 text-slate-600">
          Your <strong className="font-normal">images</strong> are{" "}
          <strong className="font-normal">converted</strong> to the{" "}
          <strong>WEBP</strong> format.
        </p>
      </div>
    </header>
  );
}
