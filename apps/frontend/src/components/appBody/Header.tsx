/**
 * @file Header.tsx
 * @description The application header with sticky positioning.
 */
'use client';
import React from "react";
import { useRouter } from "next/navigation";


const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header>
      <div className="w-full flex justify-center gap-4">
        <a href="/">Home</a> | <a href="/admin">Admin</a> | <a href="/?movie=12/aa">Movie 12</a> | <a href="/?movie=56">Movie 56</a>
      </div>
    </header>
  );
};

export default Header;