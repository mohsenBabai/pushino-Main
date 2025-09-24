import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
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
      {/* main  */}
      <div className="lg:w-3/4 px-3 md:px-0">
        {/* header */}
        <div className="grid grid-cols-12  mt-5 lg:mt-0  gap-4 ">
          <div className=" items-center gap-x-4 shadow p-4 col-span-12 md:col-span-4 rounded-lg bg-white dark:bg-gray-800 w-full flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
            <div className="flex flex-col gap-y-1">
              <h2 className="font-Dana-Demibold">کیف‌پول</h2>
              <p className="text-gray-500">
                موجودی :<span>0 تومان</span>
              </p>
            </div>
          </div>{" "}
          <div className=" items-center gap-x-4 shadow p-4 col-span-12 md:col-span-4 rounded-lg bg-white dark:bg-gray-800 w-full flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <div className="flex flex-col gap-y-1">
              <h2 className="font-Dana-Demibold">سفارش‌ها</h2>
              <p className="text-gray-500">10 سفارش</p>
            </div>
          </div>{" "}
          <div className=" items-center gap-x-4 shadow p-4 col-span-12 md:col-span-4 rounded-lg bg-white dark:bg-gray-800 w-full flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
              />
            </svg>

            <div className="flex flex-col gap-y-1">
              <h2 className="font-Dana-Demibold">تیکت‌ها</h2>
              <p className="text-gray-500">5 تیکت</p>
            </div>
          </div>
        </div>
        {/* main */}
        <div className="flex flex-col shadow rounded-lg p-4 dark:bg-gray-800 bg-white mt-5">
          <span className="flex items-center gap-x-2">
            <Image
              width={100}
              height={100}
              src="/images/status-delivered.svg"
              alt="statusImg"
              className="w-10"
            />
            <h2 className="font-Dana-Medium text-lg">سفارش های اخیر :</h2>
          </span>
          <div className="relative mt-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700  bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3.5">
                    نام محصول
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    تاریخ
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    قیمت
                  </th>
                  <th scope="col" className="px-6 py-3.5">
                    وضعیت
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-b-gray-200  cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-x-2"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-10 object-cover"
                      src="/images/category/cat1.png"
                      alt=""
                    />
                    شال
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">62,000,000 تومان</td>
                  <td className="px-6 py-5 text-red-500 font-DanaDemiBold">
                    لغو شده
                  </td>
                </tr>
                <tr className="bg-white border-b  border-b-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-x-2"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-10 object-cover"
                      src="/images/category/cat3.png"
                      alt=""
                    />
                    شال
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">62,000,000 تومان</td>
                  <td className="px-6 py-5 text-yellow-500 font-DanaDemiBold">
                    درانتظار پرداخت
                  </td>
                </tr>
                <tr className="bg-white border-b border-b-gray-200  cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  <th
                    scope="row"
                    className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-x-2"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-10 object-cover"
                      src="/images/category/cat2.png"
                      alt=""
                    />
                    شال
                  </th>
                  <td className="px-6 py-5">1402/11/11</td>
                  <td className="px-6 py-5">62,000,000 تومان</td>
                  <td className="px-6 py-5 text-green-500 font-DanaDemiBold">
                    پرداخت شده
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* footer */}
        <div className="w-full flex flex-col shadow rounded-lg p-4 dark:bg-gray-800 bg-white mt-5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-x-2">
              <Image
                width={100}
                height={100}
                src="/images/map.png"
                className="w-5 md:w-8"
                alt=""
              />
              <h2 className="font-Dana-Medium text-lg"> آدرس های من:</h2>
            </span>
            <Link href="#" className="flex items-center gap-x-1 text-blue-500">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <h2 className="font-Dana-Medium  hidden sm:flex">آدرس جدید</h2>
            </Link>
          </div>
          <ul className="mt-5 space-y-3">
            <li className="w-full border border-blue-300 dark:border-blue-400 p-4 rounded-lg">
              <Link
                href="#"
                className="flex items-center gap-x-1 text-blue-500 dark:text-blue-400"
              >
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

                <h2 className="font-Dana-Medium">نام آدرس</h2>
              </Link>
              <div className="space-y-1.5 text-gray-600 dark:text-gray-300 mt-3 mr-2">
                <p>
                  استان تهران-بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک
                  ۱۰{" "}
                </p>
                <p>کد پستی: 000000000</p>
                <p>گیرنده: پارسا وصالی | ۰۹000000000</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
