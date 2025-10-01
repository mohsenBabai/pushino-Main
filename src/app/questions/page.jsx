import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="bg-white shadow-lg lg:my-10 mx-5 rounded-xl md:rounded-2xl p-3 md:p-5 border border-[#00000017] font-Dana">
      <div className="flex flex-col justify-center p-5 bg-white shadow-box-md rounded-xl mb-8">
        <h3 className="text-lg text-gray-800">سوالات پرتکرار</h3>
        <p className="text-[15px] font-light text-gray-600 my-3">
          اگه سوال مورد نظرتون رو پیدا نکردید به{" "}
          <Link
            href={"/"}
            className="hover:text-blue-600 text-blue-500 transition"
          >
            پشتیبانی
          </Link>{" "}
          پیام بدید
        </p>
        <div className="flex flex-col gap-y-5 w-11/12 mx-auto mt-4 pb-4">
          <button className="group border-t border-x border border-[#00000040] rounded-lg focus:outline-none font-Dana">
            <div className="flex items-center cursor-pointer justify-between h-14 px-3 rounded-lg text-zinc-700 hover:bg-gray-100">
              چطور سفارشمون رو تایید کنیم؟
              <span className="truncate"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-4 w-4"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden group-focus:max-h-40 transition-all transition-discrete duration-700 hover:bg-gray-100 text-right text-sm">
              <div className="py-5 px-4 text-zinc-700 font-Dana">
                با تسویه کردن سبد خرید، سفارش به صورت خودکار تایید میشه.ونیاز به
                کار خاصی از طرف شما یا ما نیست.
              </div>
            </div>
          </button>
          <button className="group border-t border-x border border-[#00000040] rounded-lg focus:outline-none font-Dana">
            <div className="flex items-center cursor-pointer justify-between h-14 px-3 rounded-lg text-zinc-700 hover:bg-gray-100">
              چطور میتوانم سفارشم را لغو کنم ؟<span className="truncate"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-4 w-4"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden group-focus:max-h-40 transition-all transition-discrete duration-700 hover:bg-gray-100 text-right text-sm">
              <div className="py-5 px-4 text-zinc-700 font-Dana">
                پرداخت سفارش به منظور تایید نهایی است و امکان لغو سفارش وجود
                ندارد.
              </div>
            </div>
          </button>
          <button className="group border-t border-x border border-[#00000040] rounded-lg focus:outline-none font-Dana">
            <div className="flex items-center cursor-pointer justify-between h-14 px-3 rounded-lg text-zinc-700 hover:bg-gray-100">
              سفارشم را به صورت اینترنتی پرداخت کردم اما سفارشم تایید نشده !
              <span className="truncate"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-4 w-4"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden group-focus:max-h-40 transition-all transition-discrete duration-700 hover:bg-gray-100 text-right text-sm">
              <div className="py-5 px-4 text-zinc-700 font-Dana">
                در صورت کسر وجه از حساب و عدم تایید سفارش , وجه تا 72 ساعت آینده
                به حساب شما واریز می شود.در صورت برگشت نخوردن مبلغ به دلیل
                اختلال بانکی با شماره 09377413367 تماس بگیرید.
              </div>
            </div>
          </button>{" "}
          <button className="group border-t border-x border border-[#00000040] rounded-lg focus:outline-none font-Dana">
            <div className="flex items-center cursor-pointer justify-between h-14 px-3 rounded-lg text-zinc-700 hover:bg-gray-100">
              آیا می توانم سفارشم را مرجوع کنم؟
              <span className="truncate"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-4 w-4"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden group-focus:max-h-40 transition-all transition-discrete duration-700 hover:bg-gray-100 text-right text-sm">
              <div className="py-5 px-4 text-zinc-700 font-Dana">
                در صورتیکه محصول دارای ایراد باشد امکان مرجوعی وجود دارد.
              </div>
            </div>
          </button>{" "}
          <button className="group border-t border-x border border-[#00000040] rounded-lg focus:outline-none font-Dana">
            <div className="flex items-center cursor-pointer justify-between h-14 px-3 rounded-lg text-zinc-700 hover:bg-gray-100">
              تا چند روز زمان دارم سفارشم را مرجوع کنم؟
              <span className="truncate"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-4 w-4"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden group-focus:max-h-40 transition-all transition-discrete duration-700 hover:bg-gray-100 text-right text-sm">
              <div className="py-5 px-4 text-zinc-700 font-Dana">
                تا دو روز بعد سفارش در صورتیکه مورد تایید تیم پشتیبانی باشد ,
                امکان مرجوع کالا وجود دارد.
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
