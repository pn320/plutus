import { GridCircle } from "./components/GridCircle";

export default function Home() {
  return (
    <main className="w-full mx-auto max-w-hero mt-40 isolate px-14">
      <div className="relative text-center flex flex-col items-center before:absolute before:h-[1px] before:bg-gridline before:bg-[length:5px_1px] before:grid-fade before:animate-grid before:delay-[0.15s] before:top-0 before:left-[-75px]">
        <div className="absolute left-0 top-[-75px] w-[1px] bg-gridlinevert h-full bg-[length:1px_5px] grid-fade-vert animate-gridvert delay-[0.55s]" />
        <GridCircle />
        <h1 className="w-full relative font-sans p-6 lg:text-hero md:text-6xl leading-hero bg-hero text-transparent bg-clip-text font-extrabold tracking-[-0.035em] after:absolute after:h-[1px] after:bg-gridline after:bg-[length:5px_1px] after:grid-fade after:animate-grid after:delay-[0.25s] after:bottom-[-0.1px] after:left-[-75px] after:w-gridline">
          The Finance Toolkit for Everyone
        </h1>
        <div>
          <p className="relative text-gray-11 text-subheading py-10 px-8 font-light tracking-[-0.01em] after:absolute after:h-[1px] after:bg-gridline after:bg-[length:5px_1px] after:grid-fade after:animate-grid after:delay-[0.35s] after:bottom-[-0.1px] after:left-[-75px]">
            A complete finance framework to monitor, analyse and manage your
            personal finances. Split bills, monitor and set up recurring
            expenses, and integrate with almost every financial provider you can
            think of.
          </p>
        </div>
        <div className="flex justify-center items-center h-20 delay-[0.45s]"></div>
        <div className="absolute right-[-0.1px] top-[-75px] w-[1px] bg-gridlinevert h-full bg-[length:1px_5px] grid-fade-vert animate-gridvert delay-[0.65s" />
      </div>
    </main>
  );
}
