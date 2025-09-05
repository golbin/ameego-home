import type { Metadata } from "next";
import ClientOpen from "./ClientOpen";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Open Ameego | Ameego",
  description: "Opening the Ameego app.",
};

export default async function OpenPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ClientOpen defaultId={id} />;
}
