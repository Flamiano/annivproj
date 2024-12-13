import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, Babe! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full py-[3rem] px-4 bg-[#CFCBCE]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold py-4 mb-5 text-[#171717] text-center text-contactfadeinup">
          💜 Leave Me a Message 💜
        </h2>
        <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto">
          <div className="mb-4">
            <label
              className="block text-center text-[#8A34CF] font-medium mb-2"
              htmlFor="name"
            >
              Sharmaine Boyboy
            </label>
            
          </div>
          <div className="mb-4">
            <label
              className="block text-[#171717] font-medium mb-2"
              htmlFor="email"
            >
              Your Email:
            </label>
            <input
              className="w-full p-3 border text-[#171717] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A34CF] text-contactfadeinup"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#171717] font-medium mb-2"
              htmlFor="message"
            >
              Your Message:
            </label>
            <textarea
              className="w-full p-3 text-[#171717] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A34CF] text-contactfadeinup"
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your sweet message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#171717] text-[#CFCBCE] font-medium py-3 rounded-md hover:bg-[#8A34CF] transition ease-in-out duration-700 text-contactfadeinup"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
