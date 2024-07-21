import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils";

type ProgressProps = {
  className?: string;
  value?: number; // Assuming value is a number representing percentage
} & React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, ...props }, ref) => {
    // Function to determine background color based on value
    const getIndicatorColor = (value: number) => {
      if (value >= 40) {
        return "bg-green-500 ";
      } else if (value >= 30) {
        return "bg-yellow-500";
      } else {
        return "bg-red-500";
      }
    };

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={`h-full w-full flex-1 ${getIndicatorColor(value)} transition-all  `}
          style={{ transform: `translateX(-${100 - value}%) ` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
