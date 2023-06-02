export const NavBar = () => {
  return (
    <header className="top-0 w-full sticky h-16 border-b border-gray-2 bg-nav backdrop-blur-nav backdrop-saturate-nav z-10 flex items-center px-6">
      <li className="list-none flex gap-4 text-gray-11 font-light text-sm">
        <ul className="hover:text-foreground transition-colors duration-150 ease-in-out">
          <a href="/">Home</a>
        </ul>
        <ul className="hover:text-foreground transition-colors duration-150 ease-in-out">
          <a href="/dashboard">Dashboard</a>
        </ul>
      </li>
    </header>
  );
};
