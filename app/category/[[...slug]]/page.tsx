import Header from "@/components/Header";
import Paginate from "@/components/Paginate";
import Link from "next/link";

export default function CategoryDetailPage({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  return (
    <>
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
          <li className="">
            <Link href="/" className="hover:text-red-600">
              分类1-1-1
            </Link>
          </li>
        </ul>
      </div>
      <div className="container mx-auto max-w-7xl my-6">
        <div className="border">
          <div className="grid grid-cols-12 text-sm border-b last:border-none ">
            <div className="col-span-2 bg-[#f3f3f3] p-3 border-r">品牌：</div>
            <ul className="col-span-10 grid grid-cols-8 gap-2 p-3">
              <li>
                <Link href="/" className="text-blue-600 hover:text-red-600">
                  品牌1
                </Link>
              </li>
              <li>
                <Link href="/" className="text-blue-600 hover:text-red-600">
                  品牌2
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-12 text-sm border-b last:border-none ">
            <div className="col-span-2 bg-[#f3f3f3] p-3 border-r">品牌：</div>
            <ul className="col-span-10 grid grid-cols-8 gap-2 p-3">
              <li>
                <Link href="/" className="text-blue-600 hover:text-red-600">
                  品牌1
                </Link>
              </li>
              <li>
                <Link href="/" className="text-blue-600 hover:text-red-600">
                  品牌2
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-12 text-sm border-b last:border-none ">
            <div className="col-span-2 bg-[#f3f3f3] p-3 border-r">品牌：</div>
            <ul className="col-span-10 grid grid-cols-8 gap-2 p-3">
              <li>
                <Link href="/" className="text-blue-600 hover:text-red-600">
                  品牌1
                </Link>
              </li>
              <li>
                <Link href="/" className="text-blue-600 hover:text-red-600">
                  品牌2
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <ul className="grid grid-cols-5 gap-4 my-3">
          <li className="p-3 bg-[#f5f5f5] overflow-hidden">
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
          <li className="p-3 bg-[#f5f5f5] overflow-hidden">
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
          <li className="p-3 bg-[#f5f5f5] overflow-hidden">
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
          <li className="p-3 bg-[#f5f5f5] overflow-hidden">
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
          <li className="p-3 bg-[#f5f5f5] overflow-hidden">
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
          <li className="p-3 bg-[#f5f5f5] overflow-hidden">
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
          <li className="p-3 bg-[#f5f5f5] overflow-hidden">
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
          <li className="p-3 bg-[#f5f5f5] overflow-hidden">
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

        <Paginate />
      </div>
    </>
  );
}
