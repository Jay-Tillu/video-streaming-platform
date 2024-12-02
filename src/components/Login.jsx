import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignInButtonClick = () => {
    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );

    setErrorMessage(message);
  };

  return (
    <div className="relative h-screen">
      <Header />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="../src/assets/login-bg.jpg"
          alt="Background image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Centered Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-4/12 px-16 py-20 bg-black bg-opacity-75 rounded-lg shadow-lg"
        >
          <h1 className="text-white text-3xl font-semibold pb-8">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 mb-4 text-stone-200 placeholder-stone-200 bg-black opacity-70 rounded border-stone-400 border focus:outline-none focus:ring focus:ring-stone-500"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email Address"
            className="w-full px-4 py-3 mb-4 text-stone-200 placeholder-stone-200 bg-black opacity-70 rounded border-stone-400 border focus:outline-none focus:ring focus:ring-stone-500"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 mb-4 text-stone-200 placeholder-stone-200 bg-black opacity-70 rounded border-stone-400 border focus:outline-none focus:ring focus:ring-stone-500"
          />

          <p className="text-red-500 mb-5 font-semibold">{errorMessage}</p>

          <button
            className="w-full py-2 text-white bg-[#E50815] rounded hover:bg-red-800 transition"
            onClick={handleSignInButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>

          {isSignInForm ? (
            <p className="text-stone-400 text-base mt-4">
              New to Netflix?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={toggleSignIn}
              >
                Sign up now.
              </span>
            </p>
          ) : (
            <p className="text-stone-400 text-base mt-4">
              Already a user?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={toggleSignIn}
              >
                Sign in now.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
