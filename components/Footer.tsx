import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#eaeaea]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-5 p-6">
          <div>
            <img
              src="https://file.axum.rs/asset/logo.png"
              className="w-20 object-cover grayscale"
            />
          </div>
          <ul>
            <li className="font-semibold">购物指南</li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                购物流程
              </a>
            </li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                会员简介
              </a>
            </li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                常见问题
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-semibold">物流配送</li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                运费说明
              </a>
            </li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                关税说明
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-semibold">帮助中心</li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                付款方式
              </a>
            </li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                价格保证
              </a>
            </li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                账户安全
              </a>
            </li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                隐私协议
              </a>
            </li>
          </ul>
          <ul>
            <li className="font-semibold">联系我们</li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                客服联络
              </a>
            </li>
            <li className="my-1 text-sm">
              <a href="" className="hover:text-red-600">
                商务合作
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
