import React, { useState } from 'react';

const ContactMe = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send an email or store data
    console.log('Form submitted:', formData);
    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="bg-gray-100 py-16 font-serif">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              I'm currently available for opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
            </p>
            <p className="text-gray-600 mb-4 text-justify text-l font-serif">
              Email: arkho.psarkar@gmail.com
              <div/>
              Phone: +91 9433355284
              <div/>
              Github: https://github.com/Arkhopravo
              <div/>
              
            </p>
            <img src="https://icmae.org/assets/img/get-in-touch.png" alt="" className='h-80 ' />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Contact Form</h3>
            <p className="text-gray-600 mb-4">
              If you prefer, you can use the contact form below to send me a message:
            </p>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              {/* Message Input */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-600">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2"
                  rows="4"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
