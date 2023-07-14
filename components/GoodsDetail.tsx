"use client";

import React, { useState } from "react";

type GoodsDetailProps = {} & ClassNameProps;

export default function GoodsDetail({ className = "" }: GoodsDetailProps) {
  const [activeTab, setActiveTab] = useState("intro");
  return (
    <div className={`${className}`}>
      <ul className="cursor-pointer border-b border-violet-700 flex justify-start items-center pl-8 space-x-1">
        <li
          className={`border border-b-0 px-3 py-1 ${
            activeTab === "intro"
              ? "bg-violet-700 text-white border-violet-700"
              : ""
          }`}
          onClick={() => {
            setActiveTab("intro");
          }}
        >
          商品介绍
        </li>
        <li
          className={`border border-b-0 px-3 py-1 ${
            activeTab === "comment"
              ? "bg-violet-700 text-white border-violet-700"
              : ""
          }`}
          onClick={() => {
            setActiveTab("comment");
          }}
        >
          评价
        </li>
      </ul>
      <div className={`${activeTab === "intro" ? "block" : "hidden"}`}>
        商品介绍111
      </div>
      <div className={`${activeTab === "comment" ? "block" : "hidden"}`}>
        评价111
      </div>
    </div>
  );
}
