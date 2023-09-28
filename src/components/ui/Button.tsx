import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  // any props that come into the component
}

function Button({ className, children }: Props) {
  return <button className={className}>{children}</button>;
}

export default Button;
