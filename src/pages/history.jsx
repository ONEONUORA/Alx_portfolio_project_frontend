import { useContext } from "react";
import AnimationWrapper from "../common/page-Animation";
import Footer from "../components/footer";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";


const History = ()=>{
    let {userAuth:{fullname, access_token}} = useContext(UserContext)
    return(
        access_token == null ? <Navigate to="/signin"/>
        :
        <>
        <AnimationWrapper>
            <section className="bg-black min-h-screen w-full">
                <div className="flex justify-between ">
                    <div>
                        <p className="text-white font-bold text-xl">Transactions</p>
                    </div>

                    <div className="flex gap-1">
                             <i className="bi bi-person-circle text-red text-2xl"></i>
                             <p className="capitalize text-sm text-white pt-2 font-bold ">{fullname}</p>
                             
                    </div>
                </div>

                <div className="input-box">
                    <p>No Transactions Yet</p>
                </div>
            </section>
            <Footer/>
        </AnimationWrapper>
         
        </>
    )
}

export default History;