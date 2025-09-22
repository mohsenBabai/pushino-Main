import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        </ol>
      </nav>
      <div className="flex flex-col lg:flex-row gap-4 mt-5 mx-4 xl:mx-10">
        {/* side Filter box */}
        <div className="lg:sticky top-3 mt-14 h-fit lg:w-1/4 hidden lg:flex flex-col gap-y-4 items-center shadow rounded-lg py-4 dark:bg-gray-800 bg-white">
          {/* title */}
          <div className="flex items-center justify-between w-full px-2 xl:px-4">
            <span className="flex items-center gap-x-1">
              <p className="font-Dana-Demibold text-gray-700 dark:text-gray-200 text-lg">
                فیلتر ها
              </p>
            </span>
            <p className="text-blue-500 dark:text-blue-400 text-sm cursor-pointer">
              حذف فیلتر‌ها
            </p>
          </div>
          {/* Filters */}
          <div className="w-full divide-y divide-slate-200 dark:divide-gray-700/20">
            {/* category */}
            <div>
              {/* با کلیک روی این تگ زیر ان دسته بندی ها نمایش داده میشود */}
              <button className="w-full flex justify-between items-center px-2 xl:px-4 pt-4 mb-4 text-gray-800 dark:text-gray-100">
                <span>دسته بندی </span>
                <span className="text-gray-800 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              {/* ,حذفشودh-auto وh-auto دسته بندی   برای نمایش این قسمت باید کلس  را به ان اضاف کرد */}
              <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-3 text-gray-700 dark:text-gray-300 w-full flex flex-col gap-y-1.5">
                  {/* items */}
                  <div className="inline-flex items-center mr-2.5 mt-1">
                    <label
                      htmlFor="allProducts"
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                    >
                      <input
                        type="checkbox"
                        name="peer"
                        id="allProducts"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          stroke="currentColor"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      htmlFor="allProducts"
                      className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    >
                      روسری
                    </label>
                  </div>
                  {/* items */}
                  <div className="inline-flex items-center mr-2.5 mt-1">
                    <label
                      htmlFor="allProducts"
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                    >
                      <input
                        type="checkbox"
                        name="peer"
                        id="allProducts"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          stroke="currentColor"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      htmlFor="allProducts"
                      className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    >
                      شال
                    </label>
                  </div>
                  {/* items */}
                  <div className="inline-flex items-center mr-2.5 mt-1">
                    <label
                      htmlFor="allProducts"
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                    >
                      <input
                        type="checkbox"
                        name="peer"
                        id="allProducts"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          stroke="currentColor"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      htmlFor="allProducts"
                      className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    >
                      مینی اسکارف
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* price filtered */}
            <div>
              {/* با کلیک روی این تگ زیر ان محدوده نمایش داده میشود */}
              <button className="w-full flex justify-between items-center px-2 xl:px-4 py-4 text-gray-800 dark:text-gray-100">
                <span>محدوده قیمت</span>
                <span className="text-gray-800 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              {/* ,حذفشودh-auto وh-auto برای نمایش این قسمت باید کلس  را به ان اضاف کرد */}
              <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                {/* کد محدوده قیمت */}
              </div>
            </div>
            {/* size filtered */}
            <div>
              {/* با کلیک روی این تگ زیر ان دسته بندی ها نمایش داده میشود */}
              <button className="w-full flex justify-between items-center px-2 xl:px-4 pt-4 mb-4 text-gray-800 dark:text-gray-100">
                <span> سایز بندی </span>
                <span className="text-gray-800 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              {/* ,حذفشودh-auto وh-auto دسته بندی   برای نمایش این قسمت باید کلس  را به ان اضاف کرد */}
              <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-3 text-gray-700 dark:text-gray-300 w-full flex flex-col gap-y-1.5">
                  {/* items */}
                  <div className="inline-flex items-center mr-2.5 mt-1">
                    <label
                      htmlFor="allProducts"
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                    >
                      <input
                        type="checkbox"
                        name="peer"
                        id="allProducts"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          stroke="currentColor"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      htmlFor="allProducts"
                      className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    >
                      xl
                    </label>
                  </div>
                  {/* items */}
                  <div className="inline-flex items-center mr-2.5 mt-1">
                    <label
                      htmlFor="allProducts"
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                    >
                      <input
                        type="checkbox"
                        name="peer"
                        id="allProducts"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          stroke="currentColor"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      htmlFor="allProducts"
                      className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    >
                      md
                    </label>
                  </div>
                  {/* items */}
                  <div className="inline-flex items-center mr-2.5 mt-1">
                    <label
                      htmlFor="allProducts"
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                    >
                      <input
                        type="checkbox"
                        name="peer"
                        id="allProducts"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          stroke="currentColor"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      htmlFor="allProducts"
                      className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    >
                      2xl
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* toggle */}
            <div
              className="w-full justify-between flex items-center gap-x-3 px-2 xl:px-4 py-4"
              dir="ltr"
            >
              <label
                htmlFor="hs-valid-toggle-switch"
                className="relative inline-block w-11 h-6 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name=""
                  id="hs-valid-toggle-switch"
                  className="peer absolute w-[1px] h-[1px] -m-[1px] overflow-hidden border-0"
                />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
              </label>
              <label
                htmlFor="hs-valid-toggle-switch"
                className="text-gray-800 dark:text-gray-100"
              >
                فقط کالا های موجود
              </label>
            </div>
          </div>
        </div>
        {/* top Filter & products  */}
        <div className="lg:w-3/4">
          {/* top Filter  */}
          <div className="hidden lg:flex items-center justify-between  mb-6">
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-x-1 lg:gap-x-4 ">
                <div className="text-blue-500  transition-all cursor-pointer rounded-lg px-1 py-1 text-sm lg:text-base">
                  پیش فرض
                </div>
                <div className=" text-gray-400  transition-all cursor-pointer rounded-lg px-1 py-1 text-sm lg:text-base">
                  ارزان ترین
                </div>
                <div className=" text-gray-400  transition-all cursor-pointer rounded-lg px-1 py-1 text-sm lg:text-base">
                  گران ترین
                </div>
                <div className=" text-gray-400  transition-all cursor-pointer rounded-lg px-1 py-1 text-sm lg:text-base">
                  جدید ترین
                </div>
                <div className=" text-gray-400  transition-all cursor-pointer rounded-lg px-1 py-1 text-sm lg:text-base">
                  پرفروش ترین
                </div>{" "}
                <div className=" text-gray-400  transition-all cursor-pointer rounded-lg px-1 py-1 text-sm lg:text-base">
                  پیشنهادی
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-400 end">85 کالا</span>
          </div>
          {/*  products  */}
          <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-3 sm:gap-2 md:gap-4">
            {/* items */}
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
              {/* products Image*/}
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
            {/* items */}
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
              {/* products Image*/}
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
            {/* items */}
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
              {/* products Image*/}
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
            {/* items */}
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
              {/* products Image*/}
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
            {/* items */}
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
              {/* products Image*/}
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
            {/* items */}
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
              {/* products Image*/}
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
          </div>
          {/* paginatin  */}
          <div className="mt-10 w-full flex items-center justify-center">
            <ul className="flex items-center gap-x-3 ">
              <li className="bg-white dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-blue-500 hover:text-white flex items-center justify-center w-8 h-8 cursor-pointer shadow rounded-lg transition-all duration-300">
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="text-white bg-blue-500 flex items-center justify-center w-8 h-8 cursor-pointer shadow rounded-lg transition-all duration-300">
                <Link href={"/"}>1</Link>
              </li>
              <li className="bg-white dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white flex items-center justify-center w-8 h-8 cursor-pointer shadow rounded-lg transition-all duration-300">
                <Link href={"/"}>2</Link>
              </li>
              <li className="bg-white dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-blue-500 hover:text-white flex items-center justify-center w-8 h-8 cursor-pointer shadow rounded-lg transition-all duration-300">
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* فوتر سایت */}
    </>
  );
}
