import React from "react";

type SectionHeaderProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return <h2 className="text-3xl font-medium mb-8">{children}</h2>;
}
