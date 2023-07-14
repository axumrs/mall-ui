import Link from "next/link";
import React from "react";

export default function Breadcrumb() {
  return (
    <div className="bg-[#e3e4e5] text-[#999] text-sm">
      <ul className="flex justify-start items-center py-3 container mx-auto max-w-7xl ">
        <li className="after:content-['>'] after:mx-2">
          <Link href="/" className="hover:text-red-600">
            分类1
          </Link>
        </li>
        <li className="after:content-['>'] after:mx-2">
          <Link href="/" className="hover:text-red-600">
            分类1-1
          </Link>
        </li>
        <li className="">分类1-1-1</li>
      </ul>
    </div>
  );
}
