"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <header>
        {/* TOPBAR & NAVBAR */}
        <div className=" mt-5  px-4 xl:px-10 flex-col gap-y-6 flex font-Dana w-full mx-auto">
          {/* TOPBAR */}
          <div className="flex items-center justify-between">
            {/* Mobile menu icon & menu  */}
            <div className="flex md:hidden cursor-pointer">
              {/* icon */}
              <div>
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              {/* menu  */}
              {/*را اضافه بکنیم translate-x-0 برای نمایش این منو باید کلس */}
              <div className=" z-50 flex flex-col fixed inset-0 h-dvh w-72 overflow-hidden translate-x-72 shadow transition-transform duration-300 p-4 bg-white">
                {/* MENU MOBILE header  */}
                <div className="flex w-full items-center justify-between border-b-normal pb-4">
                  <a href="/">
                    <img
                      src="/images/logo.jpg"
                      alt=""
                      className="w-20 h-12 rounded-md"
                    />
                  </a>
                  {/* close btn */}
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 text-gray-500 dark:text-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/* MENU MOBILE CATEGORY & ACTION   */}
                <ul className="flex flex-col gap-y-2 text-gray-800 dark:text-gray-100 mt-4">
                  <li className=" group  cursor-pointer rounded-lg transition-all duration-150 ease-in-out hover:text-white hover:bg-blue-500 p-2">
                    <div className="flex items-start justify-between  gap-x-1">
                      <span className=" flex items-center gap-x-1">
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
                            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                          />
                        </svg>

                        <a href="/">دسته بندی</a>
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 group-hover:-rotate-90 transition-transform ease-in-out duration-200 m-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </div>
                    <div className="bg-white text-black hidden mt-1 group-hover:flex flex-col p-2 top-5 w-full rounded-lg shadow transition-all duration-200 ease-in-out">
                      <a
                        className="hover:bg-blue-500 hover:text-gray-50 px-2 py-1 rounded-md mb-1 "
                        href="/"
                      >
                        شال
                      </a>
                      <a
                        className="hover:bg-blue-500 hover:text-gray-50 px-2 py-1 rounded-md mb-1 "
                        href="/"
                      >
                        روسری
                      </a>
                      <a
                        className="hover:bg-blue-500 hover:text-gray-50 px-2 py-1 rounded-md mb-1 "
                        href="/"
                      >
                        مینی اسکارف
                      </a>
                    </div>
                  </li>
                  <li className=" cursor-pointer flex items-start gap-x-1 rounded-lg transition-all duration-150 ease-in-out hover:text-white hover:bg-blue-500 p-2">
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
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>

                    <a href="/">حساب کاربری</a>
                  </li>
                  <li className=" cursor-pointer flex items-start gap-x-1 rounded-lg transition-all duration-150 ease-in-out hover:text-white hover:bg-blue-500 p-2">
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>

                    <a href="/">علاقه مندی ها</a>
                  </li>
                  <li className=" cursor-pointer flex items-start gap-x-1 rounded-lg transition-all duration-150 ease-in-out hover:text-white hover:bg-blue-500 p-2">
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>

                    <a href="/">سبد خرید</a>
                  </li>
                  <li className=" cursor-pointer flex items-start gap-x-1 rounded-lg transition-all duration-150 ease-in-out hover:text-white hover:bg-blue-500 p-2">
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
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>

                    <a href="/">دربـاره مـا</a>
                  </li>
                  <li className=" cursor-pointer flex items-start gap-x-1 rounded-lg transition-all duration-150 ease-in-out hover:text-white hover:bg-blue-500 p-2">
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>

                    <a href="/">تـماس بـا مـا</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Search Box */}
            <div className="relative z-20 hidden md:flex">
              {/* INPUT */}
              <div className=" flex gap-x-2 border  border-[#dbd5d1] dark:border-[#374155]  bg-gray-50 dark:bg-gray-700  p-1 rounded-full cursor-pointer ring-blue-400 w-32  md:w-64   lg:w-80  transition-all z-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 p-1.5 flex-center text-gray-100 bg-blue-600 rounded-full w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="جستجو در پوشینو ..."
                  className="outline-none placeholder:text-inherit"
                />
              </div>
              {/* Search Modal */}
              <div className="invisible opacity-0 top-20  absolute right-0 shadow flex w-[336px] flex-col justify-end overflow-x-hidden rounded-xl bg-white dark:bg-[#374151] p-4 space-y-4 transition-all ease-in-out duration-300 ">
                {/* Result */}
                <div>
                  <span className="flex items-center text-sm gap-x-1 text-gray-600 dark:text-gray-200">
                    <p>
                      نتیجه جستجو :
                      <span className="font-Dana-Medium text-blue-400">
                        لوستر
                      </span>
                    </p>
                  </span>
                  <ul className="pt-4 text-gray-500 dark:text-gray-300 flex flex-col gap-y-4">
                    <li className="flex-between cursor-pointer">
                      <Link href={"/"} className="flex items-center gap-x-2">
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
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                        لوستر
                      </Link>
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
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </li>{" "}
                    <li className="flex-between cursor-pointer">
                      <Link href={"/"} className="flex items-center gap-x-2">
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
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                        اکسسوری
                      </Link>
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
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </li>{" "}
                    <li className="flex-between cursor-pointer">
                      <Link href={"/"} className="flex items-center gap-x-2">
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
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                        میز
                      </Link>
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
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
                {/* Trends */}
                <div className="pt-4">
                  <span className="flex items-center gap-x-1 text-sm text-gray-500 dark:text-gray-200">
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
                        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                      />
                    </svg>

                    <p>جستجو های پرطرفدار :</p>
                  </span>
                  <ul className="w-full flex items-center gap-1.5 mt-3 search-modal-list-item ">
                    <li className=" text-gray-600 dark:text-gray-200 text-sm mask-linear-to-red-50 flex items-center justify-center rounded-full border border-[#d1d5db] px-3 py-1.5">
                      <Link href={"/"}># لوستر</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Logo */}
            <Link
              href={"/"}
              className="flex flex-col text-center  sm:mr-[84px] md:mr-0 md:ml-16 lg:ml-24 "
            >
              <img
                src="/images/logo.jpg"
                alt="logo"
                className=" object-cover w-20 h-12 sm:w-24 sm:h-16 md:w-32 md:h-20 rounded-2xl"
              />
            </Link>
            {/* Action */}
            <div className="flex items-center gap-x-3">
              {/* user login */}
              <button className="group hidden relative items-center justify-center py-2 px-4 border border-[#dbd5d1] dark:border-[#374155] rounded-full hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 delay-75">
                <Link
                  href={"/my-account"}
                  className="flex items-center gap-x-1"
                >
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <p className=" hidden sm:flex">حساب کاربری</p>
                </Link>
                <div className="absolute z-50 dark:border-none border border-gray-100 w-52 p-2 bg-white text-gray-900 dark:text-gray-100 flex flex-col gap-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-12 transition-all duration-300 delay-100 dark:bg-gray-700 top-20 rounded-lg text-base shadow ">
                  <Link
                    href={"/my-account/orders"}
                    className="flex items-center gap-x-2  hover:bg-blue-500 hover:text-gray-100 transition-all duration-300 py-1.5 px-2 rounded-lg w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    سفارشات من
                  </Link>{" "}
                  <Link
                    href={"/my-account/tickets"}
                    className="flex items-center gap-x-2  hover:bg-blue-500 hover:text-gray-100 transition-all duration-300 py-1.5 px-2 rounded-lg w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    لیست پیام ها
                  </Link>{" "}
                  <Link
                    href={"/my-account/edit-account"}
                    className="flex items-center gap-x-2  hover:bg-blue-500 hover:text-gray-100 transition-all duration-300 py-1.5 px-2 rounded-lg w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
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
                    اطلاعات کاربری
                  </Link>{" "}
                  <Link
                    href={"/my-account"}
                    className="flex items-center gap-x-2 hover:bg-red-500 dark:hover:bg-red-500 hover:text-gray-100 transition-all duration-300 py-1.5 px-2 rounded-lg w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                      />
                    </svg>
                    خروج از حساب
                  </Link>
                </div>
              </button>
              {/* unregister user */}
              <button className="    py-2 px-4  border border-[#dbd5d1] dark:border-[#374155] rounded-full hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150">
                <Link href={"/login"} className="flex items-center gap-x-2">
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
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>

                  <p className=" hidden sm:flex">ورود</p>
                </Link>
              </button>
              {/* Shopping Cart */}
              <button className="hidden md:flex items-center justify-center p-2 bg-blue-600 text-gray-100 rounded-full  relative cursor-pointer">
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>

                <span className="absolute -top-1 -right-1 flex h-4 w-4 ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-xs pt-1 flex-center text-white">
                    5
                  </span>
                </span>
              </button>
              {/* Cart */}
              <div className="transition-transform ease-in-out duration-700 fixed top-0 bottom-0 left-0 -translate-x-[360px] z-50 w-[360px] p-4  bg-white dark:bg-[#1f2937]">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b-2 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-300 ">
                  <h2 className="font-Dana-Medium text-lg">
                    سبد خرید
                    <span className="text-sm text-gray-400 font-Dana">
                      (2 مورد)
                    </span>
                  </h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 cursor-pointer close-cart mb-.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                {/* Main */}
                <div className="flex flex-col divide-y-2 divide-gray-200 dark:divide-gray-600 my-4">
                  {/* Cart Item */}
                  <div className="grid grid-cols-12 gap-x-2 w-full py-4 cursor-pointer">
                    {/* img */}
                    <div className="col-span-4 w-24 h-20">
                      <img src="/" alt="" className="rounded-lg" />
                    </div>
                    {/* detail */}
                    <div className="col-span-8 flex flex-col justify-between">
                      <h2 className="font-Dana-Medium line-clamp-2">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum animi quos, nostrum odit tempora nesciunt veniam
                      </h2>
                      <div className="flex items-center justify-between gap-x-2 mt-2">
                        <button className="w-20 flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-1 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 increment text-green-600 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>

                          <input
                            type="text"
                            className="custom-input w-4 mr-2 text-sm"
                            name="custom-input"
                            id="custom-input"
                            min={0}
                            max={20}
                          />

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 decrement text-red-500 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h14"
                            />
                          </svg>
                        </button>
                        <p className="text-lg text-blue-500 dark:text-blue-400 font-Dana-Medium">
                          1,333,000
                          <span className=" text-sm">تومان</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="w-[90%] fixed bottom-2 flex items-center justify-between border-t-2 border-gray-200 dark:border-gray-600 pt-4">
                  <div>
                    <p className="text-gray-500 dark:text-gray-300 text-sm">
                      مبلغ قابل پرداخت :
                    </p>
                    <p className="text-lg text-blue-500 dark:text-blue-400 font-Dana-Medium">
                      1,333,000
                      <span className=" text-sm">تومان</span>
                    </p>
                  </div>
                  <Link
                    href={"/shoppingCart"}
                    className="py-2 px-4 bg-blue-600 flex-center hover:bg-blue-700 transition-all rounded-lg text-gray-200"
                  >
                    ثبت سفارش
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* mobile search input */}
          <div className=" flex md:hidden gap-x-2 border z-0  w-full border-[#dbd5d1] dark:border-[#374155]  bg-gray-50 dark:bg-gray-700  p-1 rounded-full cursor-pointer ring-blue-400  transition-all ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 p-1.5 flex-center text-gray-100 bg-blue-600 rounded-full w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="جستجو در شیکوساز..."
              className="outline-none placeholder:text-inherit"
            />
          </div>
          {/* Mobile search box */}
          <div className="relative z-20 hidden">
            {/* INPUT */}
            <div className=" flex gap-x-2 border  w-full border-[#dbd5d1] dark:border-[#374155]  bg-gray-50 dark:bg-gray-700  p-1 rounded-full cursor-pointer ring-blue-400  transition-all z-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 p-1.5 flex-center text-gray-100 bg-blue-600 rounded-full w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <input
                type="text"
                placeholder="جستجو در شیکوساز..."
                className="outline-none placeholder:text-inherit"
              />
            </div>
            {/* Search Modal */}
            <div className=" -translate-y-0 fixed top-0 left-0 right-0 shadow flex w-full h-[100vh] flex-col overflow-x-hidden gap-4  bg-white dark:bg-[#111827f2] p-4  transition-all ease-in-out duration-600 z-50 backdrop:blur-xs">
              <div className="w-full flex items-center gap-x-2 ">
                <button className="w-full flex items-center gap-x-1 bg-gray-200 dark:bg-gray-800 text-gray-500 py-2 px-4 rounded-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6  flex-center rounded-full "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="جستجو در شیکوساز..."
                    className="outline-none placeholder:text-inherit"
                  />
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              {/* Result */}
              <div>
                <span className="flex items-center text-sm gap-x-1 text-gray-600 dark:text-gray-200">
                  <p>
                    نتیجه جستجو :
                    <span className="font-Dana-Medium text-blue-400">
                      لوستر
                    </span>
                  </p>
                </span>
                <ul className="pt-4 text-gray-500 dark:text-gray-300 flex flex-col gap-y-4">
                  <li className="flex-between cursor-pointer">
                    <Link href={"/"} className="flex items-center gap-x-2">
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
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                      لوستر
                    </Link>
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </li>{" "}
                  <li className="flex-between cursor-pointer">
                    <Link href={"/"} className="flex items-center gap-x-2">
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
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                      اکسسوری
                    </Link>
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </li>{" "}
                  <li className="flex-between cursor-pointer">
                    <Link href={"/"} className="flex items-center gap-x-2">
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
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                      میز
                    </Link>
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              {/* Trends */}
              <div className="pt-4">
                <span className="flex items-center gap-x-1 text-sm text-gray-500 dark:text-gray-200">
                  <span>
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
                        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                      />
                    </svg>
                  </span>
                  <p>جستجو های پرطرفدار :</p>
                </span>
                <ul className="w-full flex items-center gap-1.5 mt-3 search-modal-list-item">
                  <li>
                    <Link href={"/"}>لوستر</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* NAVBAR */}
          <div className="relative hidden  items-center justify-between md:flex h-16 bg-gray-900 dark:bg-gray-800 rounded-full text-gray-200 px-10">
            {/* Menu */}
            <ul className="flex items-center gap-x-8">
              <li className=" flex-center gap-1 relative">
                <Link
                  href={"/"}
                  className="menu-item_link  relative inline-flex items-center gap-1"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li className=" flex-center gap-1 relative group/parent">
                <Link
                  href={"/"}
                  className="menu-item_link relative inline-flex items-center  justify-center gap-x-1"
                >
                  دسته بندی محصولات
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 group-hover/parent:rotate-180 transition-all duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
                <div className=" group-hover/parent:visible group-hover/parent:top-12 group-hover/parent:opacity-100 flex h-96 w-[70vw]  invisible absolute right-0 left-0 top-20 z-30 rounded-xl bg-white p-4 text-[#1f2937] opacity-0 shadow transition-all ease-in-out duration-300 delay-150 dark:bg-[#1f2937] dark:text-[#f3f4f6]">
                  {/* Right */}
                  <ul className=" rounded-xl bg-[#f9fafb] border border-[#00000017] p-4 w-1/4 transition-all ease-in-out duration-300 dark:bg-[#111827]  ">
                    <li className="flex w-full mb-1.5 group/child cursor-pointer items-center gap-1 rounded-lg px-1 py-1.5 transition-colors hover:text-[#f9fafb] hover:bg-[#3b82f6]">
                      <Link
                        className=" group-hover/child:-translate-x-1 transition-transform ease-in-out duration-200"
                        href={"/"}
                      >
                        شال
                      </Link>
                    </li>{" "}
                    <li className="flex w-full mb-1.5 group/child cursor-pointer items-center  rounded-lg px-1 py-1.5 transition-colors hover:text-[#f9fafb] hover:bg-[#3b82f6]">
                      <Link
                        className=" group-hover/child:-translate-x-1 transition-transform ease-in-out duration-200"
                        href={"/"}
                      >
                        روسری
                      </Link>
                    </li>{" "}
                    <li className="flex w-full mb-1.5 group/child cursor-pointer items-center gap-1 rounded-lg px-1 py-1.5 transition-colors hover:text-[#f9fafb] hover:bg-[#3b82f6]">
                      <Link
                        className=" group-hover/child:-translate-x-1 transition-transform ease-in-out duration-200"
                        href={"/"}
                      >
                        مینی اسکارف
                      </Link>
                    </li>
                  </ul>
                  {/* Left */}
                  <div className=" mx-10 w-3/4 text-[#9ca3af] dark:text-[#f3f4f6] border border-[#00000017] p-4  rounded-xl overflow-auto">
                    <ul className=" opacity-100 transition-all duration-300 ease-in-out grid gri grid-cols-2  xl:grid-cols-4  ">
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                      <Link
                        className="group flex mb-8 gap-x-8 items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
                        href={"/products-cat/4"}
                      >
                        <img
                          src="/images/category/cat1.png"
                          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover duration-300"
                          alt=""
                        />
                        <p>روسری نگین دار</p>
                      </Link>{" "}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href={"/contactus"}
                  className="menu-item_link relative inline-flex items-center gap-1"
                >
                  تماس با ما
                </Link>
              </li>{" "}
              <li>
                <Link
                  href={"/blog"}
                  className="menu-item_link relative inline-flex items-center gap-1"
                >
                  مقاله ها
                </Link>
              </li>
            </ul>
            {/* Addres */}
            <div className=" relative">
              <button className="flex items-center gap-x-1  cursor-pointer">
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

                <p>آدرس خود را انتخاب کنید</p>
              </button>
              <div className="invisible opacity-0 top-20 absolute right-0 z-50  w-56 rounded-lg bg-white p-3 border border-[#00000017] text-[#1f2937] shadow transition-all ease-in-out duration-300 delay-75 dark:bg-[#1f2937] dark:text-[#e5e7eb]">
                {/* Search box */}
                <button className="flex bg-gray-200 dark:bg-gray-700 gap-x-1 w-full items-center p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6  text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>

                  <input
                    type="text"
                    className="w-full placeholder:text-gray-400 focus:outline-none"
                    placeholder="جستجوی شهر..."
                  />
                </button>
                <h2 className="my-3 pr-1.5 font-Dana-Medium">
                  شهرهای پرتکرار :
                </h2>
                {/* City List */}
                <ul>
                  <li className="flex cursor-pointer items-center justify-between rounded-lg py-1.5 px-1 transition-all ease-in-out duration-150 hover:bg-[#2563eb] hover:pr-4 hover:text-[#f3f4f6]">
                    <Link href={"/"} className="flex items-center gap-x-1">
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
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      قم
                    </Link>
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
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </li>{" "}
                  <li className="flex cursor-pointer items-center justify-between rounded-lg py-1.5 px-1 transition-all ease-in-out duration-150 hover:bg-[#2563eb] hover:pr-4 hover:text-[#f3f4f6]">
                    <Link href={"/"} className="flex items-center gap-x-1">
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
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      قم
                    </Link>
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
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </li>{" "}
                  <li className="flex cursor-pointer items-center justify-between rounded-lg py-1.5 px-1 transition-all ease-in-out duration-150 hover:bg-[#2563eb] hover:pr-4 hover:text-[#f3f4f6]">
                    <Link href={"/"} className="flex items-center gap-x-1">
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
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      قم
                    </Link>
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
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* main Banner */}
        <div className="px-4 xl:px-10  group w-full mt-4 lg:mt-10">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper relative "
          >
            <SwiperSlide>
              <Link href={"/"}>
                <img
                  className=" rounded-xl w-full h-80 object-cover cursor-pointer"
                  src="/images/banners/banner3.png"
                  alt="banner"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <img
                  className=" rounded-xl w-full h-80 object-cover cursor-pointer"
                  src="/images/banners/banner4.png"
                  alt="banner"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <img
                  className=" rounded-xl w-full h-80 object-cover cursor-pointer"
                  src="/images/banners/banner5.png"
                  alt="banner"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <img
                  className=" rounded-xl w-full h-80 object-cover cursor-pointer"
                  src="/images/banners/banner6.png"
                  alt="banner"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"}>
                <img
                  className=" rounded-xl w-full h-80 object-cover cursor-pointer"
                  src="/images/banners/banner7.png"
                  alt="banner"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Category  */}
        <section className="px-4 xl:px-10 mt-20 font-Dana">
          {/* section Title */}
          <div className="flex flex-col gap-y-4 sm:flex-row items-center justify-center w-full text-center sm:text-start ">
            <div className="flex items-center justify-center gap-x-2 sm:gap-x-4">
              <div className="space-y-1 md:space-y-1">
                <h3 className="text-xl lg:text-2xl font-Morabba-Medium text-gray-800 dark:text-gray-50">
                  دسته بندی
                  <span className="text-blue-600 dark:text-blue-500">
                    {"  "} محصولات
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* items */}
          <div className="flex items-center justify-evenly flex-wrap mt-12 ">
            <Link
              className=" flex mb-8 gap-x-8  items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
              href={"/"}
            >
              <img
                src={"/images/category/cat1.png"}
                className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover rounded-xl"
                alt=""
              />
              <p>دسته بندی شال</p>
            </Link>
            <Link
              className=" flex mb-8 gap-x-8  items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
              href={"/"}
            >
              <img
                src={"/images/category/cat1.png"}
                className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover rounded-xl"
                alt=""
              />
              <p>دسته بندی روسری</p>
            </Link>
            <Link
              className=" flex mb-8 gap-x-8  items-center flex-col duration-300  cursor-pointer gap-y-1 text-gray-800 dark:text-gray-300 relative"
              href={"/"}
            >
              <img
                src={"/images/category/cat1.png"}
                className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-cover rounded-xl"
                alt=""
              />
              <p>دسته بندی مینی اسکارف</p>
            </Link>
          </div>
        </section>
        {/* Amazing products Slider */}
        <section className="px-4 xl:px-10 mt-20 font-Dana">
          <div className="w-full h-80 rounded-xl bg-blue-500 dark:bg-blue-700 p-4 relative flex ">
            <Swiper
              breakpoints={{
                120: {
                  slidesPerView: 1,
                  spaceBetween: 6,
                },
                390: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },

                480: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },

                640: {
                  slidesPerView: 4,
                  spaceBetween: 12,
                },
                780: {
                  slidesPerView: 5,
                  spaceBetween: 14,
                },
                999: {
                  slidesPerView: 6,
                  spaceBetween: 16,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 16,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {/* ثابت */}
              <SwiperSlide className="amazing-card ">
                {/* timer */}
                <img src="/images/Amazings.svg" className="w-28 h-28" alt="" />
                <div className="flex items-center gap-x-2">
                  <span className=" flex items-center justify-center w-8 h-8 rounded-lg bg-white text-[#374151] pt-1">
                    12
                  </span>
                  <p className=" text-white"> : </p>
                  <span className=" flex items-center justify-center w-8 h-8 rounded-lg bg-white text-[#374151] pt-1">
                    13
                  </span>
                  <p className=" text-white"> : </p>

                  <span className=" flex items-center justify-center w-8 h-8 rounded-lg bg-white text-[#374151] pt-1">
                    14
                  </span>
                </div>
                <Link
                  className="flex items-center gap-x-.5 text-gray-100 cursor-pointer"
                  href={"/products?sort=amazing"}
                >
                  <p> مشاهده همه</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4  rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </SwiperSlide>
              {/* items */}
              <SwiperSlide>
                <div className="small-card bg-white dark:bg-[#1f2937] shadow ">
                  {/* products  header*/}
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center gap-x-0.5 text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                      </svg>

                      <p className=" text-xs">ارسال امروز</p>
                    </span>
                    <span className="text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                      <p>5.0</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* products img*/}
                  <img
                    src="/images/category/cat2.png"
                    alt=""
                    className="h-32 w-44 object-cover"
                  />
                  {/* products footer */}
                  <div className="space-y-2">
                    <p className="text-sm line-clamp-2 leading-5 dark:text-white text-[#374151]">
                      " product.productName"
                    </p>
                    <div className=" flex items-center justify-between border-t-2 dark:border-[#374151] mt-2 pt-4">
                      <span className="pt-1 bg-[#3b82f6] flex items-center justify-center rounded-xl h-6 w-10 text-xs leading-5 text-white">
                        50%
                      </span>
                      <span className="flex items-center gap-x-1 text-lg">
                        1,300,000
                        <p className="text-xs font-Dana-Medium">تومان</p>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="small-card bg-white dark:bg-[#1f2937] shadow ">
                  {/* products  header*/}
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center gap-x-0.5 text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                      </svg>

                      <p className=" text-xs">ارسال امروز</p>
                    </span>
                    <span className="text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                      <p>5.0</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* products img*/}
                  <img
                    src="/images/category/cat2.png"
                    alt=""
                    className="h-32 w-44 object-cover"
                  />
                  {/* products footer */}
                  <div className="space-y-2">
                    <p className="text-sm line-clamp-2 leading-5 dark:text-white text-[#374151]">
                      " product.productName"
                    </p>
                    <div className=" flex items-center justify-between border-t-2 dark:border-[#374151] mt-2 pt-4">
                      <span className="pt-1 bg-[#3b82f6] flex items-center justify-center rounded-xl h-6 w-10 text-xs leading-5 text-white">
                        50%
                      </span>
                      <span className="flex items-center gap-x-1 text-lg">
                        1,300,000
                        <p className="text-xs font-Dana-Medium">تومان</p>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="small-card bg-white dark:bg-[#1f2937] shadow ">
                  {/* products  header*/}
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center gap-x-0.5 text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                      </svg>

                      <p className=" text-xs">ارسال امروز</p>
                    </span>
                    <span className="text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                      <p>5.0</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* products img*/}
                  <img
                    src="/images/category/cat2.png"
                    alt=""
                    className="h-32 w-44 object-cover"
                  />
                  {/* products footer */}
                  <div className="space-y-2">
                    <p className="text-sm line-clamp-2 leading-5 dark:text-white text-[#374151]">
                      " product.productName"
                    </p>
                    <div className=" flex items-center justify-between border-t-2 dark:border-[#374151] mt-2 pt-4">
                      <span className="pt-1 bg-[#3b82f6] flex items-center justify-center rounded-xl h-6 w-10 text-xs leading-5 text-white">
                        50%
                      </span>
                      <span className="flex items-center gap-x-1 text-lg">
                        1,300,000
                        <p className="text-xs font-Dana-Medium">تومان</p>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="small-card bg-white dark:bg-[#1f2937] shadow ">
                  {/* products  header*/}
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center gap-x-0.5 text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                      </svg>

                      <p className=" text-xs">ارسال امروز</p>
                    </span>
                    <span className="text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                      <p>5.0</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* products img*/}
                  <img
                    src="/images/category/cat2.png"
                    alt=""
                    className="h-32 w-44 object-cover"
                  />
                  {/* products footer */}
                  <div className="space-y-2">
                    <p className="text-sm line-clamp-2 leading-5 dark:text-white text-[#374151]">
                      " product.productName"
                    </p>
                    <div className=" flex items-center justify-between border-t-2 dark:border-[#374151] mt-2 pt-4">
                      <span className="pt-1 bg-[#3b82f6] flex items-center justify-center rounded-xl h-6 w-10 text-xs leading-5 text-white">
                        50%
                      </span>
                      <span className="flex items-center gap-x-1 text-lg">
                        1,300,000
                        <p className="text-xs font-Dana-Medium">تومان</p>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="small-card bg-white dark:bg-[#1f2937] shadow ">
                  {/* products  header*/}
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center gap-x-0.5 text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                      </svg>

                      <p className=" text-xs">ارسال امروز</p>
                    </span>
                    <span className="text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                      <p>5.0</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* products img*/}
                  <img
                    src="/images/category/cat2.png"
                    alt=""
                    className="h-32 w-44 object-cover"
                  />
                  {/* products footer */}
                  <div className="space-y-2">
                    <p className="text-sm line-clamp-2 leading-5 dark:text-white text-[#374151]">
                      " product.productName"
                    </p>
                    <div className=" flex items-center justify-between border-t-2 dark:border-[#374151] mt-2 pt-4">
                      <span className="pt-1 bg-[#3b82f6] flex items-center justify-center rounded-xl h-6 w-10 text-xs leading-5 text-white">
                        50%
                      </span>
                      <span className="flex items-center gap-x-1 text-lg">
                        1,300,000
                        <p className="text-xs font-Dana-Medium">تومان</p>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* ثابت */}
              <SwiperSlide className="bg-white dark:bg-[#1f2937] amazing-card_last shadow text-[#3b82f6]">
                <Link
                  href={"/"}
                  className="flex flex-col items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h2>مشاده همه</h2>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/*latest Products slider */}
        <section className="px-4 xl:px-10 mt-20 font-Dana">
          {/* section Title */}
          <div className="flex flex-col gap-y-4 sm:flex-row items-center justify-between w-full text-center sm:text-start ">
            <div className="flex items-center justify-center gap-x-2 sm:gap-x-4">
              <span className="size-12 hidden sm:flex rounded-lg bg-white shadow-lg dark:bg-gray-800 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 text-gray-700 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </span>
              <div className="space-y-1 md:space-y-1">
                <h3 className="text-xl lg:text-2xl font-Morabba-Medium text-gray-800 dark:text-gray-50">
                  جدید ترین
                  <span className="text-blue-600 dark:text-blue-500">
                    {"  "}
                    محصولات
                  </span>
                </h3>
              </div>
            </div>
            <div className=" hidden md:flex w-full sm:w-auto  justify-between sm:justify-end  items-center gap-x-2">
              <Link
                className="group shadow-xl text-sm md:text-base flex gap-x-1.5 items-center px-2 h-10 md:px-3 text-white bg-blue-600 rounded-xl"
                href={"/"}
              >
                <p>مشاهده همه</p>
                <span className="w-7 h-7 rounded-full bg-blue-500 flex-center md:group-hover:-translate-x-1 transition-transform duration-300">
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
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          {/* LatestProducts slider */}
          <Swiper
            breakpoints={{
              120: {
                slidesPerView: 1,
                spaceBetween: 6,
              },
              390: {
                slidesPerView: 1.2,
                spaceBetween: 6,
              },

              480: {
                slidesPerView: 2,
                spaceBetween: 8,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              780: {
                slidesPerView: 3,
                spaceBetween: 6,
              },
              999: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
              1280: {
                slidesPerView: 4.6,
                spaceBetween: 16,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-5 py-6! relative"
          >
            <SwiperSlide>
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
                  <img
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
            </SwiperSlide>
            <SwiperSlide>
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
                  <img
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
            </SwiperSlide>
          </Swiper>
        </section>
        {/* Banner  */}
        <section className="px-4 xl:px-10 font-Dana   mt-10 lg:mt-20 flex flex-col lg:flex-row items-center gap-5">
          <Link className=" rounded-xl overflow-hidden group" href={"/"}>
            <img
              src="/images/banners/banner1.png"
              alt="banner"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>{" "}
          <Link className=" rounded-xl overflow-hidden group" href={"/"}>
            <img
              src="/images/banners/banner2.png"
              alt="banner"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </section>
        {/* best Products Slider */}
        <section className="px-4 xl:px-10 mt-20 font-Dana">
          {/* section Title */}
          <div className="flex flex-col gap-y-4 sm:flex-row items-center justify-between w-full text-center sm:text-start ">
            <div className="flex items-center justify-center gap-x-2 sm:gap-x-4">
              <span className="size-12 hidden sm:flex rounded-lg bg-white shadow-lg dark:bg-gray-800 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 text-gray-700 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </span>
              <div className="space-y-1 md:space-y-1">
                <h3 className="text-xl lg:text-2xl font-Morabba-Medium text-gray-800 dark:text-gray-50">
                  پرفروش ترین
                  <span className="text-blue-600 dark:text-blue-500">
                    {"  "}
                    محصولات
                  </span>
                </h3>
              </div>
            </div>
            <div className=" hidden md:flex w-full sm:w-auto  justify-between sm:justify-end  items-center gap-x-2">
              <Link
                className="group shadow-xl text-sm md:text-base flex gap-x-1.5 items-center px-2 h-10 md:px-3 text-white bg-blue-600 rounded-xl"
                href={"/"}
              >
                <p>مشاهده همه</p>
                <span className="w-7 h-7 rounded-full bg-blue-500 flex-center md:group-hover:-translate-x-1 transition-transform duration-300">
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
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          {/* LatestProducts slider */}
          <Swiper
            breakpoints={{
              120: {
                slidesPerView: 1,
                spaceBetween: 6,
              },
              390: {
                slidesPerView: 1.2,
                spaceBetween: 6,
              },

              480: {
                slidesPerView: 2,
                spaceBetween: 8,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              780: {
                slidesPerView: 3,
                spaceBetween: 6,
              },
              999: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
              1280: {
                slidesPerView: 4.6,
                spaceBetween: 16,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-5 py-6! relative"
          >
            <SwiperSlide>
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
                  <img
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
            </SwiperSlide>
            <SwiperSlide>
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
                  <img
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
            </SwiperSlide>
          </Swiper>
        </section>
        {/* HottestProducts  */}
        <section className="mx-4 xl:mx-10 mt-20 font-Dana">
          <div className="bg-white dark:bg-gray-800 shadow rounded-xl h-[420px] p-5 flex flex-col gap-y-3 relative overflow-hidden">
            {/*section header */}
            <div className="flex-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 pb-1 text-orange-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
              <h4 className="font-Dana-Medium text-lg text-gray-800 dark:text-gray-200">
                داغ ترین چند ساعت گذشته{" "}
              </h4>
            </div>
            {/* slider */}
            <Swiper
              breakpoints={{
                120: {
                  spaceBetween: 6,
                  slidesPerView: 1,
                },
                390: {
                  slidesPerView: 1,
                  spaceBetween: 6,
                },

                480: {
                  slidesPerView: 1,
                  spaceBetween: 8,
                },

                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                780: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                999: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
                1280: {
                  slidesPerView: 4.1,
                  spaceBetween: 16,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="flex! max-w-72! h-auto flex-col! gap-y-1.5 border border-[#00000018] rounded-xl  ">
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151]  py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>{" "}
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="flex! max-w-72! h-auto flex-col! gap-y-1.5 border border-[#00000018] rounded-xl  ">
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>{" "}
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide className="flex! max-w-72! h-auto flex-col! gap-y-1.5  border border-[#00000018] rounded-xl ">
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>{" "}
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide className="flex! max-w-72! h-auto flex-col! gap-y-1.5 border border-[#00000018] rounded-xl  ">
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>{" "}
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide className="flex! max-w-72! h-auto flex-col! gap-y-1.5 border border-[#00000018] rounded-xl  ">
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat2.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>{" "}
                <Link
                  href={"/"}
                  className="flex items-center gap-x-2 border-b border-[#374151] py-0.5"
                >
                  <img
                    src="/images/category/cat1.png"
                    alt=""
                    className="w-28 h-28 rounded-xl"
                  />
                  <p className="text-[#374151] dark:text-white line-clamp-2">
                    مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                  </p>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* Article  */}
        <section className="px-4 xl:px-10 mt-20 font-Dana">
          {/* section Title */}
          <div className="flex flex-col gap-y-4 sm:flex-row items-center justify-between w-full text-center sm:text-start ">
            <div className="flex items-center justify-center gap-x-2 sm:gap-x-4">
              <span className="size-12 hidden sm:flex rounded-lg bg-white shadow-lg dark:bg-gray-800 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 text-gray-700 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
              </span>
              <div className="space-y-1 md:space-y-1">
                <h3 className="text-xl lg:text-2xl font-Morabba-Medium text-gray-800 dark:text-gray-50">
                  محبوب ترین
                  <span className="text-blue-600 dark:text-blue-500">
                    {"  "}
                    مقالات
                  </span>
                </h3>
              </div>
            </div>
            <div className=" hidden md:flex w-full sm:w-auto  justify-between sm:justify-end  items-center gap-x-2">
              <Link
                className="group shadow-xl text-sm md:text-base flex gap-x-1.5 items-center px-2 h-10 md:px-3 text-white bg-blue-600 rounded-xl"
                href={"/blog"}
              >
                <p>مشاهده همه</p>
                <span className="w-7 h-7 rounded-full bg-blue-500 flex-center md:group-hover:-translate-x-1 transition-transform duration-300">
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
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          {/*  slider */}
          <Swiper
            breakpoints={{
              120: {
                slidesPerView: 1,
                spaceBetween: 6,
              },
              390: {
                slidesPerView: 1.2,
                spaceBetween: 6,
              },

              480: {
                slidesPerView: 2,
                spaceBetween: 8,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              780: {
                slidesPerView: 3,
                spaceBetween: 6,
              },
              999: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
              1280: {
                slidesPerView: 4.6,
                spaceBetween: 16,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-5 py-6!"
          >
            <SwiperSlide>
              <div className="cursor-pointer rounded-lg p-2  h-[304px] bg-white dark:bg-[#1f2937] shadow group hover:-translate-y-2 transition-transform ease-in-out duration-300">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/images/article/article1.png"
                    alt=""
                    className=" object-center rounded-tr-3xl rounded-bl-3xl"
                  />
                  <div className="absolute opacity-0 left-0 top-0 bottom-0 right-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 duration-300 transition-opacity rounded-bl-3xl rounded-tr-3xl">
                    <Link
                      href={"/"}
                      className="flex items-center px-2 py-1 gap-x-1 font-Dana-Medium rounded-lg border-2 border-white text-white"
                    >
                      <p>ادامه مطالب</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className=" flex flex-col gap-y-1 py-5 px-1">
                  <h2 className="font-Dana-Demibold">
                    بهترین لپ تاپ های بازار ایران [دی ۱۴۰۳]{" "}
                  </h2>
                </div>
                <span className="flex w-full h-1 py-1 border-t border-gray-100 dark:border-white/10"></span>
                <div className="flex items-center justify-between text-sm px-1">
                  <span className="flex items-center gap-x-1 text-blue-500 dark:text-sky-400">
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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <p className="mt-1">1403/5/1</p>
                  </span>
                  <span className="flex items-start gap-x-1 text-gray-300">
                    <p className="font-Dana-Demibold">120</p>
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* Features  */}
        <section className="mx-4 xl:mx-10 mt-10 font-Dana  lg:mt-20 hidden md:flex-wrap items-center justify-around gap-6 ">
          <span className="text-sm gap-y-1 cursor-pointer flex-col items-center justify-center ">
            <img src="/images/features/1.svg" alt="" className="w-14 h-14" />
            <p className="text-gray-500 dark:text-gray-300">
              امکان تحویل اکسپرس
            </p>
          </span>{" "}
          <span className="text-sm gap-y-1 cursor-pointer flex-col items-center justify-center ">
            <img src="/images/features/2.svg" alt="" className="w-14 h-14" />
            <p className="text-gray-500 dark:text-gray-300">
              {" "}
              ضمانت اصل بودن کالا
            </p>
          </span>{" "}
          <span className="text-sm gap-y-1 cursor-pointer flex-col items-center justify-center ">
            <img src="/images/features/3.svg" alt="" className="w-14 h-14" />
            <p className="text-gray-500 dark:text-gray-300">
              {" "}
              ضمانت بازگشت کالا{" "}
            </p>
          </span>{" "}
          <span className="text-sm gap-y-1 cursor-pointer flex-col items-center justify-center ">
            <img src="/images/features/4.svg" alt="" className="w-14 h-14" />
            <p className="text-gray-500 dark:text-gray-300">
              پشتیبانی 24 ساعته{" "}
            </p>
          </span>{" "}
        </section>
        {/* bottom-navbar */}
        {/*  رت تعمال بکنیمtranslate-y-[0px]برای نمایش این قسمت باید */}
        <ul className=" fixed bottom-0 left-0 right-0 z-20 h-16 flex  items-center justify-around mx-4 rounded-t-sm translate-y-[100%] transition-transform duration-500 ease-in-out shadow bg-white">
          <li className="dark:text-sky-400 text-blue-500 font-Dana-Medium flex flex-col items-center leading-5 text-sm gap-1 cursor-pointer">
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <a href="/">خانه</a>
          </li>
          <li className=" flex flex-col items-center leading-5 text-sm gap-1 cursor-pointer">
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
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>

            <a href="/">فروشگاه</a>
          </li>
          <li className=" flex flex-col items-center leading-5 text-sm gap-1 cursor-pointer">
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <a href="/">سبد خرید</a>
          </li>
          <li className=" flex flex-col items-center leading-5 text-sm gap-1 cursor-pointer">
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <a href="/">حساب من</a>
          </li>
        </ul>
      </main>

      <footer>
        <div>
          <div className="mx-4 xl:mx-10 mt-10 font-Dana  relative bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-4 lg:p-9">
            <div className=" relative w-full bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-4 lg:p-9">
              <div className="flex items-start flex-col gap-x-7 lg:gap-x-10 gap-y-10 lg:flex-row flex-wrap">
                <div className="flex-[2] w-full">
                  <h2 className=" font-Morabba-Medium text-xl mb-4 leading-7">
                    درباره پوشینو
                  </h2>
                  <p className="leading-8 text-gray-400 mb-5">
                    در فروشگاه آنلاین ما، بهترین مد و پوشاک از برندهای معتبر
                    جهانی را با کیفیت بالا و قیمتی مناسب برای شما فراهم
                    آورده‌ایم. با انتخاب محصولات ما، تجربه‌ای حرفه‌ای و لذت‌بخش
                    از فناوری را در خانه یا محل کار داشته باشید.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <Link
                      className="size-10 bg-gray-950 rounded-xl flex-center"
                      href={"/"}
                    >
                      {" "}
                      <svg
                        id="instagram"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="size-6 text-blue-500"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <Link
                      className="size-10 bg-gray-950 rounded-xl flex-center"
                      href={"/"}
                    >
                      <svg
                        id="whats"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="size-6 text-blue-500"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="currentColor"
                          d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                        />
                      </svg>
                    </Link>
                    <Link
                      className="size-10 bg-gray-950 rounded-xl flex-center"
                      href={"/"}
                    >
                      <svg
                        id="linkedin"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="size-6 text-blue-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"></path>
                      </svg>
                    </Link>
                    <Link
                      className="size-10 bg-gray-950 rounded-xl flex-center"
                      href={"/"}
                    >
                      <svg
                        id="youtube"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="size-6 text-blue-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="flex-1 flex flex-col w-full lg:w-auto">
                  <h2 className=" font-Morabba-Medium text-xl mb-4 leading-7">
                    دسترسی سریع
                  </h2>
                  <div className="flex gap-x-10 ">
                    <ul className="space-y-2 text-gray-400">
                      <li className="hover:text-blue-500 transition-colors ease-in-out">
                        <Link href="/">صفحه اصلی</Link>
                      </li>
                      <li className="hover:text-blue-500 transition-colors ease-in-out">
                        <Link href="/products">فروشگاه</Link>
                      </li>
                      <li className="hover:text-blue-500 transition-colors ease-in-out">
                        <Link href="/contactus">تماس با ما </Link>
                      </li>
                      <li className="hover:text-blue-500 transition-colors ease-in-out">
                        <Link href="/questions">سوالات متداول </Link>
                      </li>
                    </ul>
                    <ul className=" md:hidden  space-y-2 text-gray-400">
                      <li className="child:transition-colors hover:text-blue-500">
                        <Link href="login.html"> ثبت نام | ورود </Link>
                      </li>
                      <li className="child:transition-colors hover:text-blue-500">
                        <Link href="articles.html">وبلاگ</Link>
                      </li>
                      <li className="child:transition-colors hover:text-blue-500">
                        <Link href="">شرایط و قوانین</Link>
                      </li>
                      <li className="child:transition-colors hover:text-blue-500">
                        <Link href="">حریم خصوصی </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-[1.5] w-full">
                  {" "}
                  <h2 className=" font-Morabba-Medium text-xl mb-4 leading-7">
                    تماس با ما
                  </h2>
                  <ul className="flex flex-col  gap-y-6">
                    <li className="flex text-gray-400 items-center justify-between">
                      <p>شماره تماس :</p>
                      <p dir="ltr">012-345 678</p>
                    </li>
                    <li className="flex text-gray-400 items-center justify-between">
                      <p>آدرس ایمیل :</p>
                      <p>poshino@gmail.com</p>
                    </li>
                    <li className="flex text-gray-400 items-center justify-between">
                      <p>آدرس :</p>
                      <p>بلوار آزادی، استاد معین پلاک ۱۰</p>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full md:w-1/6 flex flex-col items-end justify-end ml-5 md:ml-0 md:mr-5">
                  <div className="flex justify-center md:justify-end items-center gap-x-3  ">
                    <span className="w-16 h-16 lg:w-20 lg:h-20 flex-center rounded-xl bg-gray-950 dark:bg-gray-900 ">
                      <img
                        className="w-16 h-16"
                        src="/images/enamad.png"
                        alt=""
                      />
                    </span>
                    <span className="w-16 h-16 lg:w-20 lg:h-20 flex-center rounded-xl  bg-gray-950 dark:bg-gray-900 ">
                      <img
                        className="w-16 h-16"
                        src="/images/ecunion.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <button className="ring-2 cursor-pointer ring-gray-400 text-gray-300 w-32 rounded-lg text-sm flex-center gap-x-2 py-1.5 px-2 mt-10 ">
                    بازگشت به بالا
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4  rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full rounded-xl bg-gray-950 dark:bg-gray-900 flex flex-col md:flex-row gap-y-4 items-center justify-between p-4 md:p-6 mt-6">
                <Link href="/" className="text-3xl font-Morabba-Medium">
                  <span className="text-blue-500">پوشینو</span>
                </Link>
                <div className="bg-gray-900 dark:bg-gray-800 p-1.5 rounded-xl  lg:w-[350px] flex items-center justify-between">
                  <input
                    type="text"
                    className="bg-transparent text-gray-200 px-2 w-full focus:outline-none text-[10px] md:text-base"
                    placeholder="از جدیدترین تخفیف ها با خبر شوید"
                  />
                  <button className="px-4 py-1 bg-blue-500 rounded-xl font-Dana-Medium cursor-pointer text-[10px] md:text-base">
                    ثبت
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm my-4 text-gray-400">
            Copyright © 2025 Pushino. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
