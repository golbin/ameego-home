import type { Metadata } from "next";
import ClientOpen from "./ClientOpen";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Redeem Coupon | Ameego",
  description: "Sending the coupon to the Ameego app.",
};

export default function RedeemPage({ params }: { params: { code: string } }) {
  return <ClientOpen defaultCoupon={params.code} />;
}
