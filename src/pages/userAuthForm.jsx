/* eslint-disable react/no-unescaped-entities */

/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import AnimationWrapper from "../common/page-Animation";
import logo from "../assets/logo (1).png";
import InputBox from "../components/input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";

const UserAuthForm = ({ type }) => {
  let {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);
  
  const navigate = useNavigate(); // Use the navigate hook from react-router-dom

  console.log(access_token);


  const userAuthThroughServer = (serverRoute, formData) => {
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then(({ data }) => {
        if (type === "sign-up") {
          // Show the toast message immediately
          toast.success('Verification code sent to your email. Please check and verify.');
          
          // Delay the navigation by 2 seconds
          setTimeout(() => {
            navigate('/verifyUser', { state: { email: formData.email } });
          }, 2000);
        } else {
          // Show the toast message immediately
          toast.success('Signed in successfully! Redirecting to dashboard...');
          
          // Delay the sign-in success actions by 2 seconds
          setTimeout(() => {
            storeInSession("user", JSON.stringify(data));
            setUserAuth(data);
            navigate('/userDashboard');
          }, 2000);
        }
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute = type === "sign-in" ? "/signin" : "/signup";

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let form = new FormData(document.getElementById('formElement'));
    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    let { fullname, email, password } = formData;

    if (fullname && fullname.length < 3) {
      return toast.error("Fullname must be at least 3 letters long");
    }

    if (!email.length) {
      return toast.error("Enter Email");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Email is Invalid");
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password should be 6 - 20 characters long with a numeric, 1 lowercase and 1 uppercase letter"
      );
    }
    userAuthThroughServer(serverRoute, formData);
  };

  return access_token ? (
    <Navigate to="/" />
  ) : (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center ">
        <Toaster />
        <form id="formElement" className="w-[80%] max-w-[400px] border-0 border-dark-grey p-4 shadow-xl">
          <img
            src={logo}
            alt="image"
            style={{ width: "50%", display: "block", margin: "0 auto" }}
          />
          <h1 className="text-xl font-bold font-gelasio capitalize text-center mb-10 mt-3">
            {type === "sign-in" ? "Welcome Aboard, Trader!" : "Set Sail on Your Adventure"}
          </h1>

          {type !== "sign-in" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon="bi-person"
            />
          ) : (
            " "
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="E-mail"
            icon="bi-envelope"
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="bi-key"
          />

          <button
            className="btn-dark mt-14 center"
            type="submit"
            onClick={handleSubmit}
          >
            {type.replace("-", " ")}
          </button>

          {type === "sign-in" ? (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Don't have an account?
              <Link to="/signup" className="underline text-black text-xl ml-1">
                Register Today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Already a member?
              <Link to="/signin" className="underline text-black text-xl ml-1">
                Sign in here
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;

