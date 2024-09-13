import { useContext } from "react";
import AnimationWrapper from "../common/page-Animation";
import Header from "../components/header";
import {Link, Navigate} from "react-router-dom"
import {UserContext} from "../App"


const Deposit = ()=>{
    let {userAuth:{access_token, fullname}} = useContext(UserContext)
    return(
        access_token === null?<Navigate to="/signin"/>
            :
                <>
                <AnimationWrapper>
                   <section className="min-h-screen w-full">
                                <Header/>
                                <h5 className="text-center font-bold">Make Deposit</h5>
                                <p className="text-right font-semibold capitalize text-sm">{fullname} +</p>
                                <p className="text-xl font-bold items-center flex justify-center">Still in progress.. Coming soon</p>
                                <Link to='/userDashboard' className="flex justify-center items-center mt-10">
                                    <button type="submit" className="btn-dark">Back To Dashboard</button>
                                </Link>
                    
                    </section>
                </AnimationWrapper>
                  
                </>
    )
}

export default Deposit;