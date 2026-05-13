import { motion } from "framer-motion";
import { SERVICES } from "../data/index";
import { FiCode, FiLayout, FiZap, FiSmartphone, } from "react-icons/fi";
import { SiReact, SiFigma } from "react-icons/si";

const SERVICE_ICONS = {
    code:       FiCode,
    layout:     FiLayout,
    react:      SiReact,
    zap:        FiZap,
    phone:      FiSmartphone,
    figma:      SiFigma,
};

const SERVICE_COLORS = {
    code:   "#00ffb2",
    layout: "#00c9ff",
    react:  "#61dafb",
    zap:    "#facc15",
    phone:  "#a78bfa",
    figma:  "#f97316",
};

function Services() {
    return (
        <section
        id="services"
        style={{
            padding: "120px clamp(1.5rem, 5vw, 4rem)",
        }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto"}}>

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
                    — Services
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
                    What I{" "}
                    <span
                        style={{
                        background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        }}
                    >
                        Offer
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
                    From concept to deployment — here's how I can help bring your ideas to life.
                </motion.p>

                {/* Services Grid */}
                <div 
                    style={{ 
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 24
                    }}
                >
                    {SERVICES.map((svc, i) => {
                        const Icon = SERVICE_ICONS[svc.icon] || FiCode;
                        const color = SERVICE_COLORS[svc.icon] || "#00ffb2";

                        return (
                            <motion.div
                                key={svc.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = `${color}30`;
                                    e.currentTarget.style.background = `${color}06`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                                }}
                                style={{
                                    background: "rgba(255, 255, 255, 0.02)",
                                    border: "1px solid rgba(255, 255, 255, 0.07)",
                                    borderRadius: 20,
                                    padding: "32px 28px",
                                    cursor: "default",
                                    transition: "all 0.3s",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                                >
                                    {/* GLow top right */}
                                    <div 
                                        style={{
                                            position: "absolute",
                                            top: -40,
                                            right: -40, 
                                            width: 120,
                                            height: 120,
                                            borderRadius: "50%",
                                            background: `radial-gradient(circle, ${color}12, transparent 70%)`,
                                            pointerEvents: "none",
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: 14,
                                            background: `${color}12`,
                                            border: `1px solid ${color}25`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: 20,
                                        }}
                                    >
                                        <Icon size={40} style={{ color }} />
                                    </div>

                                    {/* Number */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 24,
                                            right: 28,
                                            fontFamily: "'Syne', sans-serif",
                                            fontWeight: 900,
                                            fontSize: 36,
                                            color: "rgba(255, 255 ,255, 0.04)",
                                            lineHeight: 1,
                                            userSelect: "none",
                                        }}
                                    >
                                        {String(i +1).padStart(2, "0")}
                                    </div>

                                    <h3
                                        style={{
                                            fontFamily: "'Syne', sans-serif",
                                            fontWeight: 800,
                                            fontSize: 17,
                                            color: "#fff",
                                            marginBottom: 10,
                                        }}
                                    >
                                        {svc.title}
                                    </h3>

                                    <p
                                        style={{
                                        color: "rgba(255, 255, 255, 0.5)",
                                        lineHeight: 1.75,
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 15,
                                        }}
                                    >
                                        {svc.desc}
                                    </p>
                                </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;