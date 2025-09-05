import type { Metadata } from "next";
import ClientOpen from "./ClientOpen";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Redeem Coupon | Ameego",
  description: "Sending the coupon to the Ameego app.",
};

export default async function RedeemPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  return <ClientOpen defaultCoupon={code} />;
}
