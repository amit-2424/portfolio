import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 px-6 sm:px-10 lg:px-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4 dark:text-white">Get in Touch</h2>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl m-auto dark:text-white">
                    I'd love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.
                </p>
            </div>

            <form
                action="https://formspree.io/f/your-form-id" // Replace with your Formspree or API endpoint
                method="POST"
                className="max-w-3xl mx-auto rounded-2xl p-8 space-y-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 ">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 flex justify-center items-center text-center m-auto"
                    >
                        Submit Now <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </form>
        </section>
    );
}
