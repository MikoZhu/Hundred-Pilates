import iphone from "/images/iPhone.png";
import appStore2 from "/icons/applestore1.png";
import appStore1 from "/icons/appstore2.png";
import googleStore1 from "/icons/googlestore1.png";
import googleStore2 from "/icons/googlestore2.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export const MidSection = () => {
  const [appStoreImage, setAppStoreImage] = useState(appStore1);
  const [googleStoreImage, setGoogleStoreImage] = useState(googleStore1);
  const { t } = useTranslation();

  const handleAppStoreMouseEnter = () => {
    setAppStoreImage(appStore2);
  };

  const handleAppStoreMouseLeave = () => {
    setAppStoreImage(appStore1);
  };

  const handleGoogleStoreMouseEnter = () => {
    setGoogleStoreImage(googleStore2);
  };

  const handleGoogleStoreMouseLeave = () => {
    setGoogleStoreImage(googleStore1);
  };
  return (
    <section className=" w-full relative  flex flex-col gap-10 lg:flex-row lg:gap-0 lg:h-[100vh] ">
      <div className="flex flex-row  z-0  lg:w-[60%]">
        <img
          src={iphone}
          alt="iphone image"
          className="rotate-[-3.8deg] w-[70%] md:w-[60%] "
        />
        <div className="text-[18px] flex flex-col gap-3 z-10 absolute left-[35%] font-normal leading-normal break-normal  md:text-[22px] md:gap-10 md:top-20  lg:text-[30px] lg:h-[70%] lg:w-[37%] lg:left-[25%] lg:top-[7.5rem] lg:gap-[4rem] ">
          <p className=" w-[80%] mt-5  md:w-[50%] md:ml-[2rem] lg:w-[90%] lg:ml-0 lg:mt-[2rem] ">
            {t("midsection.p.0")}
          </p>
          <p className=" w-[80%] ml-[2rem] md:w-[50%] md:ml-[4rem] lg:w-[90%]  lg:ml-2  ">
            {t("midsection.p.1")}
          </p>
          <p className=" w-[80%]  ml-[4rem] md:w-[60%] md:ml-[8rem] lg:w-[90%]   lg:ml-4 ">
            {t("midsection.p.2")}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center lg:flex-col lg:w-[40%] lg:justify-start lg:mt-[6rem]">
        <div className=" w-[60%] pl-4 md:w-[40%] lg:w-[100%] lg:text-center ">
          <h1 className="text-[28px]  md:text-[40px]  lg:text-[68px]">
            {t("midsection.h1")}
            <strong className="italic">{t("midsection.span.0")}</strong> <br />
            <strong className="italic">{t("midsection.span.1")} </strong>
            {t("midsection.span.2")} <br />
            {t("midsection.span.3")}
            <strong className="italic">
              {t("midsection.span.4")} <br />
              {t("midsection.span.5")}
            </strong>
          </h1>
        </div>
        <div className="flex flex-col gap-5 w-[40%] items-center lg:flex-row lg:w-full lg:justify-center lg:mt-10">
          <img
            src={appStoreImage}
            alt="App store"
            className={`w-[80%] lg:w-[182px]`}
            onMouseEnter={handleAppStoreMouseEnter}
            onMouseLeave={handleAppStoreMouseLeave}
          />
          <img
            src={googleStoreImage}
            alt="Google store"
            className="w-[80%] lg:w-[182px]"
            onMouseEnter={handleGoogleStoreMouseEnter}
            onMouseLeave={handleGoogleStoreMouseLeave}
          />
        </div>
      </div>
    </section>
  );
};
