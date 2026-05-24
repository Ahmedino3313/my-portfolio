import { motion } from "framer-motion";
import { TIMELINE } from "../data/index";
import { FiCode, FiHome, FiTarget, FiZap, FiStar } from "react-icons/fi";
import { SiReact } from "react-icons/si";
import { GiPlantSeed } from "react-icons/gi";
import { FaRocket, FaUniversity } from "react-icons/fa";

const ICONS = {
    seed:   GiPlantSeed,
    zap:    FiZap,
    react:  SiReact,
    star:   FiStar,
    home:   FiHome,
    rocket: FaRocket,
    target: FiTarget,
    code:   FiCode,
    bank:   FaUniversity,
};

const ICON_COLORS = {
    seed:   "#4ade80",
    zap:    "#facc15",
    react:  "#61DAFB",
    star:   "#00ffb2",
    home:   "#a78bfa",
    rocket: "#f97316",
    target: "#00ffb2",
    code:   "#00c9ff",
    bank:   "#2563eb",
};

function Journey() {
    return (
        <section
            id="journey"
            style={{
                padding: "120px clamp(1.5rem, 5vw, 4rem)",
                background: "rgba(0, 255, 178, 0.015)",
            }}
        >
            <div style={{ maxWidth: 800, margin: "0 auto" }}>

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
                    — Journey
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
                    My{" "}
                    <span
                        style={{
                        background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        }}
                    >
                        Learning Path
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
                        marginBottom: 72,
                        maxWidth: 480,
                    }}
                >
                    Every milestone, every project, every late night that shaped me into the developer I am today.
                </motion.p>

                {/* Timeline */}
                <div style={{ position: "relative" }}>

                    {/* Vertical line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "absolute",
                            left: 26,
                            top: 0,
                            bottom: 0,
                            width: 2,
                            background: "linear-gradient(to bottom, #00ffb2, rgba(0,255,178,0.1))",
                            borderRadius: 2,
                            transformOrigin: "top",
                        }}
                    />

                    {TIMELINE.map((item, i) => {
                        const Icon = ICONS[item.icon] || FiCode;
                        const iconColor = ICON_COLORS[item.icon] || "#00ffb2";

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                style={{
                                    display: "flex",
                                    gap: 32,
                                    marginBottom: 44,
                                    position: "relative",
                                }}
                            >
                                {/* Icon dot */}
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    style={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: "50%",
                                        background: `${iconColor}12`,
                                        border: `2px solid ${iconColor}40`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        position: "relative",
                                        zIndex: 1,
                                        cursor: "default",
                                    }}
                                >
                                    <Icon size={20} style={{ color: iconColor }} />
                                </motion.div>

                                {/* Content card */}
                                <motion.div
                                    whileHover={{ x: 6 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        borderRadius: 16,
                                        padding: "20px 24px",
                                        flex: 1,
                                        transition: "border-color 0.3s",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.borderColor = "rgba(0,255,178,0.2)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
                                    }
                                >
                                    {/* Title + Year row */}
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: 8,
                                            flexWrap: "wrap",
                                            gap: 8,
                                        }}
                                    >
                                        <h3
                                            style={{
                                                fontFamily: "'Syne', sans-serif",
                                                fontWeight: 800,
                                                color: "#fff",
                                                fontSize: 17,
                                            }}
                                        >
                                            {item.title}
                                        </h3>

                                        <span
                                            style={{
                                                background: "rgba(0,255,178,0.08)",
                                                border: "1px solid rgba(0,255,178,0.2)",
                                                borderRadius: 6,
                                                padding: "3px 12px",
                                                fontSize: 12,
                                                color: "#00ffb2",
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {item.year}
                                        </span>
                                    </div>

                                    <p
                                        style={{
                                        color: "rgba(255,255,255,0.5)",
                                        lineHeight: 1.75,
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 15,
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Journey;