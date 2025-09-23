"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ShoppingCart() {
  const handler = () => {};
  return (
    <>
      <section className="flex flex-col  lg:flex-row justify-between items-start gap-4 mx-4 xl:mx-10 mt-5">
        {/* cart */}
        <div className="w-full lg:w-3/4 flex flex-col gap-y-8 rounded-lg bg-white dark:bg-gray-800 shadow p-4 ">
          {/* cart header  */}
          <div className="flex items-center justify-between border-b-2 border-gray-200 dark:border-white/20 pb-1">
            <span className="flex items-center gap-x-2">
              <h2 className="font-Dana-Medium text-sm sm:text-base lg:text-xl">
                سبد خرید شما:
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
                (2کالا)
              </p>
            </span>
            <span className="flex items-center gap-x-1 text-red-600 dark:text-white cursor-pointer">
              <p className="mt-1 font-Dana-Medium text-sm sm:text-base">
                حذف همه
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </span>
          </div>
          {/* products */}
          <div className="flex items-center justify-between flex-col sm:flex-col gap-3">
            {/* 1 */}
            <div className="  w-full flex flex-col gap-y-4 border-2 border-gray-200 dark:border-white/20 rounded-xl ">
              <div className=" p-2 lg:p-4  relative">
                <div className="flex flex-col sm:flex-row gap-2  justify-between items-center  sm:items-center">
                  {/* img */}

                  <Image
                    width={200}
                    height={200}
                    src="/images/category/cat2.png"
                    alt="product img"
                    className="w-36"
                  />

                  {/* product infos */}
                  <div className="flex flex-col gap-y-5 items-start">
                    <h2 className="font-Dana-Medium line-clamp-1">شال</h2>
                    <ul className="space-y-3  text-gray-400 ">
                      <li className="text-sm flex items-center gap-x-1.5">
                        <p>رنگ :</p>
                        <p className="mt-1"> آبی</p>
                      </li>
                      <li className="text-sm flex items-center gap-x-1.5">
                        <p>سایز :</p>

                        <p className="mt-1"> 120 </p>
                      </li>
                      <li className="text-sm flex items-center gap-x-1.5">
                        <p className="mt-1"> تضمین بازگشت کالا</p>
                      </li>
                    </ul>
                  </div>
                  {/* count btn  */}
                  <button className="flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-1 px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 increment text-green-600 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>

                    <input
                      type="text"
                      className=" mr-8 text-lg bg-transparent outline-none max-w-11 "
                      name="custom-input"
                      value={2}
                      onChange={handler}
                      id="custom-input"
                      min={1}
                      max={2}
                    />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 decrement text-red-500 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                  {/* off */}
                  <div className="flex flex-col items-center gap-x-1 text-gray-700 dark:text-gray-300 font-Dana-Medium mt-5">
                    {/* اگر محصول تخفیف داشت  اینجا نمایش داده میشود */}
                    <span className="flex items-center justify-center text-red-600 text-[11px] pb-0.5">
                      500,000 تومان تخفیف
                    </span>
                    <span className="flex items-center">
                      <p className="  pl-1">4,500,000</p>
                      <p className="">تومان</p>
                    </span>
                  </div>
                  {/* trash in pc */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 hidden sm:flex text-red-600 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  {/* trash in mobile */}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 absolute top-3 left-3 sm:hidden text-red-600 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </div>{" "}
          </div>
        </div>
        {/* price box */}
        <div className="w-full mb-14 lg:w-1/4 lg:sticky top-5 flex flex-col gap-y-4 rounded-lg bg-white dark:bg-gray-800 shadow p-4 ">
          <div className="flex items-center justify-center border-b border-gray-300">
            <h4>خلاصه صورت حساب</h4>
          </div>
          <ul className=" space-y-8">
            <li className="flex items-center justify-between">
              <p className="">قیمت کالاها(۱)</p>
              <p className="flex gap-x-1 text-gray-700 dark:text-gray-200 ">
                5,000,000
                <span className="hidden xl:flex">تومان</span>
              </p>
            </li>
            <li className="flex items-center justify-between">
              <p className=""> تخفیف</p>
              <p className="font-Dana-Medium text-gray-700 dark:text-gray-200 ">
                ۵۰۰,۰۰۰ تومان
              </p>
            </li>
            <li className="flex items-center justify-between">
              <p className=""> کد تخفیف </p>
              <input
                type="text"
                maxLength={8}
                placeholder="در صورت داشتن کد"
                className="p-1.5 bg-transparent text-sm outline-none max-w-36 rounded-lg border-2 border-gray-500  focus:border-blue-600 transition-colors ease-in-out duration-200"
              />
            </li>
            <p className="text-xs">
              درصورت داشتن کد تخفیف مبلغ تخفیف از مبلغ نهایی کم خواهد شد
            </p>
            <li className="flex items-center justify-between border-t-2 border-dashed border-gray-400 pt-8">
              <p className="">جمع سبد خرید </p>
              <p className="font-Dana-Medium text-gray-700 dark:text-gray-200 ">
                4,500,000 تومان
              </p>
            </li>
          </ul>
          <Link
            className="w-full mt-4 flex items-center gap-x-1 justify-center bg-blue-500 text-white hover:bg-blue-600 transition-all rounded-lg shadow py-2"
            href={"/shoppingCart/userCartInfos"}
          >
            تایید و تکمیل سفارش
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Link>
        </div>
        {/* bottom-navbar */}
        <ul className=" fixed bottom-0 left-0 right-0 z-20 h-16 flex  items-center justify-around mx-4 rounded-t-sm translate-y-[0] md:translate-y-[100%] transition-transform duration-500 ease-in-out shadow bg-white">
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
      </section>
    </>
  );
}
