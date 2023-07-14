import {
  HomeIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <div className="bg-[#e3e4e5] text-[#999]">
        <div className="container max-w-7xl mx-auto flex justify-between items-center text-xs">
          <ul className="flex justify-start items-center space-x-2">
            <li className="py-1">
              <Link
                href="/"
                className="flex justify-start items-center space-x-0.5 group"
              >
                <span>
                  <HomeIcon className="w-4 h-4" />
                </span>
                <span className="group-hover:text-red-600">首页</span>
              </Link>
            </li>
            <li className="relative group hover:bg-white py-1 px-2 border border-[#e3e4e5] hover:border-gray-300">
              <button
                type="button"
                className="flex justify-start items-center space-x-0.5 "
              >
                <span>
                  <MapPinIcon className="w-4 h-4" />
                </span>
                <span>广东</span>
              </button>
              <div className="absolute border bg-white p-3 w-max z-10 hidden group-hover:block top-6 border-t-0 -left-px ">
                <ul className="grid grid-cols-5 w-full">
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      北京
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      上海
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      天津
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      重庆
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      河北
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      山西
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      河南
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      辽宁
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      吉林
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      黑龙江
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      内蒙古
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      山东
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      江苏
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      安徽
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      浙江
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      福建
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      湖南
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      湖北
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 bg-red-600 text-white"
                    >
                      广东
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      广西
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      江西
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      四川
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      海南
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      贵州
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      云南
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      西藏
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      陕西
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      青海
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      甘肃
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      宁夏
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      新疆
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      中国香港
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      中国澳门
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      中国台湾
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="px-3 py-1 hover:text-red-600 hover:bg-gray-100"
                    >
                      钓鱼岛
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <ul className="flex justify-start items-center space-x-2">
            <li className="py-1">
              <Link href="/" className="hover:text-red-600">
                你好，请登录
              </Link>
            </li>
            <li className="py-1">
              <Link href="/" className="text-red-600">
                免费注册
              </Link>
            </li>
            <li className=" py-1 px-2">
              <Link href="/">我的订单</Link>
            </li>
            <li className="py-1 group relative border px-2 border-[#e3e4e5] hover:border-gray-300 hover:bg-white">
              <Link href="/">个人中心</Link>
              <ul className="absolute  grid-cols-2 gap-2 bg-white border p-2 w-max top-6 border-t-0 -left-px border-gray-300 hidden group-hover:grid z-10 ">
                <li>
                  <Link href="/" className="hover:text-red-600">
                    所有订单
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-red-600">
                    收货地址
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-red-600">
                    售后服务
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-red-600">
                    账号安全
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto my-6 flex justify-between items-center">
        <Link href="/" className="flex justify-start items-center space-x-2">
          <img
            src="https://file.axum.rs/asset/logo.png"
            className="w-8 object-cover"
            alt=""
          />
          <h2 className="text-xl font-bold">AXUM商城</h2>
        </Link>

        <div className="relative group">
          <button className="flex justify-start items-center space-x-1">
            <span>全部分类</span>
            <span>
              <ChevronDownIcon className="w-4 h-4 transition-all group-hover:rotate-180 " />
            </span>
          </button>
          <ul className="absolute p-3 border bg-white w-max z-10 shadow transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
            <li>
              <Link href="/" className="hover:text-red-600">
                分类1
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-red-600">
                分类2
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-red-600">
                分类3
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-red-600">
                分类4
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-red-600">
                分类5
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <input className="border outline-none p-1 w-96" />
          <button className="bg-violet-700 text-white px-3 py-1 hover:bg-violet-800">
            搜索
          </button>
        </div>
        <Link
          href="/"
          className="px-3 py-2 border text-violet-700 flex justify-start items-center text-lg"
        >
          <div>购物车</div>
          <div className="relative">
            <ShoppingCartIcon className="w-7 h-7" />
            <span className="absolute -top-1/3 -right-1/2 w-3 h-3 flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
