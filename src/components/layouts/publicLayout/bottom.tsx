import * as React from "react";
import {
  BottomIcon1,
  BottomIcon2,
  BottomIcon3,
  radioImage,
} from "@/assets/icons/icons";
import Image from "next/image";

export default function BottomComponent() {
  return (
    <>
      <>
        <div className="items-stretch flex flex-col">
          <div className="items-stretch flex gap-4 px-5 self-start">
            <div className="rounded bg-red-500 flex w-5 shrink-0 h-10 flex-col" />
            <div className="text-red-500 text-base font-semibold leading-5 self-center my-auto">
              Featured
            </div>
          </div>
          <div className="text-black text-4xl font-semibold leading-10 tracking-widest whitespace-nowrap mt-5 self-start">
            New Arrival
          </div>
          <div className="w-full mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="rounded bg-black flex grow flex-col items-stretch w-full mr-0 -ml-0.5 pl-8 pr-14 pt-12 max-md:max-w-full max-md:mt-8 max-md:px-5">
                  <div className="flex-col overflow-hidden relative flex min-h-[511px] mt-10 pr-20 pt-12 pb-8 items-start max-md:max-w-full max-md:pr-5">
                    <Image
                      className="absolute h-full w-full object-cover object-center inset-0"
                      src={
                        "https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                      }
                      alt=""
                      width={250}
                      height={250}
                      priority
                      layout="responsive"
                    />
                    <div className="relative text-neutral-50 text-2xl font-semibold leading-6 tracking-wider mt-80 max-md:mt-10">
                      PlayStation 5
                    </div>
                    <div className="relative text-neutral-50 text-sm leading-5 w-[242px] max-w-full mt-4">
                      Black and White version of the PS5 coming out on sale.
                    </div>
                    <div className="relative text-white text-base font-medium leading-6 mt-4">
                      <button>Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-8">
                  {/* <div className="rounded bg-stone-950 flex flex-col justify-center pl-16 items-end max-md:max-w-full max-md:pl-5">
                    <div className="flex-col overflow-hidden relative flex min-h-[284px] w-[432px] max-w-full pr-20 pt-12 pb-6 items-start max-md:pr-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8bc81e1c097b1bb8e04af893b7d8b7e34475d7ac963cdb687b6ed4662ed6ab54?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc81e1c097b1bb8e04af893b7d8b7e34475d7ac963cdb687b6ed4662ed6ab54?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc81e1c097b1bb8e04af893b7d8b7e34475d7ac963cdb687b6ed4662ed6ab54?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc81e1c097b1bb8e04af893b7d8b7e34475d7ac963cdb687b6ed4662ed6ab54?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc81e1c097b1bb8e04af893b7d8b7e34475d7ac963cdb687b6ed4662ed6ab54?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc81e1c097b1bb8e04af893b7d8b7e34475d7ac963cdb687b6ed4662ed6ab54?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc81e1c097b1bb8e04af893b7d8b7e34475d7ac963cdb687b6ed4662ed6ab54?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bc81e1c097b1bb8e04af893b7d8b7e34475d7ac963cdb687b6ed4662ed6ab54?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <div className="relative text-neutral-50 text-2xl font-semibold leading-6 tracking-wider whitespace-nowrap mt-24 max-md:mt-10">
                        Women’s Collections
                      </div>
                      <div className="relative text-neutral-50 text-sm leading-5 w-[255px] max-w-full mt-4">
                        Featured woman collections that give you another vibe.
                      </div>
                      <div className="relative text-white text-base font-medium leading-6 mt-4">
                        <button>Shop Now</button>
                      </div>
                    </div>
                  </div> */}
                  <div className="justify-center mt-8 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        {/* <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6dd527454d9713d127e24cb0a57f4cffcd323af9615bb796387f3328ce552e8a?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dd527454d9713d127e24cb0a57f4cffcd323af9615bb796387f3328ce552e8a?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dd527454d9713d127e24cb0a57f4cffcd323af9615bb796387f3328ce552e8a?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dd527454d9713d127e24cb0a57f4cffcd323af9615bb796387f3328ce552e8a?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dd527454d9713d127e24cb0a57f4cffcd323af9615bb796387f3328ce552e8a?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dd527454d9713d127e24cb0a57f4cffcd323af9615bb796387f3328ce552e8a?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dd527454d9713d127e24cb0a57f4cffcd323af9615bb796387f3328ce552e8a?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dd527454d9713d127e24cb0a57f4cffcd323af9615bb796387f3328ce552e8a?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                          className="aspect-[0.95] object-contain object-center w-full overflow-hidden grow max-md:mt-8"
                        /> */}
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        {/* <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/341740fa354c3f2270fd27cdc087c495fa99015b4dd84daf949b28cf317c7958?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/341740fa354c3f2270fd27cdc087c495fa99015b4dd84daf949b28cf317c7958?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/341740fa354c3f2270fd27cdc087c495fa99015b4dd84daf949b28cf317c7958?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/341740fa354c3f2270fd27cdc087c495fa99015b4dd84daf949b28cf317c7958?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/341740fa354c3f2270fd27cdc087c495fa99015b4dd84daf949b28cf317c7958?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/341740fa354c3f2270fd27cdc087c495fa99015b4dd84daf949b28cf317c7958?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/341740fa354c3f2270fd27cdc087c495fa99015b4dd84daf949b28cf317c7958?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/341740fa354c3f2270fd27cdc087c495fa99015b4dd84daf949b28cf317c7958?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                          className="aspect-[0.95] object-contain object-center w-full overflow-hidden grow max-md:mt-8"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        {" "}
        <div className="flex flex-col items-stretch mt-8">
          <div className="justify-center w-full max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
                <div className="items-center flex grow flex-col max-md:mt-10">
                  {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6433283adf974b0cd7cb5b803b2e884648434dba6039095270866a0a74adbc17?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
              /> */}
                  <BottomIcon2 />

                  <div className="text-black text-xl font-semibold leading-7  whitespace-nowrap  mt-6   items-center">
                    FREE AND FAST DELIVERY
                  </div>
                  <div className="text-black text-center text-sm leading-5  whitespace-nowrap mt-2  items-center">
                    Free delivery for all orders over $140
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center flex grow flex-col px-2 max-md:mt-10 ">
                  <BottomIcon1 />
                  <div className="text-black text-xl font-semibold leading-7  whitespace-nowrap  mt-6   items-center">
                    24/7 CUSTOMER SERVICE
                  </div>
                  <div className="text-black text-sm leading-5  whitespace-nowrap  mt-2 items-center">
                    Friendly 24/7 customer support
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className=" flex grow flex-col max-md:mt-10 items-center">
                  <BottomIcon3 />

                  <div className="text-black text-xl font-semibold leading-7   mt-6  md:items-center items-center text-center">
                    MONEY BACK GUARANTEE
                  </div>
                  <div className="text-black text-sm leading-5 self-center  text-center  mt-2">
                    We reurn money within 30 days
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col overflow-hidden relative flex aspect-square w-[46px] max-w-full justify-center items-stretch mt-16 self-end max-md:mt-10">
            {/* <catogoryImage /> */}
            {/* <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ccba9d93-5340-4471-8fba-b18b84062030?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccba9d93-5340-4471-8fba-b18b84062030?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccba9d93-5340-4471-8fba-b18b84062030?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccba9d93-5340-4471-8fba-b18b84062030?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccba9d93-5340-4471-8fba-b18b84062030?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccba9d93-5340-4471-8fba-b18b84062030?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccba9d93-5340-4471-8fba-b18b84062030?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccba9d93-5340-4471-8fba-b18b84062030?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
          className="absolute h-full w-full object-cover object-center inset-0"
        /> */}
            <div className="relative flex shrink-0 h-[46px] flex-col rounded-[50%]" />
          </div>
        </div>
      </>
    </>
  );
}
