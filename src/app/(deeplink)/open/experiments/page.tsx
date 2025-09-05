"use client";

import { useEffect } from "react";

export default function ClientOpen() {
  const deeplink = "ameego://?route=experiments";

  useEffect(() => {
    window.location.replace(deeplink);
  }, [deeplink]);

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
