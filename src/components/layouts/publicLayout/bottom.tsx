import * as React from "react";
import {
  BottomIcon1,
  BottomIcon2,
  BottomIcon3,
  radioImage,
} from "@/assets/icons/icons";

export default function BottomComponent() {
  return (
    <>
      {/* <>
        <div className="items-stretch flex flex-col">
          <div className="items-stretch flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="flex flex-col px-5 items-start">
              <div className="items-stretch flex gap-4">
                <div className="rounded bg-red-500 flex w-5 shrink-0 h-10 flex-col" />
                <div className="text-red-500 text-base font-semibold leading-5 self-center my-auto">
                  Categories
                </div>
              </div>
              <div className="text-black text-4xl font-semibold leading-10  self-stretch whitespace-nowrap mt-5">
                Browse By Category
              </div>
            </div>
            <div className="items-stretch flex gap-2 mt-16 self-end max-md:mt-10">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
              className="aspect-square object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
              className="aspect-square object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full"
            />
            </div>
          </div>
          <div className="items-stretch flex justify-between gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10 ">
            <div className="justify-center items-center rounded border flex grow basis-[0%] flex-col px-14 py-7 border-solid border-black border-opacity-30 max-md:px-5 active:bg-violet-700">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee60f64ce138411b309eb66f126dd092b27b63422fa7dcf854cfeb5473ed67f5?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                className="aspect-[1.04] object-contain object-center w-[58px] overflow-hidden"
              />
              <div className="text-black text-base leading-6  whitespace-nowrap  mt-6   justify-center items-center">
                Phones
              </div>
            </div>
            <div className="justify-center items-center rounded border flex grow basis-[0%] flex-col px-10 py-7 border-solid border-black border-opacity-30 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15f9c48fff219b2dbef14dd23aa7063ebbc5cfa17cc3c879000fcbbc10e8968a?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full"
              />
              <div className="text-black text-base leading-6  whitespace-nowrap mt-6 ">
                Computers
              </div>
            </div>
            <div className="justify-center items-center rounded border flex grow basis-[0%] flex-col px-9 py-7 border-solid border-black border-opacity-30 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fee464125eab1c62df450638dbedacaac1e7c19b2e2283a001436baa5ccc259?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full"
              />
              <div className="text-black text-base leading-6  whitespace-nowrap mt-6 ">
                SmartWatch
              </div>
            </div>
            <div className="justify-center items-center rounded shadow-sm bg-red-500 flex grow basis-[0%] flex-col px-14 py-7 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6dac3c04bd12f8382ab0f2da51efa999b774ddf4d75da29a34c264ca3457e17?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                className="aspect-[1.14] object-contain object-center w-16 overflow-hidden"
              />
              <div className="text-neutral-50 text-base leading-6 whitespace-nowrap  mt-6">
                Camera
              </div>
            </div>
            <div className="justify-center items-center rounded border flex grow basis-[0%] flex-col px-9 py-7 border-solid border-black border-opacity-30 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/422b2186dce6a674a4a2bb729272b3ff7b2d318ca9c7641261312d0844f281eb?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full"
              />
              <div className="text-black text-base leading-6 whitespace-nowrap mt-6 ">
                HeadPhones
              </div>
            </div>
            <div className="justify-center items-center rounded border flex grow basis-[0%] flex-col px-14 py-7 border-solid border-black border-opacity-30 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c0e469a68da811d2c76e8c38c8f8a00d7fd837be85220c3c3e506d4f76d97f8?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                className="aspect-[1.13] object-contain object-center w-[63px] overflow-hidden"
              />
              <div className="text-black text-base leading-6  whitespace-nowrap  mt-6 ">
                Gaming
              </div>
            </div>
          </div>
        </div>
      </> */}
      <>
        <div className="bg-black px-14 py-12 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-green-500 text-base font-semibold leading-5 self-stretch max-md:max-w-full">
                  Categories
                </div>
                <div className="text-neutral-50 text-5xl font-semibold leading-[60px] tracking-widest self-stretch mt-11 max-md:max-w-full max-md:text-4xl max-md:leading-[56px] max-md:mt-10">
                  Enhance Your Music Experience
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-5 mt-9 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <div className="flex aspect-square flex-col justify-center items-stretch">
                    {/* <div className="text-black text-xs leading-5 whitespace-nowrap aspect-square items-stretch pt-8 pb-3.5 px-4 rounded-[50% bg-white ">
                      Hours
                    </div> */}
                  </div>
                  <div className="flex aspect-square flex-col justify-center items-stretch">
                    {/* <div className="text-black text-xs leading-5 whitespace-nowrap aspect-square items-stretch pt-8 pb-3.5 px-4 rounded-[50%] bg-white">
                      Days
                    </div> */}
                  </div>
                  <div className="flex aspect-square flex-col justify-center items-stretch">
                    {/* <div className="text-black text-xs leading-5 whitespace-nowrap aspect-square items-stretch pt-8 pb-3.5 px-2.5 rounded-[50%] bg-white">
                      Minutes
                    </div> */}
                  </div>
                  <div className="flex aspect-square flex-col justify-center items-stretch ">
                    {/* <div className="text-black text-xs leading-5 whitespace-nowrap aspect-square items-stretch pt-8 pb-3.5 px-2 rounded-[50%] bg-white">
                      Seconds
                    </div> */}
                  </div>
                </div>
                <button className="text-neutral-50 text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch rounded bg-green-500 mt-10 px-12 py-4 self-start max-md:px-5">
                  Buy Now!
                </button>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
              {/* <radioImage /> */}
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f314cd38b1c12bb72dc5e215c111efb82a4eadda2226727d2e209ce4ab9bc683?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f314cd38b1c12bb72dc5e215c111efb82a4eadda2226727d2e209ce4ab9bc683?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f314cd38b1c12bb72dc5e215c111efb82a4eadda2226727d2e209ce4ab9bc683?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f314cd38b1c12bb72dc5e215c111efb82a4eadda2226727d2e209ce4ab9bc683?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f314cd38b1c12bb72dc5e215c111efb82a4eadda2226727d2e209ce4ab9bc683?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f314cd38b1c12bb72dc5e215c111efb82a4eadda2226727d2e209ce4ab9bc683?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f314cd38b1c12bb72dc5e215c111efb82a4eadda2226727d2e209ce4ab9bc683?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f314cd38b1c12bb72dc5e215c111efb82a4eadda2226727d2e209ce4ab9bc683?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                className="aspect-[1.72] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </>
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
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c62c9685713c5f1bf462510ff165f34baaca0d79fed3beaeab9b227037adcaf?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                      className="absolute h-full w-full object-cover object-center inset-0"
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

                  <div className="text-black text-xl font-semibold leading-7 whitespace-nowrap  mt-6  items-center">
                    MONEY BACK GUARANTEE
                  </div>
                  <div className="text-black text-sm leading-5 self-center whitespace-nowrap  mt-2">
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
