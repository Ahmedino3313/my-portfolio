import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { PROJECTS } from "../data/index";

const CATEGORIES = ["All", "React Apps", "Landing Pages", "UI Designs", "Web Applications", "E-Commerce", "Fintech Apps"];

const GRADIENTS = {
    "from-rose-900 to-pink-800":     "linear-gradient(135deg, #ff2e63, #ff66b2)",
    "from-cyan-900 to-teal-800":     "linear-gradient(135deg, #00e5ff, #00ffb3)",
    "from-sky-900 to-blue-800":      "linear-gradient(135deg, #00b4ff, #3a86ff)",
    "from-violet-900 to-purple-800": "linear-gradient(135deg, #9d4edd, #c77dff)",
    "from-slate-800 to-gray-700":    "linear-gradient(135deg, #6c63ff, #8d99ae)",
    "from-orange-900 to-amber-800":  "linear-gradient(135deg, #ff6d00, #ffb300)",
    "from-orange-900 to-amber-700":  "linear-gradient(135deg, #ff9100, #ffd000)",
    "from-emerald-900 to-teal-800":  "linear-gradient(135deg, #00ffa3, #00d9ff)",
    "from-indigo-900 to-blue-800":   "linear-gradient(135deg, #3d5afe, #00b0ff)",
    "from-zinc-900 to-gray-800":     "linear-gradient(135deg, #7c4dff, #536dfe)",
    "from-yellow-900 to-orange-700": "linear-gradient(135deg, #ffe600, #ff6f00)",
    "from-neutral-900 to-slate-800": "linear-gradient(135deg, #ff1744, #ff9100)",
    "from-green-900 to-emerald-800": "linear-gradient(135deg, #00ff6a, #00e676)",
    "from-red-900 to-orange-800":    "linear-gradient(135deg, #ff1744, #ff5722)",
    "from-sky-900 to-indigo-800":    "linear-gradient(135deg, #6a00ff, #00d4ff)",
};

function ProjectCard({ proj, delay, onOpen}) {
    const bg = GRADIENTS[proj.gradient] || "linear-gradient(135deg, #1e293b, #374151)";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay }}
            whileHover={{ y: -8 }}
            onClick={() => onOpen(proj)}
            style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                borderRadius: 20,
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0, 255, 178, 0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)")}
        >
            {/* Thumbnail */}
            <div
                style={{
                    height: 180,
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div 
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0, 0, 0, 0.2)",
                    }}
                />

                {/* Project initial letters */}
                <div 
                    style={{
                        position: "relative",
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 900,
                        fontSize: 56,
                        color: "rgba(255, 255, 255, 0.15)",
                        letterSpacing: "0.05em",
                        userSelect: "none",
                    }}
                >
                    {proj.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                </div>

                {/* Category badge */}
                <div
                    style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        background: "rgba(0, 0, 0, 0.5)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: 8,
                        padding: "4px 12px",
                        fontSize: 12,
                        color: "rgba(255, 255, 255, 0.7)",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    {proj.category}
                </div>
            </div>

            {/* Card body */}
            <div style={{ padding: "22px 24px 26px" }}>
                <h3
                    style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        fontSize: 17,
                        color: "#fff",
                        marginBottom: 8,
                    }}
                >
                    {proj.title}
                </h3>

                <p 
                    style={{
                        fontSize: 14,
                        color: "rgba(255, 255, 255, 0.5)",
                        lineHeight: 1.7,
                        marginBottom: 16,
                        fontFamily: "'DM Sans', sans-serif"
                    }}
                >
                    {proj.desc}
                </p>

                {/* Tech tags */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        marginBottom: 20,
                    }}
                >
                    {proj.tech.map((t) => (
                        <span
                            key={t}
                            style={{
                                fontSize: 12,
                                color: "#00ffb2",
                                background: "rgba(0, 255, 178, 0.08)",
                                borderRadius: 5,
                                padding: "3px 10px",
                                fontFamily: "'DM Sans' sans-serif",
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: 16 }}>
                    <a 
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#00ffb2",
                            textDecoration: "none",
                            fontFamily: "'DM Sans', sans-serif",
                            transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        <FiExternalLink size={13} /> Live Demo
                    </a>
                    <a 
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: 13,
                            fontWeight: 600,
                            color: "rgba(255, 255, 255, 0.5)",
                            textDecoration: "none",
                            fontFamily: "'DM Sans', sans-serif",
                            transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        <FiGithub size={13} /> GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

// Modal
function ProjectModal({proj, onClose }) {
    const bg = GRADIENTS[proj.gradient] || "linear-gradient(135deg, #1e293b, #374151)";

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0, 0, 0, 0.85)",
                backdropFilter: "blur(12px)",
                zIndex: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
            }}
        >
            <motion.div
                initial={{ scale: 0.85, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 40 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "#0d0d1e",
                    border: "1px solid rgba(0, 255, 178, 0.15)",
                    borderRadius: 24,
                    maxWidth: 540,
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                {/* Modal Thumbnail */}
                <div
                    style={{
                        height: 220,
                        background: bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 900,
                            fontSize: 80,
                            color: "rgba(255, 255, 255, 0.12)",
                            letterSpacing: "-0.05em",
                            userSelect: "none"
                        }}
                    >
                        {proj.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute",
                            top: 14,
                            right: 14,
                            background: "rgba(0, 0, 0, 0.5)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: 8,
                            width: 36,
                            height: 36,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#ffF",
                        }}
                    >
                        <FiX size={16} />
                    </button>
                </div>

                {/* Modal body */}
                <div style={{ padding: 32 }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: 12,
                            gap: 12,
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                fontSize: 22,
                                fontWeight: 800,
                                color: "#fff",
                            }}
                        >
                            {proj.title}
                        </h3>
                        <span
                            style={{
                                background: "rgba(0,255, 178, 0.08)",
                                border: "1px solid rgba(0, 255, 178, 0.2)",
                                borderRadius: 6,
                                padding: "4px 12px",
                                fontSize: 12,
                                color: "#00ffb2",
                                fontFamily: "'DM Sans' sans-serif",
                                whiteSpace: "nowrap",
                                flexShrink: 0,
                            }}
                        >
                            {proj.category}
                        </span>
                    </div>

                    <p
                        style={{
                            color: "rgba(255, 255, 255, 0.6)",
                            lineHeight: 1.75,
                            fontFamily: "'DM Sans', sans-serif",
                            marginBottom: 20,
                            fontSize: 15,
                        }}
                    >
                        {proj.desc}
                    </p>

                    {/* Tech tags */}
                    <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}
                    >
                        {proj.tech.map((t) => (
                        <span
                            key={t}
                            style={{
                                background: "rgba(0, 255, 178, 0.08)",
                                border: "1px solid rgba(0, 255, 178, 0.02)",
                                color: "#00ffb2",
                                borderRadius: 6,
                                padding: "5px 12px",
                                fontFamily: "'DM Sans' sans-serif",
                                fontSize: 13,
                            }}
                        >
                            {t}
                        </span>
                    ))}
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: 12 }}>
                        <a 
                            href={proj.live}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "11px 24px",
                                background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                                color: "#080812",
                                borderRadius: 12,
                                fontWeight: 700,
                                fontSize: 14,
                                textDecoration: "none",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            <FiExternalLink size={14} /> Live Demo
                        </a>
                        <a 
                            href={proj.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "11px 24px",
                                background: "transparent",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                color: "#fff",
                                borderRadius: 12,
                                fontWeight: 700,
                                fontSize: 14,
                                textDecoration: "none",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            <FiGithub size={14} /> GitHub
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function Projects() {
    const [filter, setFilter] = useState("All");
    const [modal, setModal] = useState(null);

    const filtered =
        filter === "All"
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === filter );
    
    return (
        <section
            id="projects"
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
                        letterSpacing:"0.15em",
                        color: "#00ffb2",
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: 12,
                        textTransform: "uppercase",
                    }}
                >
                    — Projects
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    style={{
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        fontWeight: 900,
                        letterSpacing:"-0.03em",
                        color: "#fff",
                        fontFamily: "'Syne', sans-serif",
                        marginBottom: 16,
                    }}
                >
                    Things I've {" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        Built
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        fontSize: 16,
                        color: "rgba(255, 255, 255, 0.45)",
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: 40,
                        maxWidth: 480,
                    }}
                >
                    A collection of projects I've built while learning and growing as a frontend developer
                </motion.p>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 10,
                        marginBottom: 48,
                    }}
                >
                    {CATEGORIES.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "9px 22px",
                                borderRadius: 10,
                                fontWeight: 600,
                                fontSize: 14,
                                cursor: "pointer",
                                transition: "all 0.3s",
                                fontFamily: "'DM Sans', sans-serif",
                                border:
                                    filter === cat
                                    ? "none"
                                    :"1px solid rgba(255, 255, 255, 0.12)",
                                background:
                                    filter === cat 
                                    ? "linear-gradient(135deg, #00ffb2, #00c9ff)"
                                    : "transparent",
                                color: filter === cat ? "080812" : "rgba(255, 255, 255, 0.6)",
                            }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <motion.div
                    layout 
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: 24,
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((proj, i) => (
                            <ProjectCard
                                key={proj.id}
                                proj={proj}
                                delay={i * 0.07}
                                onOpen={setModal}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modal && (
                    <ProjectModal proj={modal} onClose={() => setModal(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}

export default Projects;