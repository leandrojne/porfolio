import { useContext, useEffect, useState } from "react";
import LinkToScroll from "../LinkToScroll/LinkToScroll";
import Tag from "../Tag/Tag.tsx";
import imgLeandro from '../../assets/images/Leandro.jpg'
import LaguajeButton from "../LanguageButton/LanguageButton.tsx";
import { InfoDataContext } from "../../context/FetchingData.tsx";
import LinkCv from "../LinkCv/LinkCv.tsx";

interface Section {
    id: string;
    label: string;
    name: string;
}

const sections: Section[] = [
    { id: "experiencia", label: "Experiencia", name: "experiencia_id", },
    { id: "proyectos", label: "proyectos", name: "proyectos_id" },
    { id: "certificaciones", label: "certificaciones", name: "certificaciones_id" },
    { id: "contactos", label: "contactos", name: "contactos_id" },
];
const sectionsEN: Section[] = [
    { id: "experiencia", label: "Experience", name: "experiencia_id", },
    { id: "proyectos", label: "projects", name: "proyectos_id" },
    { id: "certificaciones", label: "certifications", name: "certificaciones_id" },
    { id: "contactos", label: "contacts", name: "contactos_id" },
];

interface InfoLean {
    title: string,
    description: string | JSX.Element,
    description2?: string | JSX.Element,
    description3?: string | JSX.Element,
    description4?: string | JSX.Element,
    tag: string[],
    imagenes?: string
}

const infoLeandro: InfoLean = {
    title: 'Leandro J. Nuñez E.',
    description: (<> <span className='text-secondary-color'>+ de 15 años</span> de experiencia en <span className='text-secondary-color'>Diseño Gráfico</span>.</>),
    description2: (<> <span className='text-secondary-color'>+ de 6 años</span> como desarrollador <span className='text-secondary-color'>Magento Frontend</span>.</>),
    description3: (<> <span className='text-secondary-color'>Junior</span> como desarrollador <span className='text-secondary-color'>ReactJs</span> & <span className='text-secondary-color'>JavaScript</span>.</>),
    description4: (<> Proactivo, responsable y creativo. Altamente capacitado para presentar soluciones inmediatas a problemas gráficos y sitios web, excelente relación profesional y personal.</>),
    tag: ['adobe', 'magento', 'html', 'css', 'react', 'javascript', 'jquery', 'less', 'sass', 'bootstrap', 'tailwind', 'firebase', 'figma', 'git', 'typescript', 'wordpress', 'woocommerce', 'json', 'php', 'mysql', 'node', 'cpanel'],
}

const infoLeandroEN: InfoLean = {
    title: 'Leandro J. Nuñez E.',
    description: (<> <span className='text-secondary-color'>+ 15 Years</span> of experience in <span className='text-secondary-color'>Graphic Designer</span>.</>),
    description2: (<> <span className='text-secondary-color'>+ 6 Years</span> as a <span className='text-secondary-color'>Magento Frontend</span> Developer.</>),
    description3: (<> <span className='text-secondary-color'>Junior</span> as a <span className='text-secondary-color'>ReactJs</span> & <span className='text-secondary-color'>JavaScript</span> Developer.</>),
    description4: (<> Proactive, responsible and creative.Highly trained to present immediate solutions to graphic and website problems, excellent professional and personal relationship..</>),
    tag: ['adobe', 'magento', 'html', 'css', 'react', 'javascript', 'jquery', 'less', 'sass', 'bootstrap', 'tailwind', 'firebase', 'figma', 'git', 'typescript', 'wordpress', 'woocommerce', 'json', 'php', 'mysql', 'node', 'cpanel'],
}


export default function MainSidebar() {

    const context = useContext(InfoDataContext)

    if (!context) {
        return <p>Error: No se pudo cargar el contexto.</p>;
    }
    const { language } = context;


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
        <section className="py-16 lg:py-0 l-0 t-0 box-border flex flex-wrap content-center items-center relative justify-center text-center z-2 md:max-xl:max-w-[100%] xl:max-w-[616px] 2xl:max-w-[744px] lg:fixed lg:w-6/12 lg:h-svh lg:z-0 lg:right-[48%] min-[1250px]:right-[52%]">
            <nav className="menu flex content-center justify-center items-center h-[40px] fixed z-[100] bg-dark-color px-4 lg:px-7 rounded-full top-3 lg:absolute lg:m-0">
                {
                    language === 'ES' ?
                        sections.map((section) => (
                            <LinkToScroll classActive={activeSection === section.id ? "active" : ""} key={section.id} linkProp={section.id} nameProp={section.label} />
                        ))
                        :
                        sectionsEN.map((section) => (
                            <LinkToScroll classActive={activeSection === section.id ? "active" : ""} key={section.id} linkProp={section.id} nameProp={section.label} />
                        ))

                }
            </nav>
            <div className="md:max-w-[80%] min-[1280px]:max-w-[75%] flex content-center justify-center items-center flex-wrap">
                <LinkCv />
                <div className="img flex content-center items-center justify-center rounded-full h-[220px] w-[220px] xl:h-[300px] xl:w-[300px] bg-dark-color] border-dark-color border-[6px] overflow-hidden">
                    <img src={imgLeandro} alt="Porfolio ~ Leandro Nuñez" width='290' height='290' />
                </div>
                <div className="pt-5">
                    <h1 className="mb-4 text-3xl font-semibold text-white md:text-4xl xl:text-5xl ">{infoLeandro.title}</h1>
                    <div className='*:text-pretty *:font-medium *:text-white *:text-sm *:eading-6 *:md:text-[16px] *:xl:text-[18px] *:md:leading-6 *:xl:leading-7 *:mb-1 mb-4'>
                        <p>
                            {
                                language === 'ES' ?
                                    infoLeandro.description
                                    :
                                    infoLeandroEN.description
                            }
                        </p>
                        <p>
                            {
                                language === 'ES' ?
                                    infoLeandro.description2
                                    :
                                    infoLeandroEN.description2
                            }
                        </p>
                        <p>
                            {
                                language === 'ES' ?
                                    infoLeandro.description3
                                    :
                                    infoLeandroEN.description3
                            }
                        </p>
                        <p>
                            {
                                language === 'ES' ?
                                    infoLeandro.description4
                                    :
                                    infoLeandroEN.description4
                            }
                        </p>
                    </div>
                    {

                    }

                </div>
                <div className='flex flex-wrap items-center justify-center links'>
                    {
                        infoLeandro.tag.map((item, idx) => {
                            return <Tag text={item} key={idx} bgColor={'bg-dark-color'} />
                        })
                    }
                </div>
            </div>
            <LaguajeButton />
        </section>
    )
}
