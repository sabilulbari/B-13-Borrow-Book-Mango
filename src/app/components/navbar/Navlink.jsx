"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }) => {
    const currenyPath = usePathname();

    const isMatch = href === currenyPath;
  return <Link className={`${isMatch? "border-b-2 border-blue-500":""}`} href={href}>{children}</Link>;
};

export default Navlink;
