import { useContext } from "react";
import AnimationWrapper from "../common/page-Animation";
import Header from "../components/header";
import {Link, Navigate} from "react-router-dom"
import { UserContext } from "../App";

const Swap = () => {
    let{userAuth:{fullname, access_token}} = useContext(UserContext)

  return (
    access_token === null? <Navigate to="/signin"/>
          :
    <>
      <AnimationWrapper>
        <section className="min-h-screen w-full">
          <Header />
          <h5 className="text-center font-bold">Swap Coin</h5>
          <p className="text-right text-sm font-semibold capitalize">
            {fullname} +
          </p>
          <p className="text-center">Still in progress.. Coming soon </p>

          <Link
            to="/userDashboard"
            className="mt-10 flex items-center justify-center"
          >
            <button type="submit" className="btn-dark">
              Back To Dashboard
            </button>
          </Link>
        </section>
      </AnimationWrapper>
    </>
  );
};

export default Swap;
