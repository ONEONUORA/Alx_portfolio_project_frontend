


import emailjs from "@emailjs/browser";
import { useRef } from "react";
import InputBox from "../components/input";
import about from "../assets/contact.jpg";
import AnimationWrapper from "../common/page-Animation";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = formRef.current.querySelector("#name").value;
    const email = formRef.current.querySelector("#email").value;
    const message = formRef.current.querySelector("#message").value;

    if (!name || !email || !message) {
      alert("Please fill all required fields");
      return false;
    }

    emailjs
      .sendForm("service_z6yypik", "template_v4tlv4z", formRef.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Accessing the public key from the environment variable
      })
      .then(
        () => {
          console.log("SUCCESS!");
          formRef.current.reset();
          showAlert(); // Show alert after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const showAlert = () => {
    alert("Thank you, We'll get back to you shortly");
  };

  return (
    <>
      <AnimationWrapper>
        <div
          className="relative min-h-screen bg-cover"
          style={{ backgroundImage: `url(${about})` }}
        >
          <section className="h-cover absolute inset-0 flex items-center justify-center p-4">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="border bg-white p-10 text-black shadow-lg"
            >
              <p className="m-3 text-center text-2xl font-semibold text-twitter">
                Contact Us
              </p>
              <div className="mb-3">
                <InputBox
                  type="text"
                  className="input-box"
                  id="name"
                  name="user_name"
                  placeholder="Enter your name"
                  icon="bi-person"
                />
              </div>

              <div className="mb-3">
                <InputBox
                  type="email"
                  className="input-box"
                  id="email"
                  name="user_email"
                  icon="bi-envelope"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="input-box1 resize-none hover:text-black"
                  id="message"
                  rows="3"
                  name="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button id="myButton" type="submit" className="btn-dark center">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default Contact;
