import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import { SiTiktok, SiInstagram } from "react-icons/si";
import { NAV_LINKS } from "../data/index";

function Footer() {
    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer
            style={{
            background: "rgba(0,0,0,0.4)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "60px clamp(1.5rem, 5vw, 4rem) 32px",
        }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Top row */}
                <div
                    className="footer-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1fr 1fr",
                        gap: 48,
                        marginBottom: 48,
                    }}
                >

                    {/* Brand column */}
                    <div>
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                cursor: "pointer",
                                marginBottom: 16,
                            }}
                        >
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 10,
                                    background: "linear-gradient(135deg, #00FFB2, #00C9FF)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 900,
                                    fontSize: 14,
                                    color: "#080812",
                                    fontFamily: "'Syne', sans-serif",
                                }}
                            >
                                A
                            </div>
                            <span
                                style={{
                                    fontFamily: "'Syne', sans-serif",
                                    fontWeight: 800,
                                    fontSize: 18,
                                    color: "#fff",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Ahmed<span style={{ color: "#00FFB2" }}>.</span>
                            </span>
                        </motion.div>

                        <p
                            style={{
                                fontSize: 14,
                                color: "rgba(255,255,255,0.45)",
                                lineHeight: 1.8,
                                fontFamily: "'DM Sans', sans-serif",
                                maxWidth: 280,
                                marginBottom: 24,
                                textAlign: "left"
                            }}
                        >
                            Frontend developer passionate about building beautiful,
                            performant, and accessible web experiences.
                        </p>

                        {/* Socials */}
                        <div style={{ display: "flex", gap: 10 }}>
                            {[
                                { icon: FiGithub,    href: "https://github.com/Ahmedino3313", label: "GitHub" },
                                { icon: FiLinkedin,  href: "https://www.linkedin.com/in/ahmed-tajudeen-a569273bb/", label: "LinkedIn" },
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
                                        width: 38,
                                        height: 38,
                                        borderRadius: 10,
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgba(255,255,255,0.5)",
                                        textDecoration: "none",
                                        background: "rgba(255,255,255,0.03)",
                                        transition: "all 0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "#00FFB2";
                                        e.currentTarget.style.color = "#00FFB2";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                                    }}
                                >
                                    <s.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                fontWeight: 700,
                                fontSize: 14,
                                color: "#fff",
                                marginBottom: 20,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                            }}
                        >
                            Navigation
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link}
                                    onClick={() => scrollTo(link)}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: 14,
                                        color: "rgba(255,255,255,0.45)",
                                        fontFamily: "'DM Sans', sans-serif",
                                        textAlign: "left",
                                        padding: 0,
                                        transition: "color 0.3s",
                                        width: "fit-content",
                                    }}
                                    onMouseEnter={(e) => {(e.target.style.color = "#00FFB2")}}
                                    onMouseLeave={(e) => {(e.target.style.color = "rgba(255,255,255,0.45)")}}
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* contact column */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                fontWeight: 700,
                                fontSize: 14,
                                color: "#fff",
                                marginBottom: 20,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                            }}
                        >
                        Get In Touch
                        </h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                {[
                                    { label: "ahmedino3313@gmail.com", href: "mailto:ahmedino3313@gmail.com" },
                                    { label: "Ibadan, Nigeria 🇳🇬", href: "#" },
                                    { label: "Available for work ✔", href: "#contact" },
                                ].map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        style={{
                                            fontSize: 14,
                                            color: "rgba(255,255,255,0.45)",
                                            fontFamily: "'DM Sans', sans-serif",
                                            textDecoration: "none",
                                            transition: "color 0.3s",
                                            width: "fit-content",
                                        }}
                                        onMouseEnter={(e) => (e.target.style.color = "#00FFB2")}
                                        onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    style={{
                        height: 1,
                        background: "rgba(255,255,255,0.06)",
                        marginBottom: 28,
                    }}
                />

                {/* Bottom row */}
                    <div
                    className="footer-bottom"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 12,
                    }}
                >
                    <p
                        style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        © {new Date().getFullYear()} Ahmed Tajudeen. All rights reserved.
                    </p>

                    <p
                        style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "'DM Sans', sans-serif",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        }}
                    >
                        Built with
                            <motion.span
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                                style={{ display: "inline-flex" }}
                            >
                                <FiHeart size={13} style={{ color: "#ff4d6d", fill: "#ff4d6d" }} />
                            </motion.span>
                        using React.js & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;