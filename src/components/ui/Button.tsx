import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  onClick?: any;
  disabled?: boolean;
  // any props that come into the component
}

function Button({ className, children, onClick, disabled }: Props) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
