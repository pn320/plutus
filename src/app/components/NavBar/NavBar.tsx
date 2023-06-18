import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import classNames from "classnames";
import { ReactNode } from "react";
import { Button } from "../Button";
import { TrendUpIcon } from "../Icons/learn";

interface LinkProps {
  href: string;
  children: ReactNode;
}

const LinkElement = ({ href, children }: LinkProps) => {
  return (
    <ul className="hover:text-foreground transition-colors duration-150 ease-in-out">
      <a href={href}>{children}</a>
    </ul>
  );
};

export const NavBar = async () => {
  return (
    <header
      className={classNames(
        //   positioning
        "top-0 w-full sticky h-16 px-6",
        //   styling
        "border-b border-gray-2 bg-nav backdrop-blur-nav backdrop-saturate-nav z-10",
        // flex and center vertically
        "flex items-center justify-around"
      )}
    >
      <div>
        <li className="list-none flex gap-6 text-gray-11 font-light text-sm items-center">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <LinkElement href="/sign-in">Sign In</LinkElement>
          </SignedOut>
          <LinkElement href="/">Home</LinkElement>
          <LinkElement href="/guide">Guide</LinkElement>
          <LinkElement href="/dashboard">Dashboard</LinkElement>
        </li>
      </div>
      <div className="flex gap-4">
        <Button
          icon={<TrendUpIcon />}
          href={"/start"}
          variant={"primary"}
          size={"small"}
        >
          Practice
        </Button>
        <Button href={"/guide"} variant={"secondary"} size={"small"}>
          Learn
        </Button>
      </div>
    </header>
  );
};
