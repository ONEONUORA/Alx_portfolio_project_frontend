import { useContext } from "react";
import AnimationWrapper from "../common/page-Animation";
import Footer from "../components/footer";
import { UserContext } from "../App";
import InputBox from "../components/input";
import ChangePassword from "../components/changePassword";

const Profile = () => {
  let {
    userAuth: { username, fullname, email },
  } = useContext(UserContext);
  return (
    <>
      <AnimationWrapper>
        <section className="min-h-screen w-full bg-black text-white">
          <p className="flex items-center justify-center text-2xl font-bold mb-10">
            Profile
          </p>
          <div className="bg-dark-grey px-3 py-2 mb-5">
            <p className="mb-2 text-sm font-bold text-red">SIGNED IN AS</p>

            <div className="w-full">
              <div className="grid grid-cols-1 text-xl text-black md:grid-cols-2 md:gap-5">
                <div>
                  <InputBox
                    name="fullname"
                    type="text"
                    value={fullname}
                    placeholder="Full Name"
                    disable={true}
                    icon="bi-person"
                  />
                </div>

                <div>
                  <InputBox
                    name="email"
                    type="email"
                    value={email}
                    placeholder="E-mail"
                    disable={true}
                    icon="bi-envelope"
                  />
                </div>

                <div>
                  <InputBox
                    name="username"
                    type="text"
                    value={username}
                    placeholder="Username"
                    disable={true}
                    icon="bi-at"
                  />
                </div>

                <div>
                  <InputBox
                    name="2fa"
                    type="text"
                    className=""
                    placeholder="Enable 2FA"
                    icon="bi-lock"
                  />
                </div>
              </div>
            </div>

            <p className="mb-2 text-sm font-bold text-red">ACCOUNT</p>

            <div className="w-full">
              <div className="grid grid-cols-1 text-xl text-black md:grid-cols-2 md:gap-5">
                <div>
                  <InputBox
                    name="paymentMethods"
                    type="text"
                    placeholder="Payment Methods"
                    icon="bi-credit-card"
                  />
                </div>

                <div>
                  <InputBox
                    name="email"
                    type="text"
                    placeholder="Verification And Limits"
                    icon="bi-folder-check"
                  />
                </div>
              </div>
            </div>

            <p className="mb-2 text-sm font-bold text-red">SECURITY</p>

            <div className="w-full">
              <div className="grid grid-cols-1 text-xl text-black md:grid-cols-2 md:gap-5">
                <div>
                  <ChangePassword />
                </div>
              </div>
            </div>
           
          </div>

          <div className="flex justify-center items-center">
                <button type="submit" className="btn-light font-bold ">
                     Update Details
                </button>
          </div>
       
        </section>
        <Footer />
      </AnimationWrapper>
    </>
  );
};

export default Profile;
