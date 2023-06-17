import classNames from "classnames";
import { Button } from "./Button";
import { GridCircle } from "./Grid";

export const Hero = async () => {
  return (
    <div
      className={classNames(
        /* base styles */
        "relative text-center flex flex-col items-center",
        /* grid styling */
        "before:absolute before:h-[1px] before:bg-gridline before:bg-[length:5px_1px] before:top-0 before:left-[-75px]",
        /* grid animation */
        "before:grid-fade before:animate-grid before:delay-[0.15s]"
      )}
    >
      <div
        className={classNames(
          //   base styling
          "absolute left-0 top-[-75px] w-[1px] bg-gridlinevert h-full bg-[length:1px_5px]",
          //   grid vertical animation
          "grid-fade-vert animate-gridvert delay-[0.55s]"
        )}
      />
      <GridCircle rotated={false} top={true} />
      <h1
        className={classNames(
          //   base text styling
          "w-full relative font-sans p-6 text-hero lg:leading-hero md:leading-[60px] leading-[55px] bg-hero text-transparent bg-clip-text font-extrabold tracking-[-0.035em]",
          //   gridline styling
          "after:absolute after:h-[1px] after:bg-gridline after:bg-[length:5px_1px] after:bottom-[-0.1px] after:left-[-75px] after:w-gridline",
          // grid line animation
          "after:grid-fade after:animate-grid after:delay-[0.25s]"
        )}
      >
        Prepare for Interviews Together
      </h1>
      <div>
        <p
          className={classNames(
            //   base text styling
            "relative text-gray-11 text-subheading py-10 px-8 font-light tracking-[-0.01em]",
            //   gridline styling
            "after:absolute after:h-[1px] after:bg-gridline after:bg-[length:5px_1px] after:bottom-[-0.1px] after:left-[-75px]",
            // grid line animation
            "after:grid-fade after:animate-grid after:delay-[0.35s]"
          )}
        >
          Struggling to prepare for coding interviews? Find an interview partner
          to practice and hold yourself accountable, for one question at a time
          or a season long cycle of preparation. Connect, discuss and grow
          together.
        </p>
      </div>
      <div
        className={classNames(
          //   base styling
          "flex flex-col",
          //   gridline styling
          "after:absolute after:h-[1px] after:bg-gridline after:bg-[length:5px_1px] after:bottom-[-0.1px] after:left-[-75px] after:w-gridline",
          // grid line animation
          "after:grid-fade after:animate-grid after:delay-[0.25s]"
        )}
      >
        <div className="relative flex gap-4 p-10">
          <GridCircle rotated={true} top={false} />
          <div
            className={classNames(
              //   gridline styling
              "md:absolute md:visible invisible right-[-0.1px] top-[-5px] w-[1px] bg-gridlinevertreverse h-full bg-[length:1px_5px]",
              //   grid animation
              "grid-fade-vert animate-gridvertsmall delay-[0.65s]"
            )}
          />
          <div
            className={classNames(
              //   base styling
              "left-0 top-[-5px] w-[1px] bg-gridlinevert h-full bg-[length:1px_5px] md:absolute md:visible invisible",
              //   grid vertical animation
              "grid-fade-vert animate-gridvertsmall delay-[0.55s]"
            )}
          />
          <Button href={"/start"} variant={"secondary"}>
            Get Started
          </Button>
          <Button href={"/guide"} variant={"primary"}>
            Prep Guide
          </Button>
        </div>
      </div>
      {/* TODO: Make a separate component out of the gridline using cva */}
      <div
        className={classNames(
          //   gridline styling
          "absolute right-[-0.1px] top-[-75px] w-[1px] bg-gridlinevert h-full bg-[length:1px_5px]",
          //   grid animation
          "grid-fade-vert animate-gridvert delay-[0.65s]"
        )}
      />
    </div>
  );
};
