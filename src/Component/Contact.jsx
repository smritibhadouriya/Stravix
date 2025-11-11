// src/Component/Contact.jsx
import React from "react";

const Contact = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="contact-section"
      className="mb-10"
      {...props}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
          {/* LEFT: Info + Images */}
          <div className="flex flex-col justify-center space-y-1 lg:pl-8">
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <img
                src="https://imgs.search.brave.com/nOOyvhNpo2PBIlDYQttadHer26AX-_0cMzHfWpEegUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvcHJv/ZmVzc2lvbmFscy9p/bWctY29udGVudC53/ZWJwP3c9NjAw"
                alt="Contact illustration 1"
                className="flex-1 w-full sm:w-1/2 h-auto object-cover rounded-lg shadow-sm"
              />
              <img
                src="https://imgs.search.brave.com/_Hf9l4vUroQq5Gks-sFPdFBeNhJzsf_IU5SQ8_ZJjf4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/cmVpbWFnaW5lLndl/YnA"
                alt="Contact illustration 2"
                className="flex-1 w-full sm:w-1/2 h-auto object-cover rounded-lg shadow-sm"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800">Get In Touch</h2>

            <div className="space-y-6 mt-6">
              <div className="flex items-start space-x-3">
                <div className="p-3 rounded-full bg-pink-100">
                  <svg className="w-6 h-6 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-950">hello@yourcompany.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-3 rounded-full bg-pink-100">
                  <svg className="w-6 h-6 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-950">Mumbai, IN</p>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.70176810728!2d72.71412747332744!3d19.082482210877554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1761281509580!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stravix Office"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="p-8 bg-white rounded-2xl shadow-lg max-h-150">
            <h2 className="text-2xl font-bold text-gray-950 mb-6">Let's Connect</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-2xl font-semibold text-pink-600 mb-1">
                  Hello, My name is
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-pink-600 outline-none transition"
                  placeholder="Enter your name here"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-2xl font-semibold text-pink-600 mb-1">
                  And I'm looking for
                </label>
                <textarea
                  id="message"
                  rows="2"
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-pink-600 outline-none transition resize-none"
                  placeholder="Write a message"
                ></textarea>
              </div>

              <div>
                <label htmlFor="email" className="block text-2xl font-semibold text-pink-600 mb-1">
                  You can reach me at
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-pink-600 outline-none transition"
                  placeholder="Enter your email here"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;