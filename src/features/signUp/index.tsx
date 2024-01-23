import { setToken } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import router from "next/router";
import React from "react";
import { toast } from "react-toastify";

export const SignupForm = () => {
  const handleLogin = async (event: any) => {


    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve email and password values from the form
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Make the API call
    try {
      // Make the API call
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email, // Assuming your API expects "username" instead of "email"
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // Assuming the API returns a token in the response
        const token = data.token;

        if (token) {
          console.error(data.token);
          setToken(token);
          // sessionStorage.setItem("token", token);
          // localStorage.setItem("token", token);
          toast.success("Login Sucessfully");
          // If token is present, navigate to the home screen
          router.push("/");
        } else {
          console.error("No token received in the API response");
          toast.error("Unsucessfull");
        }
      } else {
        console.error("API request failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
        <span className="items-start flex flex-col -ml-px my-auto px-3 max-md:mt-10">
          <div className="text-black text-4xl font-medium leading-7 tracking-widest self-stretch">
            Create Your Account{" "}
          </div>
          <div className="text-black text-base leading-6 self-stretch my-6 ">
            Enter your details below
          </div>
          <form className="space-y-3" onSubmit={handleLogin}>
            <div>
              <label htmlFor="name" className="text-sm font-medium mt-4">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded mt-0"
                placeholder="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email or Phone Number
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-2 border rounded mt-0"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded mt-"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm font-medium"
            >
              Create Account
            </button>
            <button className="w-full py-2 px-4 border rounded-md text-sm font-medium flex items-center justify-center mt-4">
              <span>
                {/* <IconGoogle /> */}
                Sign up with Google
              </span>
            </button>
          </form>
          <span className="items-center self-center flex gap-4 mt-4">
            <div className="text-black text-base leading-6 grow whitespace-nowrap my-auto">
              Already have account?
            </div>
            <span className="items-stretch self-stretch flex basis-[0%] flex-col">
              <div className="text-black text-base font-medium leading-6 whitespace-nowrap">
                <Link href="/login" className="text-blue-500 hover:underline ">
                  Log in
                </Link>
              </div>
              <img
                loading="lazy"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                className="aspect-[47] object-contain object-center w-[47px] overflow-hidden self-center"
              />
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default SignupForm;
