// import { setToken } from "@/pages/api/auth/[...nextauth]";
import { useAuth } from "@/pages/api/contextApi/authContext";
import router from "next/router";
import React from "react";
import { toast } from "react-toastify";

const LoginFrom = () => {
  const { setToken } = useAuth();
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
      <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
        <span className="items-start flex flex-col -ml-px my-auto px-3 max-md:mt-10">
          <div className="text-black text-4xl font-medium leading-7 tracking-widest self-stretch">
            Log in to Exclusive
          </div>
          <div className="text-black text-base leading-6 self-stretch my-6 ">
            Enter your details below
          </div>
          <form className="space-y-3" onSubmit={handleLogin}>
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

            <span className="items-stretch flex gap-5 mt-10">
              <span className="text-neutral-50 text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch rounded py-4 max-md:px-5">
                <button
                  type="submit"
                  className="w-[150%] py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm font-medium"
                >
                  Login
                </button>{" "}
              </span>
              <div className="text-red-500 text-base leading-6 my-auto ml-auto ">
                Forget Password?
              </div>
            </span>
          </form>
        </span>
      </div>
    </div>
  );
};

export default LoginFrom;
