import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiGithub, SiFramer, SiGit } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { SKILLS } from "../data/index";

const SKILL_ICONS = {
    "React.js":         SiReact,          
    "JavaScript":       SiJavascript,
    "HTML5":            SiHtml5,
    "CSS3":             FaCss3Alt ,
    "Tailwind CSS":     SiTailwindcss,
    "Git & GitHub":     SiGithub,
    "Framer Motion":    SiFramer,
    "Responsive Design": FiSmartphone,
};

function SkillCard({ skill, delay }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const Icon = SKILL_ICONS[skill.name];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 255, 178, 0.06)";
                e.currentTarget.style.borderColor = `${skill.color}40`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
            }}
            style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                borderRadius: 18,
                padding: 24,
                cursor: "default",
                transition: "all 0.3s",
            }}
        >
            {/* Icon and Name Row */}
            <div 
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 20,
                }}
            >
                <div
                    style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        background: `${skill.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    {Icon && <Icon size={22} style={{ color: skill.color }} />}
                </div>

                <div style={{ flex: 1 }}>
                    <div
                        style={{ 
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 700,
                            color: "#fff",
                            fontSize: 15,
                        }}
                    >
                        {skill.name}
                    </div>
                    <div
                        style={{ 
                            fontSize: 12,
                            color: "rgba(255, 255, 255, 0.35)",
                            fontFamily: "'DM Sans', sans-serif",
                            marginTop: 2,
                        }}
                    >
                        {skill.category}
                    </div>
                </div>

                {/* Percentage */}
                <div
                    style={{ 
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        color: skill.color,
                        fontSize: 18,
                    }}
                >
                        {skill.level}%
                </div>
            </div>

            {/* Progress Bar */}
            <div
                style={{
                    height: 6,
                    background: "rgba(255, 255, 255, 0.06)",
                    borderRadius: 100,
                    overflow: "hidden",
                }}
            >
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? {width: `${skill.level}%` } : {}}
                    transition={{
                        duration: 1.2,
                        delay: delay + 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                        height: "100%",
                        borderRadius: 100,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                        boxShadow: `0 0 10px ${skill.color}60`,
                    }}
                />
            </div>
        </motion.div>
    );
}

function Skills() {
    return (
        <section
            id="skills"
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
                        color: "#00ffb2",
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: 12,
                        textTransform: "uppercase",
                    }}
                >
                    — Skills
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    style={{
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        fontWeight: 900,
                        fontFamily: "'Syne', sans-serif",
                        marginBottom: 16,
                        letterSpacing: "0.03em",
                        color: "#fff",
                    }}
                >
                    My Tech{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #00ffb2, #00c9ff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Arsenal
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1 }}
                    style={{
                        fontSize: 16,
                        color: "rgba(255, 255, 255, 0.45)",
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: 56,
                        maxWidth: 480,
                    }}
                >
                    Technologies I work with daily to build modern,
                    performant, and beautiful web experiences.
                </motion.p>

                {/* Skill Grid  */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: 20,
                    }}
                >
                    {SKILLS.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} delay={i * 0.06} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;