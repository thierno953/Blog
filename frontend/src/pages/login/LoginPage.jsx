import React from "react";
import MainLayout from "../../components/MainLayout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const submitHandler = {};

  return (
    <MainLayout>
      <section className="max-w-[1000px] px-5 py-10 mx-auto">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="mb-8 text-2xl font-bold text-center font-roboto text-dark-hard">
            Sign In
          </h1>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col w-full mb-6">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 mb-6 text-lg font-bold text-white rounded-lg bg-primary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Login
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              Do not have an account?{" "}
              <Link to="/register" className="text-primary">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
