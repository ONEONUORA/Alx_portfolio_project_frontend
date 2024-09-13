
import { Link } from "react-router-dom";
const Footer =()=>{
    return (
        <>
            <section className=" bg-black">
            
                      <div className=" input-box  text-white bg-red flex gap-5 justify-between text-center lg:text-3xl lg:flex lg:gap-10 lg:justify-around">
                        
                            <Link to='/userDashboard' className="">
                                  <i className="bi bi-house-door-fill  text-black"></i>
                                  <p className="text-sm">Home</p>
                            </Link>
                          
                         
                            <Link to="/wallet" className="">
                                <i className="bi bi-wallet-fill  text-black"></i>
                                <p className="text-sm">Wallet</p>
                            </Link>


                            <Link to="/history" className="">
                                   <i className="bi bi-hourglass-split  text-black "></i>
                                   <p className="text-sm">History</p>
                        
                            </Link>

                             <Link to="/userProfile" className="">
                                  <i className="bi bi-person-fill  text-black "></i>
                                  <p className="text-sm">Profile</p>
                             </Link>
                          

                      </div>
            
            </section>
        </>
    )
}

export default Footer;