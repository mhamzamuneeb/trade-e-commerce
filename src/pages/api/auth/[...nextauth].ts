import NextAuth from "next-auth";
// import Providers from "next-auth/providers/";
// import { signIn } from "next-auth/react";

const yourApiBaseUrl = "https://fakestoreapi.com";

export default NextAuth({
  providers: [
    {
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      id: "customProvider",
      name: "CustomProvider",
      type: "credentials",
      credentials: {
        // Add your custom credential fields (e.g., username, password)
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: any) => {
        // Add logic to authenticate the user with the FakeStore API
        const response = await fetch(`${yourApiBaseUrl}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (response.ok && data.token) {
          // If the API response is successful and contains a token, return the user object
          return Promise.resolve({ ...credentials, token: data.token });
        } else {
          // If authentication fails, return null
          return Promise.resolve(null);
        }
      },
    },
  ],
  // Add other configurations as needed
});
// utils/auth.js

const TOKEN_KEY = "jwt";

// Function to set the token in both sessionStorage and localStorage
export const setToken = (token: any) => {
  sessionStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TOKEN_KEY, token);
};

// Function to get the token from sessionStorage
export const getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY);
};

// Function to remove the token from both sessionStorage and localStorage
export const removeToken = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_KEY);
};
