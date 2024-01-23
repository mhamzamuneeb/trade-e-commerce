import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div>
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 my-6">
          <div className="flex flex-col items-stretch w-[60%] max-md:w-full max-md:ml-0">
            <div className="justify-end items-stretch bg-slate-300 flex grow flex-col w-[80%] pt-12 rounded-none max-md:max-w-full max-md:mt-10">
              {/* <img
        loading="lazy"
        srcSet="..."
        className="aspect-[1.14] object-contain object-center w-full overflow-hidden max-w-[622px] mt-6 max-md:max-w-full"
      /> */}
              {/* <signupImage/> */}
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
