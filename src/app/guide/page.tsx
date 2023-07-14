import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col pt-24 items-center">
      <h2 className="text-black text-subheading py-10 px-8 font-light tracking-[-0.01em]">
        We&apos;re working on it, sit tight.
      </h2>
      <Image src="/illustrations/wip.png" alt="" width={360} height={360} />
    </main>
  );
}
