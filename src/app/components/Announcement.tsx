import { Status } from "./Status";

export const Announcement = () => {
  return (
    <button className="p-2 flex items-center gap-2 leading-4 rounded-full bg-gray-1 border-gray-2 border text-gray-11 transition-colors duration-300 ease-out hover:border-gray-3">
      <Status status={"beta"} />
      <span className="text-xs">Plutus still in active development</span>
      <span>
        <svg
          data-testid="geist-icon"
          fill="none"
          height="24"
          shape-rendering="geometricPrecision"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="24"
          className="w-[14px] h-[14px]"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </span>
    </button>
  );
};
