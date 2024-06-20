import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  onClick: any;
  // any props that come into the component
}

function Button({ className, children, onClick }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
