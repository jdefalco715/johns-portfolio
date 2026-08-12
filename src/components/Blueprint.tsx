import { ElementType, ComponentPropsWithoutRef } from "react";

type BlueprintProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Wraps content in the design system's "blueprint" frame — a hairline border
 * plus four corner registration marks. The marks are easy to forget by hand,
 * so this component always renders them.
 */
export default function Blueprint<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: BlueprintProps<T>) {
  const Component = as || "div";
  return (
    <Component className={`blueprint ${className}`.trim()} {...rest}>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
      {children}
    </Component>
  );
}
