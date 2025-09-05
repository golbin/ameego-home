"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function ClientOpen({ defaultId }: { defaultId: string }) {
  const search = useSearchParams();

  const id = useMemo(() => {
    const fromQuery = search?.get("id") ?? "";
    return fromQuery || defaultId || "";
  }, [defaultId, search]);

  const deeplink = useMemo(
    () => `ameego://?ameego=${encodeURIComponent(id ?? "")}`,
    [id]
  );

  useEffect(() => {
    if (!id) return;
    // Attempt to open the app via custom scheme
    window.location.replace(deeplink);
  }, [id, deeplink]);

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-3">Opening the app...</h1>
        <p className="text-slate-600 mb-6">The Ameego app is being opened.</p>
        <div className="mt-6 flex flex-col items-center gap-2">
          <a
            href={deeplink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white text-sm sm:text-base font-medium shadow hover:bg-blue-700 active:bg-blue-800"
          >
            Open in app
          </a>
          <p className="text-xs text-slate-500">
            If it doesn&apos;t open automatically, tap the button above.
          </p>
        </div>
      </div>
    </main>
  );
}
