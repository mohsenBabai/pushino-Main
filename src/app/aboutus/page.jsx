import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-white shadow-large lg:my-10 mx-5 rounded-xl md:rounded-2xl p-3 md:p-5 border border-[#00000017] font-Dana">
        <div className="relative flex justify-center items-center mb-5">
          <img
            className="w-full h-96 md:h-[500px] object-center object-cover rounded-xl blur-xs"
            src="/images/banners/banner1.png"
            alt="aboutUs"
          />
          <div className="absolute top-0  w-full h-full flex justify-center items-center bg-zinc-400/50 text-white font-bold rounded-xl">
            <div className="text-center space-y-5 font-Dana-Demibold">
              <div className="text-3xl sm:text-3xl md:text-5xl">
                پوشینو ,استایلی نو
              </div>
            </div>
          </div>
        </div>
        <div className="leading-10 ">
          <div className="mb-2 mt-4 text-lg font-Dana-Demibold text-zinc-800">
            درباره ما
          </div>
          <div className="leading-8 text-zinc-700 font-Dana">
            فروشگاه پوشینو به مدیریت محسسن بابایی فعالیت خود را از تاریخ
            1404/07/1 آغاز کرد. با گذشت زمان و گسترش بستر اینترنت و ورود کسب و
            کارها به فضای آنلاین تصمیم بر آن شد تا علاوه بر پلتفرم اینستاگرام ،
            پاسخگوی نیاز کاربران در محیطی امن و کاربردی تر مثل وبسایت باشیم. ,
            فعالیت مجموعه ما در حوزه پوشاک زنانه که شامل انواع شال ، روسری , ست
            های زنانه و ... می باشد , و ما درتلاش هستیم با ارسال سفارشات شما در
            سریع ترین زمان ممکن به سراسر نقاط ایران ، آماده خدمت رسانی به تمام
            هم میهنان عزیز باشیم.
          </div>
        </div>
      </div>
    </>
  );
}
