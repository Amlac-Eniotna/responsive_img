import Script from "next/script";

export function AdSense() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_PID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
