import Link from "next/link";
import { Status } from "./Status";

export const Announcement = () => {
  return (
    <Link
      className="p-2 flex items-center gap-2 leading-4 rounded-full bg-gray-1 border-gray-2 border text-gray-11 transition-colors duration-300 ease-out hover:border-gray-3"
      href={"/updates"}
    >
      <Status status={"beta"} />
      <span className="text-xs">Plutus is in Beta</span>
      <span>
        <svg
          data-testid="geist-icon"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          className="w-[14px] h-[14px]"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16l4-4-4-4"></path>
          <path d="M8 12h8"></path>
        </svg>
      </span>
    </Link>
  );
};
