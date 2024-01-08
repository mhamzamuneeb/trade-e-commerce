import React from "react";

export const HeroImage = () => {
  return (
    <>
      <div className="p-8	w-10/12 max-md:w-full max-md:p-4	">
        <div className="bg-black px-14 py-12 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-green-500 text-base font-semibold leading-5 self-stretch max-md:max-w-full">
                  Categories
                </div>
                <div className="text-neutral-50 text-3xl font-semibold leading-[40px] tracking-widest self-stretch mt-11 max-md:max-w-full max-md:text-4xl max-md:leading-[56px] max-md:mt-10">
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
      </div>
    </>
  );
};
