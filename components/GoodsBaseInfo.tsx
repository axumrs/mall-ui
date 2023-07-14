"use client";

import React, { useState } from "react";
import Address from "./Address";

type GoodsBaseInfoProps = {} & ClassNameProps;

export default function GoodsBaseInfo({ className = "" }: GoodsBaseInfoProps) {
  const [currentImg, setCurrentImg] = useState("/sp1.png");
  return (
    <div className={`grid grid-cols-3 gap-x-2 ${className}`}>
      <div className="col-span-1">
        <div>
          <img src={currentImg} className="object-cover" alt="商品名称" />
        </div>
        <ul className="my-3 flex overflow-x-auto justify-start items-center space-x-1">
          <li className="shrink-0">
            <button
              onClick={() => {
                setCurrentImg("/sp1.png");
              }}
              className={`border-2 ${
                currentImg === "/sp1.png"
                  ? "border-red-400"
                  : "border-transparent"
              }`}
            >
              <img src="/sp1.png" className="w-12 object-cover" />
            </button>
          </li>
          <li className="shrink-0">
            <button
              onClick={() => {
                setCurrentImg("/sp2.png");
              }}
              className={`border-2 ${
                currentImg === "/sp2.png"
                  ? "border-red-400"
                  : "border-transparent"
              }`}
            >
              <img src="/sp2.png" className="w-12 object-cover" />
            </button>
          </li>
          <li className="shrink-0">
            <button
              onClick={() => {
                setCurrentImg("/sp3.png");
              }}
              className={`border-2 ${
                currentImg === "/sp3.png"
                  ? "border-red-400"
                  : "border-transparent"
              }`}
            >
              <img src="/sp3.png" className="w-12 object-cover" />
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-2 flex flex-col">
        <div>
          <h1 className="text-lg font-bold">商品名称</h1>
          <Row label="价格" className="py-3">
            <span className="text-red-600">￥ 1234</span>
          </Row>
          <Row label="配送至" className="py-3">
            <Address />
          </Row>
          <hr />
          <Row label="颜色" className="py-3">
            <button className="border px-3 py-1 mr-1 last:mr-0">红</button>
            <button className="border px-3 py-1  border-red-600 mr-1 last:mr-0">
              黄
            </button>
            <button className="border px-3 py-1 mr-1 last:mr-0">蓝</button>
          </Row>
          <Row label="尺码" className="py-3">
            <button className="border px-3 py-1 mr-1 last:mr-0">L</button>
            <button className="border px-3 py-1 mr-1 last:mr-0">XL</button>
            <button className="border px-3 py-1 border-red-600 mr-1 last:mr-0">
              2XL
            </button>
          </Row>
        </div>
        <div className="py-3">
          <input type="number" className="border outline-none p-1" />
          <button className="px-3 py-1 border bg-violet-700 text-white text-lg hover:bg-violet-800">
            加入购物车
          </button>
        </div>
      </div>
    </div>
  );
}

type RowProps = {
  label: string;
} & ChildrenProps &
  ClassNameProps;
function Row({ label, children, className = "" }: RowProps) {
  return (
    <div className={`grid grid-cols-4 ${className}`}>
      <div className="col-span-1">{label}</div>
      <div className="col-span-3">{children}</div>
    </div>
  );
}
