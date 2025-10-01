import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className=" mt-5  px-4 xl:px-10 flex-col gap-y-6 flex font-Dana w-full mx-auto">
        <div className="my-2 py-5 lg:px-10 flex flex-col lg:flex-row gap-4 mx-3 font-Dana">
          {/*  Blog infos & comments */}
          <div className="lg:w-10/12">
            {/*  Blog infos  */}
            <div className="bg-white rounded-xl shadow-lg p-4">
              {/*  Blog Data & category */}
              <div className="flex gap-4 pb-3 flex-wrap">
                {/* items */}
                <div className="text-xs flex gap-x-1 items-center text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-zinc-500"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160z"></path>
                  </svg>
                  1404/04/21
                </div>
                <div className="text-xs flex gap-x-1 items-center text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-zinc-500"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0 87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32 32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75 48 48 0 1 0-59.4 0 79.66 79.66 0 0 0-36.06 28.75 88 88 0 1 1 131.52 0"></path>
                  </svg>
                  ارسال شد توسط علی محمودی
                </div>
                <div className="text-xs flex gap-x-1 items-center text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-zinc-500"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l27.74 20.8a16.12 16.12 0 0 0 9.6 3.2H192Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l27.74 20.8a16.12 16.12 0 0 0 9.6 3.2H224Z"></path>
                  </svg>
                  دسته بندی <Link href={"/"}>آموزشی</Link>
                </div>
                <div className="text-xs flex gap-x-1 items-center text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-zinc-500"
                    viewBox="0 0 256 256"
                  >
                    <path d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32 32 32 0 0 1-32 32"></path>
                  </svg>
                  10 بازدید
                </div>
              </div>
              {/*  Blog img*/}
              <img
                src="/images/category/cat2.png"
                className="rounded-lg"
                alt="blogImg"
              />
              {/*  Blog description */}
              <div className="mt-7 text-sm">
                {/* title */}
                <div className="text-lg md:text-2xl font-bold text-zinc-800">
                  اکسپلور یوتیوب چطور کار می‌کند؟ راهنمای کامل در سال ۲۰۲۵
                </div>
                <div className="bg-blue-400 w-6/12 h-1 mt-2"></div>
                {/* description */}
                <div className="text-zinc-600 my-7 flex flex-wrap">
                  <span className="text-lg font-semibold text-zinc-800">
                    مقدمه
                  </span>
                  <span className="leading-8  mb-4">
                    یوتیوب دیگر فقط یک پلتفرم تماشای ویدیو نیست؛ بلکه میدان
                    رقابتی بزرگی است که در آن تولیدکنندگان محتوا برای جلب توجه
                    مخاطبان، به درک الگوریتم‌های این پلتفرم نیاز دارند. یکی از
                    مهم‌ترین بخش‌های یوتیوب که می‌تواند یک کانال را به شهرت
                    برساند، بخش اکسپلور یوتیوب (Explore) محسوب می‌شود. اما این
                    بخش دقیقا چگونه کار می‌کند؟ چه ویدیوهایی را نمایش می‌دهد و
                    چگونه می‌توان در آن دیده شد؟ در سال ۲۰۲۵، الگوریتم‌های
                    یوتیوب پیچیده‌تر و هوشمندتر از همیشه شده‌اند و روش‌های سنتی
                    دیگر به ‌تنهایی کافی نیستند. در این مقاله، به‌ طور جامع و
                    به‌روز بررسی خواهیم کرد که اکسپلور یوتیوب چگونه کار می‌کند،
                    چه عواملی بر نمایش ویدیوها در این بخش تاثیر دارند و چگونه
                    می‌توان از آن برای رشد سریع‌تر کانال استفاده کرد. اگر به
                    دنبال افزایش بازدید، جذب سابسکرایبرهای جدید و تقویت جایگاه
                    خود در یوتیوب هستید، این راهنما به طور حتم برای شماست.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* last Blog  & Hashtag */}
          <div className="lg:w-4/12">
            {/* last Blog  */}

            <div className="p-3 bg-white rounded-xl shadow-lg mb-4">
              <div className="mx-auto flex gap-x-1 group items-center text-right w-full px-2 py-3 text-gray-600 rounded-lg mb-2 font-semibold">
                <span className="w-44">جدیدترین مقالات</span>
                <span className="bg-blue-400 w-full h-1"></span>
              </div>
              <ul className="grid w-full gap-3">
                <li>
                  <Link
                    href={"/"}
                    className="flex items-center justify-start gap-x-3 w-full p-2 text-gray-600 bg-white border border-gray-300 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100"
                  >
                    <img
                      className="max-w-20 rounded-md"
                      src="/images/article/article1.png"
                      alt="blogimg"
                    />
                    <div className="text-center flex flex-col space-y-3">
                      <div className="text-sm sm:text-base font-Dana-Medium  text-right h-8  sm:h-12">
                        blog title
                      </div>
                      <div className="flex items-start gap-x-1 text-xs text-zinc-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          className="fill-gray-400"
                          viewBox="0 0 256 256"
                        >
                          <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"></path>
                        </svg>
                        <span> 2 دقیقه</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            {/*  Hashtag */}

            <div className="p-3 bg-white rounded-xl shadow-lg">
              <div className="mx-auto flex gap-x-1 group items-center text-right w-full px-2 py-3 text-gray-600 rounded-lg mb-2 font-semibold">
                <span className="w-44">برچسب ها</span>
                <span className="bg-blue-400 w-full h-1"></span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className="bg-gray-200 text-gray-500  cursor-pointer hover:text-blue-500 transition px-2 py-1 text-sm rounded-full w-fit">
                  #لپ_تاپ
                </div>{" "}
                <div className="bg-gray-200 text-gray-500  cursor-pointer hover:text-blue-500 transition px-2 py-1 text-sm rounded-full w-fit">
                  #بازی
                </div>{" "}
                <div className="bg-gray-200 text-gray-500  cursor-pointer hover:text-blue-500 transition px-2 py-1 text-sm rounded-full w-fit">
                  #مقاله
                </div>{" "}
                <div className="bg-gray-200 text-gray-500  cursor-pointer hover:text-blue-500 transition px-2 py-1 text-sm rounded-full w-fit">
                  #آموزش
                </div>{" "}
                <div className="bg-gray-200 text-gray-500  cursor-pointer hover:text-blue-500 transition px-2 py-1 text-sm rounded-full w-fit">
                  #گیمینگ
                </div>{" "}
                <div className="bg-gray-200 text-gray-500  cursor-pointer hover:text-blue-500 transition px-2 py-1 text-sm rounded-full w-fit">
                  #برنامه نویسی
                </div>{" "}
                <div className="bg-gray-200 text-gray-500  cursor-pointer hover:text-blue-500 transition px-2 py-1 text-sm rounded-full w-fit">
                  #طراحی
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
