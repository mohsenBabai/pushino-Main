"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      {/* هدر سایت */}
      {/* BreadCrumb */}
      <nav className="flex mt-8 mr-4 mx-4 xl:mx-10 ">
        <ol className="inline-flex items-center  ">
          <li className="inline-flex items-center">
            <Link
              className="inline-flex items-center text-[13px] sm:text-sm gap-x-1  text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              href={"/"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hidden sm:flex size-4 mb-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              صفحه اصلی
            </Link>
          </li>
          <li className="inline-flex items-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden="true"
              className=" w-3 h-3 text-gray-400 mx-1"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              ></path>
            </svg>
            <Link
              href={"/"}
              className="inline-flex items-center text-[13px] sm:text-sm gap-x-1 ms-1  md:ms-2   text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              لباس
            </Link>
          </li>{" "}
          <li className="inline-flex items-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden="true"
              className=" w-3 h-3 text-gray-400 mx-1"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              ></path>
            </svg>
            <Link
              href={"/"}
              className="inline-flex items-center text-[13px] sm:text-sm gap-x-1 ms-1  md:ms-2   text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              شال
            </Link>
          </li>{" "}
          <li className="inline-flex items-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden="true"
              className=" w-3 h-3 text-gray-400 mx-1"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              ></path>
            </svg>
            <Link
              href={"/"}
              className="inline-flex items-center text-[13px] sm:text-sm gap-x-1 ms-1  md:ms-2   text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              جزییات محصول
            </Link>
          </li>
        </ol>
      </nav>
      {/* ProductDetail */}
      <section className="mt-5 flex flex-col lg:flex-row items-start gap-4 px-4 xl:px-10">
        {/* product infos  */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow p-4 w-full lg:w-3/4">
          {/* image & product detaile */}
          <div className="flex flex-col md:flex-row justify-start gap-x-8 xl:gap-x-2 items-start">
            <div className="w-full md:w-2/4 flex flex-col justify-center items-center gap-y-4 ml-3 ">
              {/* add to wishlist btn in mobile */}
              <div className="flex w-full md:hidden items-center justify-around ">
                {/* icons */}
                <div className=" cursor-pointer relative inline-block group">
                  <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
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
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                      />
                    </svg>
                  </button>
                  <div className="tooltiptext flex items-center  invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6]">
                    اشتراک‌گذازی
                  </div>
                </div>{" "}
                <div className=" cursor-pointer relative inline-block group">
                  <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
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
                  </button>
                  <div className="tooltiptext invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6]">
                    علاقه مندی
                  </div>
                </div>{" "}
                <div className=" cursor-pointer relative inline-block group">
                  <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
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
                        d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                      />
                    </svg>
                  </button>
                  <div className="tooltiptext invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6]">
                    مقایسه
                  </div>
                </div>
              </div>
              {/* main img */}
              <span>
                <Image
                  width={500}
                  height={500}
                  src="/images/products/scarf1-3.png"
                  alt="product"
                  className="cursor-pointer object-cover rounded-lg"
                />
              </span>
              {/* img gallery */}
              <div className="grid grid-cols-12 gap-x-4 ">
                <div className="ring-2 ring-blue-600  w-auto sm:size-18 md:size-22 lg:size-auto rounded-lg cursor-pointer col-span-3 app-border">
                  <Image
                    width={500}
                    height={500}
                    src={"/images/products/scarf1-3.png"}
                    alt="product"
                    className="object-cover cursor-pointer rounded-lg"
                  />
                </div>{" "}
                <div className=" w-auto sm:size-18 md:size-22 lg:size-auto rounded-lg cursor-pointer col-span-3 app-border">
                  <Image
                    width={500}
                    height={500}
                    src={"/images/products/scarf1-1.png"}
                    alt="product"
                    className="object-cover cursor-pointer rounded-lg"
                  />
                </div>{" "}
                <div className="  w-auto sm:size-18 md:size-22 lg:size-auto rounded-lg cursor-pointer col-span-3 app-border">
                  <Image
                    width={500}
                    height={500}
                    src={"/images/products/scarf1-1.png"}
                    alt="product"
                    className="object-cover cursor-pointer rounded-lg"
                  />
                </div>{" "}
                <div className=" w-auto sm:size-18 md:size-22 lg:size-auto rounded-lg cursor-pointer col-span-3 app-border">
                  <Image
                    width={500}
                    height={500}
                    src={"/images/products/scarf1-2.png"}
                    alt="product"
                    className="object-cover cursor-pointer rounded-lg"
                  />
                </div>
              </div>
            </div>
            {/*  product detaile */}
            <div className="w-full md:w-3/4 flex flex-col gap-y-7 mt-5">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-Dana-Demibold dark:text-gray-300">
                  شال جدید
                </p>
                {/* add to wishlist btn in pc */}
                <div className=" hidden md:flex items-center gap-x-2 ">
                  <div className=" cursor-pointer relative inline-block group">
                    <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
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
                          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                        />
                      </svg>
                    </button>
                    <div className="tooltiptext flex items-center  invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6]">
                      اشتراک‌گذازی
                    </div>
                  </div>{" "}
                  <div className=" cursor-pointer relative inline-block group">
                    <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
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
                    </button>
                    <div className="tooltiptext invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6]">
                      علاقه مندی
                    </div>
                  </div>{" "}
                  <div className=" cursor-pointer relative inline-block group">
                    <button className=" flex-center p-2 border border-[#dbd5d1] dark:border-[#374155] rounded-full cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#1f2937] transition-all ease-in-out duration-150 ">
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
                          d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                        />
                      </svg>
                    </button>
                    <div className="tooltiptext invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#3b82f6]">
                      مقایسه
                    </div>
                  </div>
                </div>
              </div>
              {/* desc & rating */}

              <div className="flex items-center gap-x-2">
                <span className="flex items-center gap-x-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-yellow-400 mb-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  4.5
                  <span className="text-gray-300 dark:text-gray-500">
                    (امتیاز 100 خریدار)
                  </span>
                </span>

                <span className="h-6 bg-slate-100 text-gray-400 dark:bg-slate-700 dark:text-gray-400 flex items-center justify-center rounded-full px-2 text-xs font-Dana-Medium pt-1">
                  2 دیدگاه
                </span>
              </div>

              {/* product layout */}

              <div className="flex flex-col gap-y-4">
                <h1 className="font-Dana-Demibold text-lg color-title dark:text-gray-200">
                  طرح بندی :
                </h1>
                <div className="flex items-center gap-x-3">
                  <div className="ring text-blue-600  ring-blue-600 font-Dana-Demibold  dark:border-white/20  rounded-lg  p-2 flex items-center text-sm  cursor-pointer transition-all ease-in-out ">
                    آبی
                  </div>{" "}
                  <div className="ring  ring-gray-600  font-Dana-Demibold text-gray-600 dark:border-white/20  rounded-lg  p-2 flex items-center text-sm  cursor-pointer transition-all ease-in-out ">
                    آبی
                  </div>{" "}
                  <div className="ring   ring-gray-600  font-Dana-Demibold text-gray-600 dark:border-white/20  rounded-lg  p-2 flex items-center text-sm  cursor-pointer transition-all ease-in-out ">
                    آبی
                  </div>{" "}
                  <div className="ring  ring-gray-600 font-Dana-Demibold text-gray-600 dark:border-white/20  rounded-lg  p-2 flex items-center text-sm  cursor-pointer transition-all ease-in-out ">
                    آبی
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="font-Dana-Demibold flex itc justify-between  ">
                  <p className="text-lg leading-6 pt-1.5">سایز بندی :</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="ring text-blue-600  ring-blue-600 font-Dana-Demibold  dark:border-white/20  rounded-lg  p-2 flex items-center text-sm  cursor-pointer transition-all ease-in-out ">
                    فری
                  </div>{" "}
                </div>
              </div>
              {/* infos */}
              <div className="w-full flex flex-col gap-y-4">
                <h1 className="font-Dana-Demibold text-lg dark:text-gray-200">
                  مشخصات :
                </h1>
                <div className="grid grid-cols-12 gap-2 ">
                  <div className="col-span-12 md:col-span-6 xl:col-span-4 p-2 h-16 bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col gap-y-1.5">
                    <p className="text-sm text-gray-500">رنگ :</p>
                    <p className="line-clamp-1 font-Dana-Demibold text-sm text-slate-800 dark:text-slate-200">
                      ابی
                    </p>
                  </div>{" "}
                  <div className="col-span-12 md:col-span-6 xl:col-span-4 p-2 h-16 bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col gap-y-1.5">
                    <p className="text-sm text-gray-500">رنگ :</p>
                    <p className="line-clamp-1 font-Dana-Demibold text-sm text-slate-800 dark:text-slate-200">
                      ابی
                    </p>
                  </div>{" "}
                  <div className="col-span-12 md:col-span-6 xl:col-span-4 p-2 h-16 bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col gap-y-1.5">
                    <p className="text-sm text-gray-500">رنگ :</p>
                    <p className="line-clamp-1 font-Dana-Demibold text-sm text-slate-800 dark:text-slate-200">
                      ابی
                    </p>
                  </div>{" "}
                  <div className="col-span-12 md:col-span-6 xl:col-span-4 p-2 h-16 bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col gap-y-1.5">
                    <p className="text-sm text-gray-500">رنگ :</p>
                    <p className="line-clamp-1 font-Dana-Demibold text-sm text-slate-800 dark:text-slate-200">
                      ابی
                    </p>
                  </div>{" "}
                  <div className="col-span-12 md:col-span-6 xl:col-span-4 p-2 h-16 bg-gray-100 dark:bg-gray-900 rounded-lg flex flex-col gap-y-1.5">
                    <p className="text-sm text-gray-500">رنگ :</p>
                    <p className="line-clamp-1 font-Dana-Demibold text-sm text-slate-800 dark:text-slate-200">
                      ابی
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-4">
                <h1 className="font-Dana-Demibold text-lg dark:text-gray-200">
                  معرفی محصول :
                </h1>
                <div className="text-md text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, ducimus maxime facere repellat laudantium pariatur
                  commodi molestiae dolor odit rerum excepturi error non minima,
                  officiis aut voluptatem eius, deleniti saepe.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  price & add to cart btn */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow p-4 w-full lg:w-1/4 lg:sticky top-5 flex flex-col gap-y-6">
          {/* price */}
          <div className="flex items-center justify-between">
            <span className="font-Dana-Demibold"> قیمت محصول :</span>
            <span className="flex items-center gap-x-1">
              {" "}
              <p className="text-2xl font-Dana-Demibold">500,000</p>
              <p>تومان</p>
            </span>
          </div>
          <button className="w-full flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-2 px-3">
            <div className=" cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <span className="flex w-1/3 text-lg bg-transparent text-center outline-none justify-center items-center">
              1
            </span>

            <div className=" cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </div>
          </button>
          <div className="w-full flex items-center gap-x-1 justify-between dark:bg-gray-900 dark:text-gray-400  bg-gray-100 transition-all rounded-lg py-2 px-2 xl:px-3 font-Dana-Medium text-sm xl:text-base">
            <p>مجموع خرید :</p>
            <p>500,000 تومان</p>
          </div>
          <div className="transition-all duration-700 ease-in-out relative overflow-hidden text-sm font-Dana-Demibold text-right">
            <p className="text-red-500">🔥 20+ فروش در هفته گذشته</p>
          </div>
          <button className="w-full cursor-pointer flex items-center gap-x-1 justify-center bg-blue-500 text-white hover:bg-blue-600 transition-all rounded-lg shadow py-2">
            افزودن به سبد خرید
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
          <div className="text-sm  text-gray-400 flex xl:items-center justify-center">
            <p>ارسال رایگان برای خریدهای بالای 400 هزار تومان</p>
          </div>
        </div>
      </section>

      {/*  دیدگاه ها*/}
      <div className="relative mt-10 flex flex-col items-start gap-4 rounded-lg bg-white dark:bg-gray-800 shadow p-4 mx-4 xl:mx-10">
        <div className=" w-full ">
          <div className="flex items-center gap-x-2 mb-6">
            <h2 className="font-Dana-Medium text-2xl ">دیدگاه ها</h2>
            <p className="text-sm text-blue-500">(2 دیدگاه)</p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-start gap-10">
            {/*  SUBMIT COMMENT */}
            <div className="lg:w-1/4 flex flex-col w-full ">
              <p className="font-Dana-Medium text-lg mb-2">ثبت دیدگاه</p>
              <input
                type="text"
                placeholder="عنوان"
                className="w-full rounded-lg p-2 mb-4 shadow  outline-none ring-1 ring-[#e5e7eb] focus:ring-blue-400 outline-2 transition-all ease-in-out duration-300"
              />
              <p className="text-gray-500 dark:text-white text-sm mb-4">
                این محصول را به دیگران پیشنهاد :{" "}
              </p>
              <div className="grid grid-cols-12 gap-4 mb-5 ">
                <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600 dark:ring-white/20 dark:focus:ring-green-600 transition-all font-Dana-Medium duration-300 w-full flex items-center justify-center gap-x-2 rounded-lg shadow py-2 col-span-6 cursor-pointer">
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
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                  میکنم
                </button>
                <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343] dark:ring-white/20 dark:focus:ring-[#EF4343] transition-all font-Dana-Medium duration-300 w-full flex items-center justify-center gap-x-2 rounded-lg shadow py-2 col-span-6 cursor-pointer">
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
                      d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                    />
                  </svg>
                  نمیکنم
                </button>
              </div>
              <textarea
                className="h-24 w-full rounded-lg p-2 mb-4 shadow  outline-none ring-1 ring-[#e5e7eb] focus:ring-blue-400 outline-2 transition-all ease-in-out duration-300"
                placeholder="متن دیدگاه"
              ></textarea>
              <button className="rounded-lg p-2 bg-blue-500 hover:bg-blue-600 text-white transition-all cursor-pointer">
                ثبت
              </button>
            </div>
            {/* ALL COMMENTS  */}
            <ul className="lg:w-3/4 flex flex-col gap-y-2 child:w-full ">
              {/* <!-- COMMENT ITEMS --> */}
              <li className=" py-4 border-b border-gray-200 dark:border-b-gray-200/20 ">
                {/* <!-- TITLE --> */}
                <div className=" items-center gap-x-2 border-white/20 flex">
                  <h2 className="font-Dana-Medium text-lg mb-1">
                    عملکرد سریع و روان
                  </h2>
                  <span className="px-2 py-1 mb-2 rounded-lg bg-blue-500 text-white text-xs">
                    خریدار
                  </span>
                </div>
                {/* <!-- COOMENT TEXT --> */}
                <div className="flex-col border-white/20 flex">
                  <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
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
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    پیشنهاد میشود
                  </h2>
                  <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">
                    موبایل بسیار سریعی هست، اجرای برنامه‌ها بدون لگ انجام میشه.
                    کیفیت ساخت بدنه هم عالیه.
                  </p>
                </div>
                {/* <!-- COMMENT FOOTER --> */}
                <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between border-white/20 flex">
                  <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                    <p>11 بهمن 1402</p>
                    <p>امیررضا کریمی</p>
                  </div>
                  <div className="flex items-center gap-x-2 flex-wrap mt-2">
                    <p className="text-gray-400 text-sm">
                      آیا این دیدگاه برایتان مفید بود؟
                    </p>
                    <div className="flex items-center gap-x-2 ">
                      <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600 transition-all text-sm flex items-center gap-x-1 rounded-lg p-2 font-Dana-Medium duration-300 ">
                        78
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
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                          />
                        </svg>
                      </button>
                      <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343] transition-all text-sm flex items-center gap-x-1 rounded-lg p-2 font-Dana-Medium duration-300 ">
                        25
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
                            d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>{" "}
              {/* <!-- COMMENT ITEMS --> */}
              <li className=" py-4 border-b border-gray-200 dark:border-b-gray-200/20 ">
                {/* <!-- TITLE --> */}
                <div className=" items-center gap-x-2 border-white/20 flex">
                  <h2 className="font-Dana-Medium text-lg mb-1">
                    عملکرد سریع و روان
                  </h2>
                  <span className="px-2 py-1 mb-2 rounded-lg bg-blue-500 text-white text-xs">
                    خریدار
                  </span>
                </div>
                {/* <!-- COOMENT TEXT --> */}
                <div className="flex-col border-white/20 flex">
                  <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
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
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    پیشنهاد میشود
                  </h2>
                  <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">
                    موبایل بسیار سریعی هست، اجرای برنامه‌ها بدون لگ انجام میشه.
                    کیفیت ساخت بدنه هم عالیه.
                  </p>
                </div>
                {/* <!-- COMMENT FOOTER --> */}
                <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between border-white/20 flex">
                  <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                    <p>11 بهمن 1402</p>
                    <p>امیررضا کریمی</p>
                  </div>
                  <div className="flex items-center gap-x-2 flex-wrap mt-2">
                    <p className="text-gray-400 text-sm">
                      آیا این دیدگاه برایتان مفید بود؟
                    </p>
                    <div className="flex items-center gap-x-2 ">
                      <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600 transition-all text-sm flex items-center gap-x-1 rounded-lg p-2 font-Dana-Medium duration-300 ">
                        78
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
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                          />
                        </svg>
                      </button>
                      <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343] transition-all text-sm flex items-center gap-x-1 rounded-lg p-2 font-Dana-Medium duration-300 ">
                        25
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
                            d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>{" "}
              {/* <!-- COMMENT ITEMS --> */}
              <li className=" py-4 border-b border-gray-200 dark:border-b-gray-200/20 ">
                {/* <!-- TITLE --> */}
                <div className=" items-center gap-x-2 border-white/20 flex">
                  <h2 className="font-Dana-Medium text-lg mb-1">
                    عملکرد سریع و روان
                  </h2>
                  <span className="px-2 py-1 mb-2 rounded-lg bg-blue-500 text-white text-xs">
                    خریدار
                  </span>
                </div>
                {/* <!-- COOMENT TEXT --> */}
                <div className="flex-col border-white/20 flex">
                  <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
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
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    پیشنهاد میشود
                  </h2>
                  <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">
                    موبایل بسیار سریعی هست، اجرای برنامه‌ها بدون لگ انجام میشه.
                    کیفیت ساخت بدنه هم عالیه.
                  </p>
                </div>
                {/* <!-- COMMENT FOOTER --> */}
                <div className="mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between border-white/20 flex">
                  <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                    <p>11 بهمن 1402</p>
                    <p>امیررضا کریمی</p>
                  </div>
                  <div className="flex items-center gap-x-2 flex-wrap mt-2">
                    <p className="text-gray-400 text-sm">
                      آیا این دیدگاه برایتان مفید بود؟
                    </p>
                    <div className="flex items-center gap-x-2 ">
                      <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600 transition-all text-sm flex items-center gap-x-1 rounded-lg p-2 font-Dana-Medium duration-300 ">
                        78
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
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                          />
                        </svg>
                      </button>
                      <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343] transition-all text-sm flex items-center gap-x-1 rounded-lg p-2 font-Dana-Medium duration-300 ">
                        25
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
                            d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- HIDDEN COMMENTS --> */}
              {/* <!-- COMMENT ITEMS --> */}
              <li className=" py-4 border-b border-gray-200 dark:border-b-gray-200/20 hidden">
                {/* <!-- TITLE --> */}
                <div className="flex items-center gap-x-2 child:border-white/20">
                  <h2 className="font-Dana-Medium text-lg mb-1">
                    باطری فوق‌العاده‌اس
                  </h2>
                  <span className="px-2 py-1 mb-2 rounded-lg bg-blue-500 text-white text-xs">
                    خریدار
                  </span>
                </div>
                {/* <!-- COOMENT TEXT --> */}
                <div className="flex flex-col child:border-white/20">
                  <h2 className="flex items-center gap-x-1 text-green-500 mb-4">
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
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    پیشنهاد میشود
                  </h2>
                  <p className="text-gray-500 dark:text-gray-200 mb-2 line-clamp-2">
                    من باطری گوشی رو با استفاده زیاد تست کردم، دو روز کامل جواب
                    داد. عالیه!
                  </p>
                </div>
                {/* <!-- COMMENT FOOTER --> */}
                <div className="flex mt-2 lg:mt-0 flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
                  <div className="flex items-center gap-x-4 text-gray-400 text-sm">
                    <p>11 بهمن 1402</p>
                    <p>امیررضا کریمی</p>
                  </div>
                  <div className="flex items-center gap-x-2 flex-wrap mt-2">
                    <p className="text-gray-400 text-sm">
                      آیا این دیدگاه برایتان مفید بود؟
                    </p>
                    <div className="flex items-center gap-x-2 ">
                      <button className="text-green-600 ring-transparent ring-1 focus:ring-green-600  dark:focus:ring-green-600 transition-all text-sm flex items-center gap-x-1 rounded-lg p-2 font-Dana-Medium duration-300 ">
                        78
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
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                          />
                        </svg>
                      </button>
                      <button className="text-red-500 ring-transparent ring-1 focus:ring-[#EF4343]  dark:focus:ring-[#EF4343] transition-all text-sm flex items-center gap-x-1 rounded-lg p-2 font-Dana-Medium duration-300 ">
                        25
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
                            d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* محصولات مرتبط */}
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
                مرتبط ترین
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
                <Image
                  height={200}
                  hidden={300}
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
      {/* فوتر سایت */}
    </>
  );
}
