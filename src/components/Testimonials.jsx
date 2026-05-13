import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { TESTIMONIALS } from "../data/index";

function Testimonials () {
    return (
        <section
            id="testimonials"
            style={{
                padding: "120px clamp(1.5rem, 5vw, 4rem)",
                background: "rgba(0, 255, 178, 0.015)",
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
                        color: "#00ffb2",
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: 12,
                        textTransform: "uppercase",
                    }}
                >
                    — Testimonials
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
                    What Clients{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Say
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
                    }}
                >
                    Kind words from people I've had the pleasure of working with.
                </motion.p>

                {/* Testimonial grid */}
                <div 
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minMax(300px, 1fr))",
                        gap: 24,
                    }}
                >
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            style={{
                                background: "rgba(255, 255, 255, 0.02)",
                                border: "1px solid rgba(255, 255, 255, 0.07)",
                                borderRadius: 20,
                                padding: "28px 28px 24px",
                                cursor: "default",
                                transition: "all 0.3s",
                                position: "relative",
                                overflow: "hidden"
                            }}
                            onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(0, 255, 178, 0.2)" ;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
                                }}
                        >
                            {/* Big quote mark */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: -10,
                                    right: 20,
                                    fontSize: 120,
                                    fontFamily: "Georgia, serif",
                                    color: "rgba(0, 255, 178, 0.06)",
                                    lineHeight: 1,
                                    userSelect: "none",
                                    pointerEvents: "none",
                                }}
                            >
                                "
                            </div>

                            {/* Stars */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: 4,
                                    marginBottom: 16,
                                }}
                            >
                                {Array.from({ length: t.stars }).map((_, j) => (
                                    <FiStar
                                        key={j}
                                        size={14}
                                        style={{ color: "#ffb800", fill: "#ffb800" }}
                                    />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p
                                style={{
                                    color: "rgba(255, 255, 255, 0.65)",
                                    lineHeight: 1.8,
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 15,
                                    marginBottom: 24,
                                    fontStyle: "italic",
                                    position: "relative",
                                    textAlign: "justify"
                                }}
                            >
                                "{t.text}"
                            </p>

                            {/* Divider */}
                            <div 
                                style={{
                                    height: 1,
                                    background: "rgba(255, 255, 255, 0.06)",
                                    marginBottom: 20,
                                }}
                            />

                            {/* Author */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                }}
                            >
                                {/* Avatar */}
                                <div
                                    style={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontFamily: "'Syne', sans-serif",
                                        fontWeight: 900,
                                        fontSize: 16,
                                        color: "#080812",
                                        flexShrink: 0,
                                    }}
                                >
                                    {t.name[0]}
                                </div>
                                <div>
                                    <div
                                        style={{
                                                fontFamily: "'Syne', sans-serif",
                                                fontWeight: 700,
                                                color: "#fff",
                                                fontSize: 14,
                                            }}
                                        >
                                            {t.name}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            color: "rgba(255, 255, 255, 0.4)",
                                            fontSize: 12,
                                            marginTop: 2,
                                        }}
                                    >
                                        {t.role}
                                    </div>
                                </div>
                        </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;