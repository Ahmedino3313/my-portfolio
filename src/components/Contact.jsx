import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin,} from "react-icons/fi";
import { SiTiktok, SiInstagram } from "react-icons/si";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const sanitize = (str) => str.replace(/<[^>]*>/g, "").trim();

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
        from_name:  sanitize(form.name),
        from_email: sanitize(form.email),
        message:    sanitize(form.message),
        },
        PUBLIC_KEY
    )
    .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
    })
    .catch(() => {
        setLoading(false);
        setError("Something went wrong. Please try again!");
    });
};

    const inputStyle = {
        width: "100%",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: "13px 16px",
        color: "#fff",
        fontSize: 15,
        fontFamily: "'DM Sans', sans-serif",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color 0.3s",
    };

    return (
        <section
            id="contact"
            style={{
                padding: "120px clamp(1.5rem, 5vw, 4rem)",
            }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Section label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "#00FFB2",
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: 12,
                        textTransform: "uppercase",
                    }}
                >
                        — Contact
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        fontWeight: 900,
                        color: "#fff",
                        marginBottom: 16,
                        letterSpacing: "-0.03em",
                    }}
                >
                    Let's Work{" "}
                    <span
                        style={{
                        background: "linear-gradient(135deg, #00FFB2, #00C9FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        }}
                    >
                        Together
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        fontSize: 16,
                        color: "rgba(255,255,255,0.45)",
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: 60,
                        maxWidth: 480,
                        textAlign: "justify"
                    }}
                >
                    Have a project in mind or want to hire me? My inbox
                    is always open. Let's build something great together!
                </motion.p>

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.4fr",
                        gap: 60,
                        alignItems: "start",
                    }}
                >

                    {/* Left info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p
                            style={{
                                fontSize: 16,
                                color: "rgba(255,255,255,0.55)",
                                lineHeight: 1.8,
                                fontFamily: "'DM Sans', sans-serif",
                                marginBottom: 36,
                                textAlign: "justify"
                            }}
                        >
                            I'm currently available for freelance work and
                            open to full-time opportunities. Whether you have
                            a question, a project, or just want to say hi - 
                            feel free to reach out!
                        </p>

                        {/* Contact info */}
                        {[
                            { icon: FiMail,    label: "Email", value: "ahmedino3313@gmail.com" },
                            { icon: FiMapPin,  label: "Location", value: "Ibadan, Nigeria 🇳🇬"},
                        ].map((info) => (
                            <div
                                key={info.label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 16,
                                    marginBottom: 20,
                                }}
                            >
                                <div
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 12,
                                        background: "rgba(0,255,178,0.08)",
                                        border: "1px solid rgba(0,255,178,0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#00FFB2",
                                        flexShrink: 0,
                                    }}
                                >
                                    <info.icon size={18} />
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontSize: 12,
                                            color: "rgba(255,255,255,0.35)",
                                            fontFamily: "'DM Sans', sans-serif",
                                            marginBottom: 2,
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {info.label}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            color: "#fff",
                                            fontWeight: 500,
                                            fontSize: 15,
                                        }}
                                    >
                                        {info.value}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Social links */}
                        <div style={{ marginTop: 32 }}>
                        <p
                            style={{
                                fontSize: 13,
                                color: "rgba(255,255,255,0.35)",
                                fontFamily: "'DM Sans', sans-serif",
                                letterSpacing: "0.1em",
                                marginBottom: 14,
                                textTransform: "uppercase",
                            }}
                        >
                            Find me on
                        </p>
                        <div style={{ display: "flex", gap: 12 }}>
                            {[
                                { icon: FiGithub,    href: "https://github.com/Ahmedino3313", label: "GitHub" },
                                { icon: FiLinkedin,  href: "https://www.linkedin.com/in/ahmed-tajudeen-a569273bb/", label: "LinkedIn"  },
                                { icon: SiTiktok,    href: "https://www.tiktok.com/@ahmedino33", label: "TikTok" },
                                { icon: SiInstagram, href: "https://www.instagram.com/ahmedino_33", label: "Instagram" },
                            ].map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={s.label}
                                    whileHover={{ scale: 1.12, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 12,
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgba(255,255,255,0.6)",
                                        textDecoration: "none",
                                        background: "rgba(255,255,255,0.04)",
                                        transition: "all 0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget.style.borderColor = "#00FFB2")
                                    }}
                                        onMouseLeave={(e) => {
                                        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
                                    }}
                                >
                                    <s.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 24,
                            padding: "36px 32px",
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {sent ? (
                                // Success state
                                <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                style={{ textAlign: "center", padding: "40px 20px" }}
                                >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                    style={{
                                        width: 72,
                                        height: 72,
                                        borderRadius: "50%",
                                        background: "rgba(0,255,178,0.12)",
                                        border: "2px solid rgba(0,255,178,0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 20px",
                                        fontSize: 32,
                                    }}
                                >
                                    ✔
                                </motion.div>
                                <h3
                                    style={{
                                    fontFamily: "'Syne', sans-serif",
                                    color: "#00FFB2",
                                    fontSize: 22,
                                    fontWeight: 800,
                                    marginBottom: 8,
                                    }}
                                >
                                    Message Sent!
                                </h3>
                                <p
                                    style={{
                                    color: "rgba(255,255,255,0.5)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 15,
                                    }}
                                >
                                    Thanks for reaching out! I'll get back to you as soon as possible.
                                </p>
                                </motion.div>
                            ) : (
                                // form 
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    style={{ display: "flex", flexDirection: "column", gap: 20 }}
                                >
                                    <h3
                                        style={{
                                        fontFamily: "'Syne', sans-serif",
                                        fontWeight: 800,
                                        fontSize: 20,
                                        color: "#fff",
                                        marginBottom: 4,
                                        }}
                                    >
                                        Send a Message
                                    </h3>

                                    {/* Name */}
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: 13,
                                                fontWeight: 600,
                                                color: "rgba(255,255,255,0.6)",
                                                marginBottom: 8,
                                                fontFamily: "'DM Sans', sans-serif",
                                                letterSpacing: "0.04em",
                                            }}
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            value={form.name}
                                            onChange={(e) =>
                                                setForm((v) => ({ ...v, name: e.target.value }))
                                            }
                                            style={inputStyle}
                                            onFocus={(e) => {
                                                (e.target.style.borderColor = "rgba(0,255,178,0.4)")
                                            }}
                                            onBlur={(e) =>
                                                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                                            }
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                        style={{
                                            display: "block",
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: "rgba(255,255,255,0.6)",
                                            marginBottom: 8,
                                            fontFamily: "'DM Sans', sans-serif",
                                            letterSpacing: "0.04em",
                                        }}
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            value={form.email}
                                            onChange={(e) => {
                                                setForm((v) => ({ ...v, email: e.target.value }))
                                            }}
                                            style={inputStyle}
                                            onFocus={(e) => {
                                                (e.target.style.borderColor = "rgba(0,255,178,0.4)")
                                            }}
                                            onBlur={(e) => {
                                                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                                            }}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: 13,
                                                fontWeight: 600,
                                                color: "rgba(255,255,255,0.6)",
                                                marginBottom: 8,
                                                fontFamily: "'DM Sans', sans-serif",
                                                letterSpacing: "0.04em",
                                            }}
                                        >
                                            Message
                                        </label>
                                        
                                        <textarea
                                            placeholder="Tell me about your project..."
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => {
                                                setForm((v) => ({ ...v, message: e.target.value }))
                                            }}
                                            style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                                            onFocus={(e) => {
                                                (e.target.style.borderColor = "rgba(0,255,178,0.4)")
                                            }}
                                            onBlur={(e) => {
                                                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                                            }}
                                        />
                                    </div>
                                    {/* Inline error message */}
                                    <AnimatePresence>
                                        {error && (
                                            <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            style={{
                                                background: "rgba(255,77,77,0.08)",
                                                border: "1px solid rgba(255,77,77,0.3)",
                                                borderRadius: 10,
                                                padding: "12px 16px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                            }}
                                            >
                                            <span style={{ fontSize: 16 }}>⚠</span>
                                            <p
                                                style={{
                                                fontSize: 14,
                                                color: "#ff4d4d",
                                                fontFamily: "'DM Sans', sans-serif",
                                                margin: 0,
                                                }}
                                            >
                                                {error}
                                            </p>
                                        </motion.div>
                                    )}
                                    </AnimatePresence>

                                    {/* Submit button */}
                                    <motion.button
                                        type="submit"
                                        disabled={loading}
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 10,
                                            width: "100%",
                                            padding: "14px",
                                            background: loading
                                                ? "rgba(0,255,178,0.4)"
                                                : "linear-gradient(135deg, #00FFB2, #00C9FF)",
                                            color: "#080812",
                                            border: "none",
                                            borderRadius: 12,
                                            fontWeight: 800,
                                            fontSize: 16,
                                            cursor: loading ? "not-allowed" : "pointer",
                                            fontFamily: "'Syne', sans-serif",
                                            boxShadow: "0 8px 32px rgba(0,255,178,0.2)",
                                            transition: "all 0.3s",
                                        }}
                                    >
                                        {loading ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            style={{
                                            width: 20,
                                            height: 20,
                                            border: "2px solid #080812",
                                            borderTopColor: "transparent",
                                            borderRadius: "50%",
                                            }}
                                        />
                                        ) : (
                                        <>
                                            <FiSend size={16} /> Send Message
                                        </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;