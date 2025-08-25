import { type ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  StartIcon?: ReactNode;
  EndIcon?: ReactNode;
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const VariantStyles = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-blue-300 text-white",
};

const DefaultStyles = "rounded-md p-2 flex items-center justify-center";

const DefaultSize = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

export const Button = (props: ButtonProps) => {
  const classes = clsx(
    VariantStyles[props.variant],
    DefaultStyles,
    DefaultSize[props.size],
    props.fullWidth && "w-full"
  );

  return (
    <button onClick={props.onClick} className={classes}>
      {props.StartIcon && <div className="pr-2">{props.StartIcon}</div>}
      {props.text}
      {props.EndIcon && <div className="pl-2">{props.EndIcon}</div>}
    </button>
  );
};
