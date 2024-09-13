import AnimationWrapper from "../common/page-Animation";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <AnimationWrapper>
        <section className="w-full">
          <div className="mb-5 rounded-full border-2 bg-red p-5 font-gelasio text-xl text-white">
            <div className="flex items-center justify-center gap-5">
              <Link to="/deposit" className="border-none bg-transparent px-0 py-0 font-bold text-black lg:rounded-full lg:border lg:bg-black lg:px-6 lg:py-1 lg:text-white ">
                Deposit
              </Link>

              <Link to='/withdraw' className="border-none bg-transparent px-0 py-0 font-bold text-black  lg:rounded-full lg:border lg:bg-black lg:px-6 lg:py-1 lg:text-white">
                Withdraw
              </Link>
              <Link to='/buy' className="border-none bg-transparent px-0 py-0 font-bold text-black  lg:rounded-full lg:border lg:bg-black lg:px-6 lg:py-1 lg:text-white">
                Buy
              </Link>
              <Link to="/sell" className="border-none bg-transparent px-0 py-0 font-bold text-black  lg:rounded-full lg:border lg:bg-black lg:px-6 lg:py-1 lg:text-white">
                Sell
              </Link>
            </div>

            <div className="mt-5 flex items-center justify-center gap-5">
              <Link to='/swap' className="border-none bg-transparent px-0 py-0 font-bold  md:rounded-full lg:border lg:bg-black lg:px-6 lg:py-1 lg:text-white">
                Swap
              </Link>
              <Link to='/card' className="border-none bg-transparent px-0 py-0 font-bold  lg:rounded-full lg:border lg:bg-black lg:px-6 lg:py-1 lg:text-white ">
                Cards
              </Link>
              <Link to='/bills' className="border-none bg-transparent px-0 py-0 font-bold  lg:rounded-full lg:border lg:bg-black lg:px-6 lg:py-1 lg:text-white ">
                Bills
              </Link>
              <Link to="/transfer" className="border-none bg-transparent px-0 py-0 font-bold  lg:rounded-full lg:border lg:bg-black lg:px-6 lg:py-1 lg:text-white ">
                Transfer
              </Link>
            </div>
          </div>
        </section>
      </AnimationWrapper>
    </>
  );
};

export default Header;
