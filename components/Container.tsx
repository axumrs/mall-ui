import React from "react";

type ContainerProps = {
  className?: string;
} & ChildrenProps;

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`container max-w-7xl mx-auto ${className}`}>{children}</div>
  );
}
