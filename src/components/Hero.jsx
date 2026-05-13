import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronRight } from "react-icons/fi";
import { SiTiktok,  SiInstagram } from "react-icons/si";
import { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpeg";

// Typewriter Hook
function useTypewriter(words, speed = 80, pause = 2000) {
    const [display, setDisplay] = useState("");
    const [wordIdx, setWordIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIdx];
        const timeout = setTimeout(() => {
            if (!deleting) {
                setDisplay(current.slice(0, charIdx + 1));
                if (charIdx + 1 === current.length) {
                    setTimeout(() => setDeleting(true), pause);
                } else {
                    setCharIdx((c) => c + 1);
                }
            } else {
                setDisplay(current.slice(0, charIdx - 1));
                if (charIdx -1 === 0) {
                    setDeleting(false);
                    setWordIdx((w) => (w + 1) % words.length);
                    setCharIdx(0);
                } else {
                    setCharIdx((c) => c - 1);
                }
            }
        }, deleting ? speed / 2 : speed);
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, wordIdx, words, speed, pause]);

    return display;
}

// Particle Background
function ParticleField() {
    const dots = Array.from({ length: 50 }, (_, i) => ({ 
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 4,
    }));

    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                {dots.map((d) => (
                    <motion.circle
                    key={d.id}
                    cx={d.x}
                    cy={d.y}
                    r="0.2"
                    fill="#00ffb2"
                    animate={{
                        opacity: [0.05, 0.4, 0.05],
                        cy: [`${d.y}`, `${d.y - 5}`, `${d.y}`],
                    }}
                    transition={{
                        duration: d.duration,
                        repeat: Infinity,
                        delay: d.delay,
                        ease: "easeInOut",
                    }}
                    />
                ))}
            </svg>

            {/* Grid overlay */}
            <div
                style={{ 
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(0, 255, 178, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 178, 0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
        </div>
    );
}

function Hero() {
    const typed = useTypewriter(
        ["Frontend Developer", "React Specialist", "UI Craftsman", "Problem Solver"],
        75,
        2000
    );

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                paddingTop: 80,
                padding: "80px clamp(1.5rem, 5vw, 4rem) 60px",
            }}
        >
            <ParticleField />

            {/* Glow orbs */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0, 255, 178, 0.10) 0%, transparent 70%)",
                    pointerEvents: "none"
                }}
            />
                <div
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        left: "-5%",
                        width: 350,
                        height: 350,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0, 201, 255, 0.07) 0%, transparent 70%)",
                        pointerEvents: "none"
                    }}
                />

                {/* Main Grid */}
                <div
                    className="hero-grid"
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: 60,
                        alignItems: "center"
                    }}
                >
                    {/* Left side */}
                    <div>
                        {/* Available badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(0, 255, 178, 0.08)",
                                border: "1px solid rgba(0, 255, 178, 0.2)",
                                borderRadius: 100,
                                padding: "16px 16px",
                                marginBottom: 24,
                            }}
                        >
                            <motion.span
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "#00ffb2",
                                    display: "inline-block",
                                    boxShadow: "0 0 8px #00ffb2",
                                }}
                            />
                            <span
                                style={{
                                    fontSize: 13,
                                    color: "#00ffb2",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    fontFamily: "'DM Sans', sans-serif",
                                }}
                            >
                                AVAILABLE FOR WORK
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                                fontWeight: 900,
                                lineHeight: 1.09,
                                color: "#fff",
                                marginBottom: 12,
                                letterSpacing: "0.03em"
                            }}
                        >
                            Hi I'm{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Ahmed Tajudeen
                            </span>
                        </motion.h1>

                        {/* Typewriter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{
                                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                                fontFamily: "'Syne', sans-serif",
                                fontWeight: 700,
                                color: "rgba(255, 255, 255, 0.85)",
                                marginBottom: 20,
                                height: 48,
                                display: "flex",
                                alignItems: "center",
                                gap:6,
                            }}
                        >
                            <span>{typed}</span>
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                style={{ color: "#00ffb2", fontWeight: 300, fontSize: "1.1em" }}
                            >
                                |
                            </motion.span>
                        </motion.div>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                fontSize: "clamp(15px, 1.5vw, 17px)",
                                color: "rgba(255, 255, 255, 0.55)",
                                lineHeight: 1.8,
                                maxWidth: 520,
                                marginBottom: 36,
                                fontFamily: "'DM Sans', sans-serif",
                                textAlign: "justify"
                            }}
                        >
                            I craft beautiful, high-performance web experiences with{" "}
                            <strong style={{ color: "rgba(255,255,255,0.85)" }}>React.js</strong> and
                            modern frontend technologies. Every pixel is intentional. Every
                            interaction is crafted.
                            I’m passionate about building responsive, visually engaging, and scalable 
                            digital products that deliver seamless experiences across all devices.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 44 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() =>
                                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                                }
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "13px 26px",
                                    borderRadius: 12,
                                    fontWeight: 700,
                                    fontSize: 15,
                                    cursor: "pointer",
                                    fontFamily: "'DM Sans', sans-serif",
                                    background: "linear-gradient(135deg, #00FFB2, #00C9FF)",
                                    color: "#080812",
                                    border: "none",
                                    boxShadow: "0 8px 32px rgba(0,255,178,0.25)",
                                }}
                            >
                                <FiChevronRight size={16} /> View Projects
                            </motion.button>
                            <motion.a
                                href="/Tajudeen_Ahmed_Resume.pdf"
                                download
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "13px 26px",
                                    borderRadius: 12,
                                    fontWeight: 700,
                                    fontSize: 15,
                                    cursor: "pointer",
                                    fontFamily: "'DM Sans', sans-serif",
                                    background: "transparent",
                                    color: "#fff",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    textDecoration: "none",
                                }}
                            >
                                <FiDownload size={16} /> Download Resume
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() =>
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                }
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "13px 26px",
                                    borderRadius: 12,
                                    fontWeight: 700,
                                    fontSize: 15,
                                    cursor: "pointer",
                                    fontFamily: "'DM Sans', sans-serif",
                                    background: "transparent",
                                    color: "#fff",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                }}
                            >
                                <FiMail size={16} /> Contact Me
                            </motion.button>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            style={{ display: "flex", gap: 14, }}
                        >
                            {[
                                { icon: FiGithub,   href: "https://github.com/Ahmedino3313", label: "GitHub"   },
                                { icon: FiLinkedin, href: "https://www.linkedin.com/in/ahmed-tajudeen-a569273bb/?skipRedirect=true", label: "LinkedIn" },
                                { icon: SiTiktok,  href: "https://www.tiktok.com/@ahmedino33?_r=1&_t=ZS-96DTNqUiesW", label: "TikTok"  },
                                { icon: SiInstagram,  href: "https://www.instagram.com/ahmedino_33?igsh=eXpheGR5Mm42dGdt&utm_source=qr", label: "Instagram"  },
                            ].map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                whileHover={{ scale: 1.12, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                title={s.label}
                                target="_blank"
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
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#00FFB2")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                            >
                                <s.icon size={18} />
                            </motion.a>
                            ))}
                        </motion.div>
                    </div>
                    {/* Right Side Photo */}
                    <motion.div
                        className="hero-avatar"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ position: "relative", width: 320 }}
                    >
                        {/* Rotating rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: "absolute",
                                inset: -16,
                                borderRadius: "50%",
                                border: "1px dashed rgba(0,255,178,0.3)",
                            }}
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: "absolute",
                                inset: -32,
                                borderRadius: "50%",
                                border: "1px dashed rgba(0,201,255,0.15)",
                            }}
                        />

                        {/* Photo circle */}
                        <div
                            style={{
                                width: 320,
                                height: 320,
                                borderRadius: "50%",
                                border: "3px solid rgba(0,255,178,0.3)",
                                overflow: "hidden",
                                position: "relative",
                                background: "linear-gradient(135deg, rgba(0,255,178,0.1), rgba(0,201,255,0.05))",
                                boxShadow: "0 0 60px rgba(0,255,178,0.15)",
                            }}
                        >
                            <img
                                src={profileImg}
                                alt="Ahmed Tajudeen"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center top",
                                }}
                            />
                        </div>

                        {/* Floating badges */}
                        {[
                            { label: "React Dev",    sub: "Specialist",   top: "5%",  right: "-30%", color: "#61DAFB" },
                            { label: "1+ Years",     sub: "Learning",     bottom: "8%", left: "-28%", color: "#00FFB2" },
                            { label: "7+ Projects",  sub: "Shipped",      top: "52%", right: "-32%", color: "#A78BFA" },
                        ].map((badge, i) => (
                            <motion.div
                                key={i}
                                className="badge"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + i * 0.15 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                style={{
                                    position: "absolute",
                                    ...Object.fromEntries(
                                        Object.entries(badge).filter(([k]) =>
                                            ["top", "bottom", "left", "right"].includes(k)
                                        )
                                    ),
                                    background: "rgba(8,8,24,0.9)",
                                    backdropFilter: "blur(16px)",
                                    border: `1px solid ${badge.color}40`,
                                    borderRadius: 12,
                                    padding: "10px 16px",
                                    textAlign: "center",
                                    cursor: "default",
                                    minWidth: 100,
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 800,
                                        color: badge.color,
                                        fontFamily: "'Syne', sans-serif",
                                    }}
                                >
                                    {badge.label}
                                </div>
                                <div
                                    style={{
                                        fontSize: 11,
                                        color: "rgba(255,255,255,0.5)",
                                        fontFamily: "'DM Sans', sans-serif",
                                        marginTop: 2,
                                    }}
                                >
                                    {badge.sub}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{
                        position: "absolute",
                        bottom: 32,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                    }}
                >
                    <span
                        style={{
                            fontSize: 11,
                            color: "rgba(255,255,255,0.3)",
                            letterSpacing: "0.12em",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        SCROLL
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: 1.5,
                            height: 32,
                            background: "linear-gradient(to bottom, #00FFB2, transparent)",
                            borderRadius: 2,
                        }}
                    />
                </motion.div>
        </section>
    );
}

export default Hero;