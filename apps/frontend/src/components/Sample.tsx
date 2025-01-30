import React from "react";

interface SampleProps {
  label: string;
}

// ✅ Fixed: Removed incorrect function syntax
export default function Sample({ label }: SampleProps) {
  return <button>{label}</button>;
}
