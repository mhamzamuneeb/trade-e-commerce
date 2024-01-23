import * as React from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
// import { setToken } from "../api/auth/[...nextauth]";
import { useAuth } from "../api/contextApi/authContext";
import { toast } from "react-toastify";
import SignupScreen from "../signup";
import AuthLayout from "@/features/authLayout";
import LoginFrom from "@/features/login";
const LoginScreen = () => {
  return (
    <div>
      <>
        <AuthLayout>
          <LoginFrom />
        </AuthLayout>
      </>
    </div>
  );
};
export default LoginScreen;
