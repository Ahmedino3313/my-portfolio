import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Animated Counter Hook
function useCounter(target, duration = 1800, start = false) {

    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const years    = useCounter(1,  1500, inView);
    const projects = useCounter(7,  1800, inView);
    const techs    = useCounter(12, 1600, inView);

    return (
        <section
            id="about"
            style={{
                padding: "120px clamp(1.5rem, 5vw, 4rem)",
                background: "rgba(0,255,178,0.015)",
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
                — About Me
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
                    marginBottom: 60,
                    letterSpacing: "-0.03em",
                }}
            >
                Who I{" "}
                <span
                    style={{
                        background: "linear-gradient(135deg, #00FFB2, #00C9FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Am
                </span>
            </motion.h2>

            {/* Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 80,
                    alignItems: "center",
                }}
            >
            {/* Left visual card */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div
                    style={{
                        background: "linear-gradient(135deg, rgba(0,255,178,0.06), rgba(0,201,255,0.04))",
                        border: "1px solid rgba(0,255,178,0.12)",
                        borderRadius: 24,
                        padding: 40,
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Glow */}
                    <div
                        style={{
                        position: "absolute",
                        top: -60,
                        right: -60,
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0,255,178,0.12), transparent 70%)",
                        pointerEvents: "none",
                        }}
                    />

                    <p
                        style={{
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "#00FFB2",
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: 16,
                        textTransform: "uppercase",
                        }}
                    >
                        — My Story
                    </p>

                    <h3
                        style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                        fontWeight: 800,
                        color: "#fff",
                        marginBottom: 16,
                        lineHeight: 1.3,
                        }}
                    >
                        Self-taught. Driven. <br />
                        Obsessed with the web.
                    </h3>

                    <p
                        style={{
                            color: "rgba(255,255,255,0.5)",
                            lineHeight: 1.8,
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 15,
                            marginBottom: 28,
                            textAlign: "justify"
                        }}
                    >
                        I started from zero — no bootcamp, no degree. 
                        Just pure curiosity, late nights, and a burning desire to build things that look and feel amazing on the web. 
                        It wasn’t until I gained admission to study Computer Science in 2023 at The Polytechnic Ibadan that I truly discovered my passion for tech and web development.
                        Since then, I’ve been learning, building, failing, improving, and creating projects that push me to grow every day. 
                        From writing my first lines of code to developing full web applications, the journey has been challenging, exciting, and worth every moment.
                        Still learning. Still building. Still hungry for more.
                    </p>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                        {["React.js", "JavaScript", "CSS", "Framer Motion", "Tailwind"].map((t) => (
                        <span
                            key={t}
                            style={{
                            background: "rgba(0,255,178,0.08)",
                            border: "1px solid rgba(0,255,178,0.2)",
                            borderRadius: 6,
                            padding: "4px 14px",
                            fontSize: 13,
                            color: "#00FFB2",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                            }}
                        >
                            {t}
                        </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Right Text and stats  */}
            <div ref={ref}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        fontSize: "clamp(15px, 1.5vw, 17px)",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.9,
                        marginBottom: 20,
                        fontFamily: "'DM Sans', sans-serif",
                        textAlign: "justify"
                    }}
                >
                    I'm <strong style={{ color: "#fff" }}>Ahmed Tajudeen</strong> — a
                    self-taught frontend developer from Nigeria building modern,
                    responsive, and polished web applications. My journey started with
                    pure curiosity and grew into a deep passion for the craft.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: "clamp(15px, 1.5vw, 17px)",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.9,
                        marginBottom: 40,
                        fontFamily: "'DM Sans', sans-serif",
                        textAlign: "justify"
                    }}
                >
                    I specialize in{" "}
                    <strong style={{ color: "#00FFB2" }}>React.js</strong> and modern
                    CSS — building everything from luxury e-commerce stores to
                    interactive quiz apps and real estate platforms. Every project I
                    take on, I bring the same energy: clean code, beautiful design,
                    and a relentless focus on user experience.
                </motion.p>

                {/* Stats */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16,
                }}
                >
                {[
                    { count: years,    suffix: "+", label: "Years Learning"  },
                    { count: projects, suffix: "+", label: "Projects Built"  },
                    { count: techs,    suffix: "+", label: "Technologies"    },
                ].map((stat, i) => (
                    <motion.div
                    key={i}
                    whileHover={{ y: -4, scale: 1.03 }}
                    style={{
                        background: "rgba(0,255,178,0.04)",
                        border: "1px solid rgba(0,255,178,0.12)",
                        borderRadius: 16,
                        padding: "24px 16px",
                        textAlign: "center",
                        cursor: "default",
                        transition: "all 0.3s",
                    }}
                    >
                    <div
                        style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                        fontWeight: 900,
                        color: "#00FFB2",
                        lineHeight: 1,
                        }}
                    >
                        {stat.count}{stat.suffix}
                    </div>
                    <div
                        style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.45)",
                        marginTop: 6,
                        fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        {stat.label}
                    </div>
                    </motion.div>
                ))}
                </motion.div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default About;