"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
// import { Player } from "@lottiefiles/react-lottie-player";


import dynamic from "next/dynamic";
import { useUserLogin } from "@/hooks/auth.hook";
import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";
import CaddForm from "@/components/resubaleform/CaddForm";
import CaddInput from "@/components/resubaleform/CaddInput";
import { Button } from "@/components/UI/button";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams?.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
  };

  useEffect(() => {
    if (isSuccess) {
      router.push(redirect || "/");
    }
  }, [isSuccess, redirect, router]);


  return (
    <>
      {isPending && <LoadingSpinner />}
      <div className="h-screen w-full bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row w-[90%] max-w-[900px] bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side: Animation */}
          <div className="hidden lg:flex w-full lg:w-1/2 bg-blue-100 items-center justify-center p-6">
            <Player
              autoplay
              loop
              className="w-[80%] h-auto max-w-[400px]"
              src="https://assets6.lottiefiles.com/packages/lf20_nc1bp7st.json"
            />
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-6">
              Welcome to Cadd core
            </h3>

            {/* Credentials Buttons */}
           

            <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
              Sign in to continue
            </p>

            {/* Login Form */}
            <CaddForm
              // resolver={zodResolver(loginValidationSchema)}
              onSubmit={onSubmit}>
              <div className="mb-6">
                <CaddInput 
                label="Email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="mb-6">
                <CaddInput  
                label="Password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <Button
                className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
                size="lg"
                type="submit">
                Login
              </Button>
            </CaddForm>

            {/* Register and Forgot Password Links */}
            <div className="text-center mt-6 text-sm">
              <span className="text-gray-600">Do not have an account?</span>{" "}
              <Link
                className="text-blue-600 font-semibold hover:underline"
                href="/register-customer">
                Register
              </Link>
            </div>
            <div className="text-center mt-4 text-sm">
              <span className="text-gray-600">Forgot Password?</span>{" "}
              <Link
                className="text-blue-600 font-semibold hover:underline"
                href="/forgot-pass">
                Reset
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;