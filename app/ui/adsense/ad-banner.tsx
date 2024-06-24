"use client";

import { useEffect } from "react";

type AdBannerTypes = {
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

export function AdBanner({
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      );
    } catch (error: any) {
      console.error(error.message);
    }
  });

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_PID}`}
      data-ad-slot={`${process.env.NEXT_PUBLIC_GOOGLE_AD_SLOT}`}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
}
