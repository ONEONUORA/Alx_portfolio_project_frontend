/* eslint-disable react/no-unescaped-entities */
import AnimationWrapper from "../common/page-Animation";
import privacy from "../assets/privacy.jpg";

const Privacy = () => {
  return (
    <AnimationWrapper>
      <div
        className="relative min-h-screen bg-cover"
        style={{ backgroundImage: `url(${privacy})` }}
      >
        <section className="absolute inset-0 flex items-center justify-center p-4">
          <div
            className="mx-auto w-full max-w-screen-lg rounded-lg bg-white bg-opacity-80 p-8 shadow-lg"
            style={{ marginTop: "20px" }}
          >
            <h1 className="text-center font-bold text-red">
              Privacy Policy
            </h1>
            <p className="">
              <strong>Last Updated: Sept,2024</strong>
            </p>
            <p className="mt-4">
              We value your privacy and are committed to protecting your
              personal information.
            </p>

            <p className="mt-4">
              When you create an account on our platform, we collect essential
              information like your name and email, then store it in our
              database. This helps us provide you with a seamless experience and
              keep your account secure.
            </p>

            <p className="mt-4">
              Your data is safe with us. We use advanced security measures to
              protect it and only share it with trusted partners when necessary.
              You can update or delete your information anytime, and if you have
              any questions, we're here to help.
            </p>
          </div>
        </section>
      </div>
    </AnimationWrapper>
  );
};

export default Privacy;
