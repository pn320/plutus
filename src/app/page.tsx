import { Features } from "./components/Features";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <>
      <main className="w-full mx-auto max-w-hero mt-32 isolate px-14">
        <Hero />
        <Features />
      </main>
    </>
  );
}
