import type { Metadata } from "next";
import PolicyContent from "./policy-content";

export const metadata: Metadata = {
  title: "Terms & Privacy Policy",
  description:
    "Beetech Communication OPC — Terms of Service, Privacy Policy, and Data Processing Policy.",
};

export default function PolicyPage() {
  return <PolicyContent />;
}
