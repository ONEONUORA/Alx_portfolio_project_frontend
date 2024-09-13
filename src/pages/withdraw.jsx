import AnimationWrapper from "../common/page-Animation";
import { Link, Navigate } from "react-router-dom";
import Header from "../components/header";
import { useContext } from "react";
import {UserContext} from "../App"




const Withdraw = ()=>{
    let{userAuth:{fullname, access_token}} = useContext(UserContext)
    return(
        access_token === null? <Navigate to="/signin"/>
        :
        <>
            <AnimationWrapper>
                <section className="min-h-screen w-full">
                        <Header/>
                        <h5 className="text-center font-bold">Make Withdrawal</h5>
                        <p className="text-right font-semibold capitalize text-sm">{fullname} +</p>
                    <p className="text-center">Still in progress.. Coming soon </p>

                    <Link to='/userDashboard' className="flex justify-center items-center mt-10">
                                    <button type="submit" className="btn-dark">Back To Dashboard</button>
                    </Link>
                </section>
            </AnimationWrapper>
        </>
    )
}



export default Withdraw;