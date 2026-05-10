import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "../data/index";

function Navbar({ active }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex:100,
                background: scrolled ? "rgba(8, 8, 18, 0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(0, 255, 178, 0.08)" : "none",
                transition: "all 0.4s ease",
                padding: "0 clamp(1.5rem 5vw, 4rem)",
            }}
        >
            {/* Main Row */}
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 72,
                }}
            >
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
                >
                    <div 
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 900,
                            fontSize: 16,
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
                            fontSize: 24,
                            color: "#fff",
                            letterSpacing: "-0.02em",
                        }}>
                            Ahmed<span style={{ color: "#00ffb2" }}>.</span>
                        </span>
                </motion.div>

                {/* Desktop Nav Links */}
                <div 
                    className="desktop-nav"
                    style={{ display: "flex", gap: 32, alignItems: "center" }}
                >
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            onMouseEnter={(e) => e.target.style.color = "#00ffb2"}
                            onMouseLeave={(e) => e.target.style.color = active === link.toLowerCase() ? "#00ffb2" : "rgba(255,255,255,0.6)"}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 14,
                                fontWeight: 500,
                                letterSpacing: "0.02em",
                                color:
                                    active === link.toLowerCase()
                                    ? "#00ffb2"
                                    : "rgba(255, 255, 255, 0.6)",
                                transition: "color 0.3s",
                                fontFamily: "'DM Sans', sans-serif",
                                position: "relative",
                                padding: "4px 0",
                            }}
                        >
                            {link}
                            {active === link.toLowerCase() && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    style={{
                                        position: "absolute",
                                        bottom: -2,
                                        left: 0,
                                        right: 0,
                                        height: 2,
                                        background: "#00ffb2",
                                        borderRadius: 2,
                                    }}
                                />
                            )}
                        </button>
                    ))}

                    {/* Hire me Button */}
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => scrollTo("Contact")}
                        style={{
                            background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                            color: "#080812",
                            border: "none",
                            borderRadius: 10,
                            padding: "10px 22px",
                            fontWeight: 700,
                            fontSize: 14,
                            cursor: "pointer",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Hire Me
                    </motion.button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="mobile-menu-btn"
                    style={{
                        background: "none",
                        border: "1px solid rgba(0, 255, 178, 0.3)",
                        borderRadius: 8,
                        padding: 8,
                        cursor: "pointer",
                        color: "#00ffb2",
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        {open ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{
                            background: "rgba(8, 8, 18, 0.98)",
                            backdropFilter: "blur(20px)",
                            padding: "24px clamp(1.5rem, 5vw, 4rem)",
                            borderTop: "1px solid rgba(0, 255, 178, 0.1)",
                        }}
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.div
                                key={link}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <button
                                    onClick={() => scrollTo(link)}
                                    onMouseEnter={(e) => e.target.style.color = "#00ffb2"}
                                    onMouseLeave={(e) => e.target.style.color = "#fff"}
                                    style={{
                                        display: "block",
                                        background: "none",
                                        border: "none",
                                        color: "#fff",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        padding: "12px 0",
                                        cursor: "pointer",
                                        fontFamily: "'Syne', sans-serif",
                                        width: "100%",
                                        textAlign: "left",
                                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                                        transition: "color 0.3s",
                                    }}
                                >
                                    {link}
                                </button>
                            </motion.div>
                        ))}

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            onClick={() => scrollTo("Contact")}
                            style={{
                                marginTop: 20,
                                width: "100%",
                                background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                                color: "#080812",
                                border: "none",
                                borderRadius: 10,
                                padding: "13px",
                                fontWeight: 700,
                                fontSize: 16,
                                cursor: "pointer",
                                fontFamily: "'Syne', sans-serif",
                            }}
                        >
                            Hire Me
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;