import React, { useEffect, useState } from "react";

interface Section {
    id: string;
    label: string;
}

const sections: Section[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
];

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 0 && rect.bottom > 0) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Navegación */}
            <nav>
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={activeSection === section.id ? "active" : ""}
                    >
                        {section.label}
                    </a>
                ))}
            </nav>

            {/* Secciones */}
            <div style={{ height: "50vh", padding: "50px" }}>
                {sections.map((section) => (
                    <div
                        key={section.id}
                        id={section.id}
                        style={{ height: "50vh", border: "1px solid #ccc" }}
                    >
                        <h2>{section.label}</h2>
                    </div>
                ))}
            </div>

            <style>{`
        nav {
          position: fixed;
          top: 0;
          background: white;
          width: 100%;
          padding: 10px;
          display: flex;
          gap: 10px;
        }
        nav a {
          text-decoration: none;
          color: black;
        }
        nav a.active {
          font-weight: bold;
          color: red;
        }
      `}</style>
        </div>
    );
};

export default App;
