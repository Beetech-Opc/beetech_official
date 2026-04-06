import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Shield, FileText, Database, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "নীতিমালা ও গোপনীয়তা নীতি | Policy",
  description:
    "Beetech Communication OPC — নীতিমালা, গোপনীয়তা নীতি এবং তথ্য প্রক্রিয়াকরণ নীতি। Privacy Policy, Terms of Service and Data Processing Policy.",
};

export default function PolicyPage() {
  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10">
            <Shield className="size-7 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            নীতিমালা ও গোপনীয়তা নীতি
          </h1>
          <p className="mt-3 text-muted-foreground">
            Policy, Privacy &amp; Data Processing
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            সর্বশেষ আপডেট: এপ্রিল ২০২৬
          </p>
        </div>

        {/* ─── Section 1: নীতিমালা (Policy) ─── */}
        <article className="space-y-6">
          <SectionHeader icon={FileText} title="নীতিমালা (Policy)" />
          <p className="leading-relaxed text-muted-foreground">
            Beetech ব্যবহার করার মাধ্যমে আপনি নিম্নোক্ত নীতিমালা মেনে চলতে সম্মত
            হচ্ছেন।
          </p>

          <ol className="list-none space-y-4 pl-0">
            <PolicyItem number="১">
              কাস্টমার বিটেক আউটলেট থেকে বাংলাদেশ আইনানুযায়ী সকল বৈধ পণ্য বা
              সেবা ক্রয় করবে।
            </PolicyItem>

            <PolicyItem number="২">
              আউটলেট থেকে পণ্য বা সেবার লভ্যাংশের নির্ধারিত শতাংশ (%) অথবা চুক্তি
              অনুযায়ী নির্দিষ্ট (Fixed) পরিমাণ টাকা পয়েন্ট হিসেবে সংগ্রহ করবে।
            </PolicyItem>

            <PolicyItem number="৩">
              পণ্য বা সেবা ক্রয়ের মাধ্যমেই পয়েন্ট সংগ্রহ করবে।
            </PolicyItem>

            <PolicyItem number="৪">
              যখন কেনাকাটার মাধ্যমে ১০০ পয়েন্ট সংগ্রহ হবে তখন একজন কাস্টমার
              ক্লাব মেম্বার হবে।
            </PolicyItem>

            <PolicyItem number="৫">
              ক্লাব মেম্বার হলে ২ টি ইনকাম পাবে।
              <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                <li>
                  <strong>ক) ক্লাব ইনকাম।</strong> কোম্পানীর লভ্যাংশের অংশীদার
                  হবেন। ১০ নং বোনাস পাওয়া পর্যন্ত।
                </li>
                <li>
                  <strong>খ) ক্লাব বোনাস।</strong> অনির্ধারিত সময়ে প্রতিষ্ঠানের
                  সেলসের উপর ভিত্তি করে পর্যায়ক্রমে ১৫টি বোনাস পাবেন।
                </li>
              </ul>
            </PolicyItem>

            <PolicyItem number="৬">
              যে কোনো ইনকাম সিস্টেম থেকে উইথড্র করলে ৫% সার্ভিস চার্জ হিসেবে
              কর্তন করা হবে।
            </PolicyItem>

            <PolicyItem number="৭">
              প্রতিটি কেনাকাটায় রয়েছে ইনস্ট্যান্ট ক্যাশব্যাক।
            </PolicyItem>

            <PolicyItem number="৮">
              কাস্টমার হিসেবে কেনাকাটার, ইনকাম বা বোনাসের নির্ধারিত কোন সময় সীমা
              নেই। যখন প্রয়োজন তখনই কেনাকাটা করতে পারবেন।
            </PolicyItem>

            <PolicyItem number="৯">
              কাস্টমার সর্বদা প্রতিষ্ঠানের স্বার্থের পরিপন্থী সকল প্রকার
              কার্যক্রম থেকে বিরত থাকতে হবে।
            </PolicyItem>

            <PolicyItem number="১০">
              নিবন্ধিত কাস্টমার হয়ে প্রতিষ্ঠানের স্বার্থের পরিপন্থী তথা সিস্টেম
              ব্যতিরেকে ভিন্ন প্রক্রিয়ায় কোন কাজ করলে কাস্টমারের বিরুদ্ধে
              তাৎক্ষণিকভাবে আইনানুগ ব্যবস্থা নেওয়া হবে।
            </PolicyItem>

            <PolicyItem number="১১">
              নিবন্ধিত কাস্টমার হিসেবে আপনি অত্র প্রতিষ্ঠানের বিধি বিধান মেনে
              চলতে বাধ্য থাকবেন।
            </PolicyItem>

            <PolicyItem number="১২">
              প্রতিষ্ঠানের বৃহত্তর স্বার্থে কর্তৃপক্ষ যে কোনো সময় যে কোনো
              সিদ্ধান্ত ও নীতিমালা পরিবর্তন, পরিবর্ধন, সংযোজন, বিয়োজন অথবা
              বাতিল করতে পারেন। এই ব্যাপারে কোনো আপত্তি গ্রহণযোগ্য হবে না।
            </PolicyItem>

            <PolicyItem number="১৩">
              <strong>আমাদের অঙ্গীকার</strong> — বিটেক কমিউনিকেশন ওপিসি&apos;র পক্ষ
              থেকে আপনাকে সার্বিক সহযোগীতার পূর্ণ আশ্বাস প্রদান করছি।
            </PolicyItem>
          </ol>
        </article>

        <Separator className="my-10" />

        {/* ─── Section 2: গোপনীয়তা নীতি (Privacy Policy) ─── */}
        <article className="space-y-8">
          <SectionHeader icon={Shield} title="গোপনীয়তা নীতি (Privacy Policy)" />
          <p className="leading-relaxed text-muted-foreground">
            বিটেক কমিউনিকেশন ওপিসি (&quot;বিটেক&quot;, &quot;আমরা&quot;, &quot;আমাদের&quot;) আপনার
            গোপনীয়তাকে সর্বোচ্চ গুরুত্ব দেয়। এই গোপনীয়তা নীতি বর্ণনা করে
            আমরা কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ এবং
            সুরক্ষা করি।
          </p>

          <div className="space-y-8">
            <PolicySection title="আমরা যে তথ্য সংগ্রহ করি">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <strong>ব্যক্তিগত তথ্য:</strong> নাম, ফোন নম্বর, ইমেইল ঠিকানা,
                  জাতীয় পরিচয়পত্র নম্বর (NID), ঠিকানা — যা নিবন্ধনের সময় প্রদান
                  করা হয়।
                </li>
                <li>
                  <strong>লেনদেন সম্পর্কিত তথ্য:</strong> ক্রয়ের ইতিহাস, পয়েন্ট
                  সংগ্রহ ও ব্যবহারের রেকর্ড, বোনাস ও ইনকামের হিসাব।
                </li>
                <li>
                  <strong>ডিভাইস ও ব্যবহার সম্পর্কিত তথ্য:</strong> ডিভাইসের ধরণ,
                  অপারেটিং সিস্টেম, অ্যাপ ভার্সন, আইপি অ্যাড্রেস এবং অ্যাপ
                  ব্যবহারের পরিসংখ্যান।
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="তথ্য ব্যবহারের উদ্দেশ্য">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>আপনার অ্যাকাউন্ট তৈরি ও পরিচালনা করা।</li>
                <li>পয়েন্ট, বোনাস ও ইনকাম সিস্টেম সঠিকভাবে পরিচালনা করা।</li>
                <li>লেনদেন যাচাই ও নিরাপত্তা নিশ্চিত করা।</li>
                <li>গ্রাহক সেবা প্রদান ও সমস্যা সমাধান।</li>
                <li>প্রচারমূলক অফার ও আপডেট প্রেরণ (আপনার সম্মতি সাপেক্ষে)।</li>
                <li>আইনগত বাধ্যবাধকতা পূরণ।</li>
              </ul>
            </PolicySection>

            <PolicySection title="তথ্য সংরক্ষণ ও নিরাপত্তা">
              <p className="text-muted-foreground">
                আমরা আপনার তথ্য সুরক্ষিত সার্ভারে সংরক্ষণ করি এবং শিল্প-মানের
                এনক্রিপশন ও নিরাপত্তা ব্যবস্থা ব্যবহার করি। শুধুমাত্র
                অনুমোদিত কর্মীরাই প্রয়োজনীয় তথ্যে প্রবেশ করতে পারেন। আপনার
                অ্যাকাউন্ট সক্রিয় থাকা পর্যন্ত বা আইনগত প্রয়োজন অনুসারে
                তথ্য সংরক্ষণ করা হয়।
              </p>
            </PolicySection>

            <PolicySection title="তৃতীয় পক্ষের সাথে তথ্য ভাগাভাগি">
              <p className="text-muted-foreground">
                আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না।
                তবে নিম্নোক্ত ক্ষেত্রে তথ্য শেয়ার করা হতে পারে:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                <li>আইনগত আদেশ বা সরকারি নির্দেশনা মেনে চলার জন্য।</li>
                <li>
                  পেমেন্ট প্রসেসিং পার্টনারদের সাথে — বিকাশ (bKash), উপায় (Upay)
                  পেমেন্ট গেটওয়ের মাধ্যমে (শুধুমাত্র লেনদেন সম্পন্ন করার জন্য)।
                </li>
                <li>
                  বিটেকের পক্ষে সেবা প্রদানকারী প্রতিষ্ঠানের সাথে (কঠোর
                  গোপনীয়তা চুক্তির অধীনে)।
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="আপনার অধিকার">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>আপনার তথ্য দেখার ও সংশোধন করার অধিকার।</li>
                <li>
                  আপনার অ্যাকাউন্ট মুছে ফেলার অনুরোধ করার অধিকার (আইনগত
                  বাধ্যবাধকতা সাপেক্ষে)।
                </li>
                <li>প্রচারমূলক বার্তা থেকে সদস্যতা বাতিল করার অধিকার।</li>
                <li>
                  আপনার তথ্য কীভাবে ব্যবহার হচ্ছে তা জানার অধিকার।
                </li>
              </ul>
            </PolicySection>
          </div>
        </article>

        <Separator className="my-10" />

        {/* ─── Section 3: তথ্য প্রক্রিয়াকরণ নীতি (Data Processing Policy) ─── */}
        <article className="space-y-8">
          <SectionHeader icon={Database} title="তথ্য প্রক্রিয়াকরণ নীতি (Data Processing Policy)" />
          <p className="text-sm text-muted-foreground">
            আন্তর্জাতিক তথ্য সুরক্ষা মানদণ্ড অনুসারে প্রণীত
          </p>

          <div className="space-y-8">
            <PolicySection title="তথ্য সংগ্রহের ধরণ ও উদ্দেশ্য">
              <div className="overflow-x-auto rounded-xl border border-border/60">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted/60">
                      <th className="p-4 text-left font-semibold text-foreground">তথ্যের ধরণ</th>
                      <th className="p-4 text-left font-semibold text-foreground">সংগ্রহের উদ্দেশ্য</th>
                      <th className="p-4 text-left font-semibold text-foreground">ট্র্যাকিংয়ে ব্যবহৃত?</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {[
                      ["নাম ও যোগাযোগ তথ্য", "অ্যাকাউন্ট তৈরি ও পরিচালনা", "না"],
                      ["ফোন নম্বর", "পরিচয় যাচাই ও OTP", "না"],
                      ["ইমেইল ঠিকানা", "অ্যাকাউন্ট পুনরুদ্ধার ও বিজ্ঞপ্তি", "না"],
                      ["ক্রয়ের ইতিহাস", "পয়েন্ট গণনা ও বোনাস নির্ধারণ", "না"],
                      ["ডিভাইস আইডেন্টিফায়ার", "অ্যাপ কার্যকারিতা ও নিরাপত্তা", "না"],
                      ["ব্যবহারের পরিসংখ্যান", "অ্যাপ উন্নতি ও বাগ সমাধান", "না"],
                    ].map(([type, purpose, tracking], i) => (
                      <tr key={i} className="border-t border-border/40 hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium text-foreground/80">{type}</td>
                        <td className="p-4">{purpose}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
                            <span className="size-1.5 rounded-full bg-emerald-500" />
                            {tracking}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </PolicySection>

            <PolicySection title="তথ্য প্রক্রিয়াকরণের আইনগত ভিত্তি">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  <strong>সম্মতি:</strong> নিবন্ধনের সময় আপনি স্বেচ্ছায় তথ্য
                  প্রদান করেন এবং এই নীতিমালায় সম্মত হন।
                </li>
                <li>
                  <strong>চুক্তি পূরণ:</strong> সেবা প্রদানের জন্য তথ্য
                  প্রক্রিয়াকরণ অপরিহার্য।
                </li>
                <li>
                  <strong>আইনগত বাধ্যবাধকতা:</strong> বাংলাদেশের ডিজিটাল নিরাপত্তা
                  আইন ও অন্যান্য প্রযোজ্য আইন মেনে চলা।
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="তথ্য সংরক্ষণের সময়কাল">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  আপনার অ্যাকাউন্ট সক্রিয় থাকা পর্যন্ত ব্যক্তিগত তথ্য সংরক্ষণ
                  করা হয়।
                </li>
                <li>
                  অ্যাকাউন্ট বন্ধ করার অনুরোধের পর ৩০ দিনের মধ্যে ব্যক্তিগত তথ্য
                  মুছে ফেলা হয়। তবে টিম সিকোয়েন্স ও সিরিয়াল ট্র্যাকিংয়ের
                  জন্য আইডি নম্বর সংরক্ষিত থাকবে।
                </li>
                <li>
                  লেনদেন সম্পর্কিত রেকর্ড আইনানুসারে নির্ধারিত সময় পর্যন্ত
                  সংরক্ষণ করা হয়।
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="তথ্য স্থানান্তর">
              <p className="text-muted-foreground">
                আপনার তথ্য ইউরোপীয় ইউনিয়নে (EU) অবস্থিত সুরক্ষিত সার্ভারে
                সংরক্ষণ করা হয়, যা GDPR (General Data Protection Regulation)
                মানদণ্ড অনুসরণ করে। EU-এর কঠোর তথ্য সুরক্ষা আইনের আওতায়
                আপনার সকল ব্যক্তিগত তথ্য সর্বোচ্চ নিরাপত্তা ও গোপনীয়তার
                সাথে সংরক্ষিত থাকে। সার্ভার পরিচালনায় শিল্প-মানের এনক্রিপশন
                এবং নিরাপত্তা প্রটোকল ব্যবহার করা হয়।
              </p>
            </PolicySection>

            <PolicySection title="ব্যবহারকারীর যোগ্যতা">
              <p className="text-muted-foreground">
                সকল বয়সের ব্যবহারকারী আমাদের সেবা ব্যবহার করতে পারবেন।
                অপ্রাপ্তবয়স্ক ব্যবহারকারীদের ক্ষেত্রে অভিভাবকের তত্ত্বাবধানে
                সেবা গ্রহণ করার পরামর্শ দেওয়া হয়। সকল ব্যবহারকারীর তথ্য
                সমানভাবে সুরক্ষিত এবং গোপনীয়তার সাথে সংরক্ষণ করা হয়।
              </p>
            </PolicySection>

            <PolicySection title="তথ্য মুছে ফেলার অনুরোধ">
              <p className="text-muted-foreground">
                আপনি যেকোনো সময় আপনার ব্যক্তিগত তথ্য মুছে ফেলার অনুরোধ করতে
                পারেন। এজন্য অ্যাপের সেটিংস থেকে &quot;অ্যাকাউন্ট মুছুন&quot; অপশন
                ব্যবহার করুন অথবা আমাদের সাথে সরাসরি যোগাযোগ করুন। অনুরোধ
                প্রাপ্তির ৩০ দিনের মধ্যে আপনার ব্যক্তিগত তথ্য মুছে ফেলা হবে।
                তবে টিম সিকোয়েন্স ও সিরিয়াল ব্যবস্থাপনার জন্য আপনার আইডি
                নম্বর সিস্টেমে সংরক্ষিত থাকবে।
              </p>
            </PolicySection>

            <PolicySection title="কুকিজ ও ট্র্যাকিং প্রযুক্তি">
              <p className="text-muted-foreground">
                আমাদের অ্যাপ ও ওয়েবসাইটে কুকিজ এবং অনুরূপ প্রযুক্তি ব্যবহার
                করা হতে পারে অ্যাপের কার্যকারিতা উন্নত করার জন্য। আমরা তৃতীয়
                পক্ষের বিজ্ঞাপন ট্র্যাকিং ব্যবহার করি না। আমরা আপনার অনুমতি
                ছাড়া কোনো ট্র্যাকিং করি না।
              </p>
            </PolicySection>

            <PolicySection title="নীতিমালা পরিবর্তন">
              <p className="text-muted-foreground">
                আমরা সময়ে সময়ে এই নীতিমালা আপডেট করতে পারি। গুরুত্বপূর্ণ
                পরিবর্তনের ক্ষেত্রে অ্যাপের মাধ্যমে আপনাকে অবহিত করা হবে।
                পরিবর্তনের পর অ্যাপ ব্যবহার অব্যাহত রাখলে আপনি নতুন নীতিমালায়
                সম্মত হয়েছেন বলে গণ্য হবে।
              </p>
            </PolicySection>
          </div>
        </article>

        <Separator className="my-10" />

        {/* ─── Contact Info ─── */}
        <article className="space-y-5">
          <h2 className="text-2xl font-bold">যোগাযোগ (Contact)</h2>
          <p className="text-muted-foreground">
            এই নীতিমালা সম্পর্কে কোনো প্রশ্ন বা উদ্বেগ থাকলে আমাদের সাথে
            যোগাযোগ করুন:
          </p>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-muted/50 p-6 sm:p-8 space-y-3 text-sm">
            <p className="font-semibold text-base text-foreground">
              বিটেক কমিউনিকেশন ওপিসি (Beetech Communication OPC)
            </p>
            <div className="space-y-2.5 text-muted-foreground">
              <p className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary/60 shrink-0" />
                beetech24@gmail.com
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary/60 shrink-0" />
                +880 1324-763476
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="size-4 text-primary/60 shrink-0 mt-0.5" />
                Abdul Karim Villa, 80/1 Purba Chanduna, Shibbari Mor, Gazipur Sadar, Gazipur-1700, Bangladesh
              </p>
            </div>
          </div>
        </article>

        <p className="mt-10 text-center text-xs text-muted-foreground/70">
          &copy; {new Date().getFullYear()} Beetech Communication OPC. সর্বস্বত্ব
          সংরক্ষিত।
        </p>
      </div>
    </section>
  );
}

/* ── Helper Components ── */

function SectionHeader({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="size-5 text-primary" />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

function PolicyItem({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary">
        {number}
      </span>
      <span className="leading-relaxed text-muted-foreground pt-0.5">{children}</span>
    </li>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3 rounded-2xl border border-border/40 bg-card p-6 transition-colors hover:border-border/60">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {children}
    </div>
  );
}
