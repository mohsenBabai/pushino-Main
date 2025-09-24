import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  return (
    <div className="flex flex-col lg:flex-row gap-x-8 mt-10 px-4 xl:px-10  font-Dana ">
      {/* AccountSideBar in pc */}
      <div className="lg:sticky  top-0 h-fit lg:w-1/4 hidden lg:flex flex-col gap-y-4 items-center shadow rounded-lg p-4 dark:bg-gray-800 bg-white">
        {/*  Name AND Avatar */}
        <div className="w-full flex items-center justify-start border-b border-gray-200 dark:border-white/20 py-3">
          <div className="flex items-center gap-x-3">
            <Image
              height={100}
              width={100}
              src="/images/user.png"
              className="size-10 ring-2 ring-gray-400/20 rounded-full"
              alt="avatar"
            />
            <span className="felx flex-col">
              <p className="font-Dana-Medium text-lg mb-2">محسن بابایی</p>
              <p className="text-gray-400 ">09377413367</p>
            </span>
          </div>
        </div>
        {/* links */}
        <ul className="w-full relative space-y-2 text-lg ">
          <li className="bg-blue-500/10 text-blue-500 cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
            <Link href={"/my-account"}>داشبورد</Link>
          </li>
          <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <Link href={"/my-account/orders"}>سفارش ها</Link>
          </li>
          <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>

            <Link href={"/my-account/favorites"}>علاقه مندی ها</Link>
          </li>
          <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <Link href={"/my-account/address"}>آدرس ها</Link>
          </li>
          <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>

            <Link href={"/my-account/tickets"}>پیام ها</Link>
          </li>
          <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <Link href={"/my-account/edit-account"}>اطلاعات حساب</Link>
          </li>
          <li className=" text-red-400 hover:text-red-500 cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>

            <div>خروج</div>
          </li>
        </ul>
      </div>
      {/* AccountSideBar in mobile */}
      <div className="flex lg:hidden">
        {/* open side btn */}
        <button className="open-user-menu bg-blue-500 flex items-center gap-x-1 font-Dana-Medium text-white p-2 rounded-lg text-sm mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
          منوی کاربری
        </button>
        {/*SideBar in mobile */}
        {/*  را اضافع بکنیمactiveبرای نمایش این قسمت کلس  */}
        <div className="user-menu shadow border border-[#00000022]  ">
          {/* close side bar btn */}
          <button className="close-user-menu flex items-center justify-end cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="w-full flex items-center justify-between border-b border-gray-200 dark:border-white/20 py-3">
            {/* avatar& name */}
            <div className="flex items-center gap-x-3">
              <Image
                width={100}
                height={100}
                src="/images/user.png"
                className="size-10 ring-2 ring-gray-400/20 rounded-full"
                alt="AVATAR"
              />
              <span className="felx flex-col gap-y-2">
                <p className="font-Dana-Medium text-lg"> محسن بابایی</p>
                <p className="text-gray-400">09100000001</p>
              </span>
            </div>
          </div>
          <ul className="w-full relative space-y-2    text-lg ">
            <li className="bg-blue-500/10 text-blue-500 cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
              <Link href={"/my-account"}>داشبورد</Link>
            </li>
            <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <Link href={"/my-account/orders"}>سفارش ها</Link>
            </li>
            <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <Link href={"/my-account/favorites"}>علاقه مندی ها</Link>
            </li>
            <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <Link href={"/my-account/address"}>آدرس ها</Link>
            </li>
            <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>

              <Link href={"/my-account/tickets"}>پیام ها</Link>
            </li>
            <li className="cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2  hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <Link href={"/my-account/edit-account"}>اطلاعات حساب</Link>
            </li>
            <li className=" text-red-400 hover:text-red-500 cursor-pointer rounded-lg duration-300 transition-all py-3  px-2 flex gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>

              <div>خروج</div>
            </li>
          </ul>
        </div>
      </div>
      {/* main */}
      <div className="flex flex-col shadow lg:w-3/4 rounded-lg p-4 dark:bg-gray-800 bg-white mt-5 lg:mt-0">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>

            <h2 className="font-Dana-Medium text-lg"> علاقه مندی های من :</h2>
          </span>
        </div>

        <div className="relative mt-5 overflow-x-auto  items-center p-4 pt-6 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-3 sm:gap-2 md:gap-5">
          <div className="product-card bg-white dark:bg-[#1f2937] shadow hover:shadow-md transition-shadow ease-in-out duration-20 ">
            {/* products  header*/}
            <div className="w-full flex items-center justify-between  ">
              {/* icons */}
              <div className="flex items-center gap-x-2 ">
                {/* add to Cart Svg */}
                <div className=" cursor-pointer relative inline-block group">
                  <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </button>
                  <div className="tooltiptext flex items-center  invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6] dark:bg-[#3b82f6]">
                    سبد خرید
                  </div>
                </div>
                {/* add to compare Svg */}
                <div className=" cursor-pointer relative inline-block group">
                  <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                      />
                    </svg>
                  </button>
                  <div className="tooltiptext flex items-center  invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6] dark:bg-[#3b82f6]">
                    مقایسه
                  </div>
                </div>
                {/* add to wishlist Svg */}
                <div className=" cursor-pointer relative inline-block group">
                  <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <div className="tooltiptext flex items-center  invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6] dark:bg-[#3b82f6]">
                    علاقه مندی
                  </div>
                </div>{" "}
              </div>
              {/* offs */}
              <span className="product-card_badge relative text-sm leading-5 text-[#3b82f6] dark:text-[#60a5fa] hidden md:flex">
                ٪ 70 تخفیف
              </span>
            </div>
            {/* products img*/}
            <Link href={"/"}>
              <Image
                width={200}
                height={300}
                src={"/images/products/shal1.png"}
                alt=""
                className="w-72 h-80 object-cover cursor-pointer rounded-xl"
              />
            </Link>
            {/* products footer */}
            <Link href={"/products/202"} className="space-y-2 w-full mt-2">
              <span className="flex flex-col justify-center">
                <p className="text-sm line-clamp-2 leading-6 dark:text-white text-gray-900 min-h-5">
                  نام محصول
                </p>
                <span className="flex justify-between text-sm leading-5  dark:text-white text-[#3b82f6] mt-2">
                  <p> در {5}طرح مختلف</p>
                  <p>زمستانه</p>
                </span>
              </span>
              <div className="  border-t-2 dark:border-[#374151] mt-2 pt-4">
                {/* rate */}
                <div className=" hidden items-center justify-between">
                  <span className="flex items-center gap-x-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 text-blue-500 mb-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>

                    <p className="text-xs">ارسال امروز</p>
                  </span>
                  <span className="text-gray-400 flex items-center text-sm gap-x-0.5">
                    <p>5.5</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                </div>
                {/* price */}
                <div className={"flex items-center  justify-between "}>
                  <del className=" opacity-40">400,000</del>

                  <span className="flex items-center gap-x-2 text-lg">
                    500,000
                    <p className=" flex items-center justify-center rounded-xl bg-[#3b82f6] text-white text-xs leading-4 h-6 w-10">
                      تومان
                    </p>
                  </span>
                </div>
              </div>
            </Link>
          </div>{" "}
          <div className="product-card bg-white dark:bg-[#1f2937] shadow hover:shadow-md transition-shadow ease-in-out duration-20 ">
            {/* products  header*/}
            <div className="w-full flex items-center justify-between  ">
              {/* icons */}
              <div className="flex items-center gap-x-2 ">
                {/* add to Cart Svg */}
                <div className=" cursor-pointer relative inline-block group">
                  <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </button>
                  <div className="tooltiptext flex items-center  invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6] dark:bg-[#3b82f6]">
                    سبد خرید
                  </div>
                </div>
                {/* add to compare Svg */}
                <div className=" cursor-pointer relative inline-block group">
                  <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                      />
                    </svg>
                  </button>
                  <div className="tooltiptext flex items-center  invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6] dark:bg-[#3b82f6]">
                    مقایسه
                  </div>
                </div>
                {/* add to wishlist Svg */}
                <div className=" cursor-pointer relative inline-block group">
                  <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <div className="tooltiptext flex items-center  invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6] dark:bg-[#3b82f6]">
                    علاقه مندی
                  </div>
                </div>{" "}
              </div>
              {/* offs */}
              <span className="product-card_badge relative text-sm leading-5 text-[#3b82f6] dark:text-[#60a5fa] hidden md:flex">
                ٪ 70 تخفیف
              </span>
            </div>
            {/* products img*/}
            <Link href={"/"}>
              <Image
                width={200}
                height={300}
                src={"/images/products/shal1.png"}
                alt=""
                className="w-72 h-80 object-cover cursor-pointer rounded-xl"
              />
            </Link>
            {/* products footer */}
            <Link href={"/products/202"} className="space-y-2 w-full mt-2">
              <span className="flex flex-col justify-center">
                <p className="text-sm line-clamp-2 leading-6 dark:text-white text-gray-900 min-h-5">
                  نام محصول
                </p>
                <span className="flex justify-between text-sm leading-5  dark:text-white text-[#3b82f6] mt-2">
                  <p> در {5}طرح مختلف</p>
                  <p>زمستانه</p>
                </span>
              </span>
              <div className="  border-t-2 dark:border-[#374151] mt-2 pt-4">
                {/* rate */}
                <div className=" hidden items-center justify-between">
                  <span className="flex items-center gap-x-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 text-blue-500 mb-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>

                    <p className="text-xs">ارسال امروز</p>
                  </span>
                  <span className="text-gray-400 flex items-center text-sm gap-x-0.5">
                    <p>5.5</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                </div>
                {/* price */}
                <div className={"flex items-center  justify-between "}>
                  <del className=" opacity-40">400,000</del>

                  <span className="flex items-center gap-x-2 text-lg">
                    500,000
                    <p className=" flex items-center justify-center rounded-xl bg-[#3b82f6] text-white text-xs leading-4 h-6 w-10">
                      تومان
                    </p>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
