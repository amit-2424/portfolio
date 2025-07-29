"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        emailjs
            .sendForm(
            'service_dfvj798',
            'template_h1ii86p',
            form.current,
            'ZGPcx3DgB0tTuiZ45'
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    console.error("Email sending error:", error);
                    setLoading(false);
                }
            );
    };

    return (
        <section className="bg-white dark:bg-[#0f172a] py-16 px-6 sm:px-10 rounded-lg shadow-lg">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Contact Me
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
                    I’d love to hear from you! Fill in the form below and I’ll get back to you shortly.
                </p>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label className="block text-gray-800 dark:text-gray-200 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-800 dark:text-gray-200 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-800 dark:text-gray-200 mb-1">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && (
                        <p className="text-green-600 dark:text-green-400 text-center mt-4">
                            ✅ Message sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
