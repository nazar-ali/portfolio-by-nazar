import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.log(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#f5f5f5] min-h-screen flex items-center px-6 md:px-20">
      
      <div className="grid md:grid-cols-2 gap-10 w-full items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-5xl text-red-600 mt-4">
            Contact me
          </h3>
        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
          />

            <input
            type="number"
            name="from_number"
            placeholder="Your Contact Number"
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
            />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-black"
          ></textarea>
    
          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 border rounded-lg hover:bg-black hover:text-white transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="text-green-600">Message sent successfully ✅</p>
          )}

          {status === "error" && (
            <p className="text-red-600">Failed to send ❌</p>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;