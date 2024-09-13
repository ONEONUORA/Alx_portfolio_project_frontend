import { useContext } from "react";
import Footer from "../components/footer";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import AnimationWrapper from "../common/page-Animation";
import Amount from "../components/userWalletAmount";



const Wallet =()=>{
    let { userAuth: { access_token, fullname } } = useContext(UserContext) 
    return(
        
        access_token == null ? <Navigate to='/signin'/>
          :
          <>
          <AnimationWrapper>
          <section className="bg-black min-h-screen w-full">
                    <div className="flex justify-between mb-1">
                        <div className="">
                            <p className="text-xl font-bold text-white">Wallet</p>
                        </div>
                        <div className="flex gap-1">
                             <i className="bi bi-person-circle text-red text-2xl"></i>
                             <p className="capitalize text-sm text-white pt-2 font-bold ">{fullname}</p>
                        </div>
                       
                    </div>

                    <Amount/>
                    
                <p className="font-gelasio text-white font-bold">Your Assets</p>
                <p className=" input-box center">Empty</p>
          </section>
              <Footer/>
          </AnimationWrapper>
         
          </>
     
        
    )
};

export default Wallet;