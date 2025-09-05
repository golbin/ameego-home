"use client";

import { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function RedeemPage() {
  const params = useParams<{ code: string }>();
  const search = useSearchParams();

  const coupon = useMemo(() => {
    // Prefer path param; allow overriding via query (?coupon=...)
    const fromPath = params?.code ?? "";
    const fromQuery = search?.get("coupon") ?? "";
    return fromQuery || fromPath;
  }, [params?.code, search]);

  const deeplink = useMemo(
    () => `ameego://?coupon=${encodeURIComponent(coupon ?? "")}`,
    [coupon]
  );

  useEffect(() => {
    if (!coupon) return;
    // Attempt to open the app via custom scheme
    // Using replace avoids adding an extra history entry
    window.location.replace(deeplink);
  }, [coupon, deeplink]);

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-3">Opening the app...</h1>
        <p className="text-slate-600 mb-6">
          The coupon code{" "}
          <span className="font-mono font-medium">{coupon}</span>
          is being sent to the Ameego app.
        </p>
        <div className="space-y-3">
          <a
            href={deeplink}
            className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            If the app doesn&apos;t open, click here to open it
          </a>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  robots: { index: false },
  title: "Redeem Coupon | Ameego",
  description: "Sending the coupon to the Ameego app.",
};
