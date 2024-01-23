import { Divider } from "antd";
import { FunctionComponent, useCallback } from "react";
import Image from "next/image";
import { Form, Input, Button } from "antd";
// import { IconGoogle, BottomIcon3 } from "@/assets/icons/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useAuth } from "../api/contextApi/authContext";
import AuthLayout from "@/features/authLayout";
import LoginFrom from "@/features/login";
import SignupForm from "@/features/signUp";
const SignupScreen = (props: any) => {
  const router = useRouter();
  const signup = router.pathname === "/signup";

  const { setToken } = useAuth();

  const { data: session } = useSession();
  const handleLogin = async (event: any) => {
    toast.success("sucessfull");

    // const handleLogin = (event: any) => {
    //   event.preventDefault();

    //   const email = event.target.email.value;
    //   const password = event.target.password.value;

    //   // Use NextAuth.js signIn function for authentication
    //   signIn("google", { username: email, password });
    // };

    // if (session) {
    //   // Redirect to the home page if the user is already authenticated
    //   router.push("/home");
    //   return null;
    // }

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
          toast.success("sucessfull");
          // If token is present, navigate to the home screen
          router.push("/");
          console.log("Qsfwef");
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

  const onFinish = () => {};

  return (
   

    <div>
      <AuthLayout>
        <SignupForm />
      </AuthLayout>
    </div>
  );
};

export default SignupScreen;
