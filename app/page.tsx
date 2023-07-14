import Container from "@/components/Container";
import {
  EnvelopeIcon as UserLoginIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <div className="bg-[#f5f5f5]">
      {/* <section className="bg-[#f0f3ee]">
        <div className="container mx-auto max-w-7xl grid grid-cols-12 gap-x-2">
          <div className="col-span-2 bg-white border-b p-3">
            <a href="" className="flex justify-center items-center">
              <img
                src="https://file.axum.rs/asset/logo.png"
                className="h-32 object-cover"
                alt="AXUM商城"
              />
            </a>
          </div>
          <div className="col-span-10 flex justify-center items-center space-x-4">
            <div className="flex justify-center items-center">
              <input className=" bg-white outline-none p-2 w-96" />
              <button className="px-3 py-2 bg-violet-700 text-white hover:bg-violet-800">
                <SearchIcon className="w-6 h-6" />
              </button>
            </div>
            <a
              href=""
              className="px-3 py-2 bg-white text-violet-700 flex justify-start items-center text-lg"
            >
              <div>购物车</div>
              <div className="relative">
                <ShoppingCartIcon className="w-7 h-7" />
                <span className="absolute -top-1/3 -right-1/2 bg-violet-700 text-white text-xs rounded-full p-0.5">
                  99+
                </span>
              </div>
            </a>
          </div>
        </div>
      </section> */}
      <Hr />
      <Container className="grid grid-cols-12 gap-x-2">
        <div className="col-span-2 bg-white">
          <ul className="">
            <li className="relative group hover:bg-gray-200 p-3">
              <a href="" className="hover:text-red-600">
                分类1
              </a>
              <div className="hidden group-hover:block absolute top-0 w-96 z-10 -right-96 p-3 bg-white border shadow">
                <ul>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类1-1
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-1-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-1-2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类1-2
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-2-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-2-2
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-2-3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类1-1
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-1-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-1-2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类1-2
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-2-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-2-2
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类1-2-3
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative group hover:bg-gray-200 p-3">
              <a href="" className="hover:text-red-600">
                分类2
              </a>
              <div className="hidden group-hover:block absolute top-0 w-96 z-10 -right-96 p-3 bg-white border shadow">
                <ul>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类2-1
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-1-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-1-2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类2-2
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-2-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-2-2
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-2-3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类2-1
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-1-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-1-2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类2-2
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-2-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-2-2
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类2-2-3
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative group hover:bg-gray-200 p-3">
              <a href="" className="hover:text-red-600">
                分类3
              </a>
              <div className="hidden group-hover:block absolute top-0 w-96 z-10 -right-96 p-3 bg-white border shadow">
                <ul>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类3-1
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-1-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-1-2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类3-2
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-2-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-2-2
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-2-3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类3-1
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-1-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-1-2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="flex justify-start items-center space-x-2">
                    <a href="" className="font-semibold hover:text-red-600">
                      分类3-2
                    </a>
                    <ul className="flex justify-start items-center space-x-2 flex-wrap">
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-2-1
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-2-2
                        </a>
                      </li>
                      <li>
                        <a href="" className="hover:text-red-600">
                          分类3-2-3
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-8">
          <div className="col-span-9">
            <img src="/lbt.png" className=" object-cover" />
          </div>
        </div>
        <div className="col-span-2 bg-white p-3 overflow-hidden flex flex-col space-y-4">
          <div>欢迎来到AXUM商城</div>
          <form className="flex flex-col space-y-3">
            <div>
              <label className="flex justify-start items-center border px-3 py-1 space-x-1">
                <span className="shrink-0">
                  <UserLoginIcon className="w-5 h-5" />
                </span>
                <input
                  placeholder="邮箱地址"
                  className="w-36 outline-none p-1"
                />
              </label>
            </div>
            <div>
              <label className="flex justify-start items-center border px-3 py-1 space-x-1">
                <span className="shrink-0">
                  <KeyIcon className="w-5 h-5" />
                </span>
                <input
                  placeholder="密码"
                  type="password"
                  className="w-36 outline-none p-1"
                />
              </label>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <button className="px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                登录
              </button>
              <a
                className="px-3 py-1 bg-orange-600 text-white rounded-full hover:bg-orange-700"
                href=""
              >
                注册
              </a>
            </div>
          </form>
        </div>
      </Container>

      <Container className="mt-6">
        <h2 className="my-6 text-xl font-bold text-center before:content-['/'] after:content-['/'] before:font-mono before:text-xs before:mr-3 before:text-gray-600 after:font-mono after:text-xs after:ml-3 after:text-gray-600">
          推荐商品
        </h2>

        <ul className="grid grid-cols-5 gap-4">
          <li className="p-3 bg-white overflow-hidden">
            <a
              href=""
              className="w-full hover:text-red-600 flex flex-col space-y-2 group"
            >
              <img
                src="/sp.png"
                alt="商品"
                className="object-cover transition-all rounded group-hover:brightness-105"
              />
              <h3 className="text-gray-600 group-hover:text-red-600 w-full truncate">
                商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc
              </h3>
              <div className="text-red-600">￥1234</div>
            </a>
          </li>
          <li className="p-3 bg-white overflow-hidden">
            <a
              href=""
              className="w-full hover:text-red-600 flex flex-col space-y-2 group"
            >
              <img
                src="/sp.png"
                alt="商品"
                className="object-cover transition-all rounded group-hover:brightness-105"
              />
              <h3 className="text-gray-600 group-hover:text-red-600 w-full truncate">
                商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc
              </h3>
              <div className="text-red-600">￥1234</div>
            </a>
          </li>
          <li className="p-3 bg-white overflow-hidden">
            <a
              href=""
              className="w-full hover:text-red-600 flex flex-col space-y-2 group"
            >
              <img
                src="/sp.png"
                alt="商品"
                className="object-cover transition-all rounded group-hover:brightness-105"
              />
              <h3 className="text-gray-600 group-hover:text-red-600 w-full truncate">
                商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc
              </h3>
              <div className="text-red-600">￥1234</div>
            </a>
          </li>
          <li className="p-3 bg-white overflow-hidden">
            <a
              href=""
              className="w-full hover:text-red-600 flex flex-col space-y-2 group"
            >
              <img
                src="/sp.png"
                alt="商品"
                className="object-cover transition-all rounded group-hover:brightness-105"
              />
              <h3 className="text-gray-600 group-hover:text-red-600 w-full truncate">
                商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc
              </h3>
              <div className="text-red-600">￥1234</div>
            </a>
          </li>
          <li className="p-3 bg-white overflow-hidden">
            <a
              href=""
              className="w-full hover:text-red-600 flex flex-col space-y-2 group"
            >
              <img
                src="/sp.png"
                alt="商品"
                className="object-cover transition-all rounded group-hover:brightness-105"
              />
              <h3 className="text-gray-600 group-hover:text-red-600 w-full truncate">
                商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc
              </h3>
              <div className="text-red-600">￥1234</div>
            </a>
          </li>
          <li className="p-3 bg-white overflow-hidden">
            <a
              href=""
              className="w-full hover:text-red-600 flex flex-col space-y-2 group"
            >
              <img
                src="/sp.png"
                alt="商品"
                className="object-cover transition-all rounded group-hover:brightness-105"
              />
              <h3 className="text-gray-600 group-hover:text-red-600 w-full truncate">
                商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc
              </h3>
              <div className="text-red-600">￥1234</div>
            </a>
          </li>
          <li className="p-3 bg-white overflow-hidden">
            <a
              href=""
              className="w-full hover:text-red-600 flex flex-col space-y-2 group"
            >
              <img
                src="/sp.png"
                alt="商品"
                className="object-cover transition-all rounded group-hover:brightness-105"
              />
              <h3 className="text-gray-600 group-hover:text-red-600 w-full truncate">
                商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc
              </h3>
              <div className="text-red-600">￥1234</div>
            </a>
          </li>
          <li className="p-3 bg-white overflow-hidden">
            <a
              href=""
              className="w-full hover:text-red-600 flex flex-col space-y-2 group"
            >
              <img
                src="/sp.png"
                alt="商品"
                className="object-cover transition-all rounded group-hover:brightness-105"
              />
              <h3 className="text-gray-600 group-hover:text-red-600 w-full truncate">
                商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc商品名称abc
              </h3>
              <div className="text-red-600">￥1234</div>
            </a>
          </li>
        </ul>
      </Container>

      <Hr />
    </div>
  );
}

function Hr() {
  return <div className="before:content-[''] h-6"></div>;
}
