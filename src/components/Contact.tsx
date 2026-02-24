import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_axh3is6", // Your Service ID
        "template_ux9pnfq", // Your Template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Use env variable
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Connect With Me</h2>

      <div className="contact-box">
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          />

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success-msg">✅ Message sent successfully!</p>
          )}

          {status === "error" && (
            <p className="error-msg">
              ❌ Failed to send message. Please try again.
            </p>
          )}
        </form>

        <div className="contact-info">
          <h3>Contact Info</h3>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:mukeshvankayalapati@gmail.com">
              mukeshvankayalapati@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919392652639">+91 9392652639</a>
          </p>

          <p>
            <strong>Location:</strong> Hyderabad, India
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/mukesh7755"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/mukesh7755
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/mukesh-vankayalapati-9b388b259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/mukesh-vankayalapati
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
