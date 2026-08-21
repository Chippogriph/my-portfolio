import { ContainerProps } from "@/types/ContainerProps";

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      {children}
    </div>
  );
}