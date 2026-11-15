import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Valid email is required";
    }
    if (!formData.message.trim()) errs.message = "Message cannot be empty";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[110] p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-lg border-4 border-black rounded-3xl p-6 md:p-8 shadow-neo relative animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-shrikhand text-black">Get in Touch 📬</h2>
          <button
            onClick={onClose}
            className="text-2xl p-2 rounded-full border-2 border-black bg-gray-100 hover:rotate-90 hover:bg-custom-red hover:text-white transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Quick Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <a
            href="mailto:vandanasaharan11@gmail.com"
            className="flex items-center justify-center gap-2 p-3 bg-custom-yellow text-black font-bold text-sm border-2 border-black rounded-xl hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none shadow-neo-sm transition-all"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://github.com/Vandana-Saharan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-gray-200 text-black font-bold text-sm border-2 border-black rounded-xl hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none shadow-neo-sm transition-all"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="http://linkedin.com/in/vandana-0bb224283"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-blue-200 text-black font-bold text-sm border-2 border-black rounded-xl hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none shadow-neo-sm transition-all"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Message Form */}
        <div className="border-t-2 border-black pt-4">
          <p className="font-mono text-xs font-bold uppercase tracking-wider mb-4 text-gray-700">
            Send a direct message:
          </p>

          {isSubmitted ? (
            <div className="p-6 bg-custom-green border-4 border-black rounded-2xl text-center shadow-neo-sm my-4">
              <span className="text-3xl block mb-2">🎉</span>
              <h3 className="font-shrikhand text-2xl mb-1">Message Sent!</h3>
              <p className="font-bold text-sm">
                Thanks for reaching out! I'll get back to you promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-xl border-2 border-black bg-gray-50 font-medium text-sm outline-none focus:bg-white focus:shadow-neo-sm transition-all ${
                    errors.name ? "border-red-500 bg-red-50" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-bold mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-xl border-2 border-black bg-gray-50 font-medium text-sm outline-none focus:bg-white focus:shadow-neo-sm transition-all ${
                    errors.email ? "border-red-500 bg-red-50" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-bold mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-xl border-2 border-black bg-gray-50 font-medium text-sm outline-none resize-none focus:bg-white focus:shadow-neo-sm transition-all ${
                    errors.message ? "border-red-500 bg-red-50" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs font-bold mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-custom-green text-black font-bold py-3 rounded-xl border-2 border-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaPaperPlane /> SEND_MESSAGE()
              </button>
            </form>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-5 w-full bg-custom-red text-white font-bold py-2.5 rounded-xl border-2 border-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer uppercase tracking-wider text-sm"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
