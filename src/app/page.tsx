export default function Home() {
  return (
    <main className="w-full mx-auto max-w-hero mt-40 isolate px-14">
      <div className="relative text-center flex flex-col items-center before:absolute before:h-[1px] before:bg-gridline before:bg-[length:5px_1px] before:grid-fade before:animate-grid before:delay-[0.15s] before:top-0 before:left-[-75px]">
        <h1 className="font-sans p-6 lg:text-hero md:text-6xl leading-hero bg-hero text-transparent bg-clip-text font-extrabold tracking-[-0.035em]">
          The Finance Toolkit for Everyone
        </h1>
        <div>
          <p className="text-gray-11 text-subheading py-10 px-8 font-light tracking-[-0.01em]">
            A complete finance framework to monitor, analyse and manage your
            personal finances. Split bills, monitor your expenses, set up
            recurring expenses to be split, and integrate with almost every
            financial provider you can think of.
          </p>
        </div>
      </div>
    </main>
  );
}
