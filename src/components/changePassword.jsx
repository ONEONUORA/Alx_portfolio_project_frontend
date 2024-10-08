

import { useRef } from "react";
import AnimationWrapper from "../common/page-Animation"
import InputBox from "../components/input"
import {toast, Toaster} from "react-hot-toast"
import axios from "axios"
import { useContext } from "react";
import {UserContext} from '../App'

const ChangePassword = ()=>{
    
    let {userAuth:{access_token}} = useContext(UserContext);
    let ChangePasswordForm = useRef();
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
      
    const handleSubmit = (e)=>{

        e.preventDefault();

        let form = new FormData(ChangePasswordForm.current);
        let formData = {};

        for(let[key, value] of form.entries()){
            formData[key]  = value
        }

        let{ currentPassword, newPassword}  = formData;

        if(!currentPassword.length || !newPassword.length){
            return toast.error ("Fill in password fields")
        }

        if(!passwordRegex.test(currentPassword) || !passwordRegex.test(newPassword)){
            return toast.error("Password should be 6 - 20 characters long with a numeric, 1 lowercase and 1 uppercase letters ")
        }

        e.target.setAttribute("disabled", true);

        let loadingToast = toast.loading("Updating...");

        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/api/v1/user/change-password", formData, {
            headers:{
                'Authorization': `Bearer ${access_token}`
            }
        })

        .then(() => {
            toast.dismiss(loadingToast);
            e.target.removeAttribute("disabled");
            ChangePasswordForm.current.reset(); // Clear the input fields
            return toast.success("Password Updated")
        
        })
        .catch(({ response }) => {
            toast.dismiss(loadingToast);
            e.target.removeAttribute("disabled");
            // return toast.error(response.data.error)

            if (response.data.error === "Incorrect current password") {
                return toast.error("Incorrect current password");
            }

            return toast.error(response.data.error || "An error occurred");
        })

    }

    return(
        <>
            <AnimationWrapper>
            <Toaster/>
                <form ref={ChangePasswordForm}>
                

                    <div className=" w-full md:max-w-[400px] text-black">
                        <InputBox name="currentPassword" type="password" className="" 
                           placeholder="Current Password" icon="bi-unlock"/>

                        <InputBox name="newPassword" type="password" className="" 
                           placeholder="New Password" icon="bi-lock"/>
                           
                        <div className="flex justify-center items-center">
                             <button onClick={handleSubmit} className="btn-dark " type="submit">Change Password</button>
                        </div>
                        
                    </div>
                </form>
            </AnimationWrapper>
        </>
    )
}


export default Changepassword;
