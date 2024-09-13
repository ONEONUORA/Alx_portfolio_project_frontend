/* eslint-disable react/no-unescaped-entities */
import AnimationWrapper from "../common/page-Animation";
import about from "../assets/about-us.jpg";
const About = () => {
  return (
    <>
      <AnimationWrapper>
        <div
          className="relative min-h-screen bg-cover"
          style={{ backgroundImage: `url(${about})` }}
        >
          <section className="absolute inset-0 flex items-center justify-center p-4">
            <div
              className="mx-auto w-full max-w-screen-lg rounded-lg bg-white bg-opacity-80 p-8 shadow-lg"
              style={{ marginTop: "20px" }}
            >
              <h1 className="mb-6 text-center text-3xl font-bold text-red">
                About Us
              </h1>

              <p className="mt-4">
                At Token Flow, we are passionate about bringing the latest and
                most accurate cryptocurrency data to your fingertips. Whether
                you're a seasoned investor or just starting to explore the world
                of digital currencies, our platform provides real-time insights
                and updates on the rates of popular cryptocurrencies like
                Bitcoin, Ethereum, and more.
              </p>

              <p className="mt-4">
                Our mission is to empower users with up-to-date information,
                allowing you to make informed decisions in the fast-paced and
                ever-evolving cryptocurrency market. We leverage reliable data
                sources and cutting-edge technology to ensure you stay ahead of
                the curve with timely and precise cryptocurrency prices.
              </p>

              <p className="mt-4">
                We believe that the future of finance is digital, and we are
                committed to helping you navigate this exciting space. By
                offering an intuitive platform and valuable tools, we aim to
                make cryptocurrency information accessible to everyone.
              </p>

              <p className="mb-4">
                Whether you're checking the latest prices or keeping track of
                trends, Token Flow is your trusted source for cryptocurrency
                rates.
              </p>
            </div>
          </section>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default About;
