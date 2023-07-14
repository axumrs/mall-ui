import Link from "next/link";
import React from "react";

export default function Paginate() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <ul className="flex justify-start items-center space-x-1">
        <li>
          <Link
            href="/"
            className="block w-full px-3 py-1 bg-gray-50 border hover:bg-white hover:text-red-600"
          >
            上一页
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="block w-full px-3 py-1 bg-gray-50 border hover:bg-white hover:text-red-600"
          >
            1
          </Link>
        </li>
        <li>
          <span className="block w-full px-3 py-1  border bg-white text-red-600">
            2
          </span>
        </li>
        <li>
          <Link
            href="/"
            className="block w-full px-3 py-1 bg-gray-50 border hover:bg-white hover:text-red-600"
          >
            3
          </Link>
        </li>
        <li>
          <span className="block w-full px-3 py-1 text-gray-600">...</span>
        </li>
        <li>
          <Link
            href="/"
            className="block w-full px-3 py-1 bg-gray-50 border hover:bg-white hover:text-red-600"
          >
            下一页
          </Link>
        </li>
      </ul>
      <div className="flex justify-start items-center space-x-2">
        <div>共100页</div>
        <div className="flex justify-start items-center space-x-1">
          <div>
            转到
            <input className="border outline-none w-10 p-1" />页
          </div>
          <button className="px-3 py-1 bg-gray-50 border hover:bg-gray-100">
            确定
          </button>
        </div>
      </div>
    </div>
  );
}
