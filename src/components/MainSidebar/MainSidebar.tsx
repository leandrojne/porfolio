import { useEffect, useState } from "react";
import LinkToScroll from "../LinkToScroll/LinkToScroll";
import Tag from "../Tag/Tag.tsx";
import imgLeandro from '../../assets/images/Leandro.jpg'

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
    description2: (<> <span className='text-secondary-color'>+ de 6 años</span> como desarrollor <span className='text-secondary-color'>Magento Frontend</span>.</>),
    description3: (<> <span className='text-secondary-color'>Junior</span> como desarrollor <span className='text-secondary-color'>ReactJs</span> & <span className='text-secondary-color'>JavaScript</span>.</>),
    description4: (<> Proactivo, responsable y creativo. Altamente capacitado para presentar soluciones inmediatas a problemas gráficos y sitios web, excelente relación profesional y personal.</>),
    tag: ['adobe', 'magento', 'html', 'css', 'react', 'javascript', 'jquery', 'less', 'sass', 'bootstrap', 'firebase', 'figma', 'git', 'typescript', 'wordpress', 'tailwind', 'json', 'mysql', 'node', 'cpanel'],
}


export default function MainSidebar() {

    const [activeSection, setActiveSection] = useState<string>("");
    useEffect(() => {
        const handleScroll = () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.name);
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
                {sections.map((section) => (
                    <LinkToScroll classActive={activeSection === section.id ? "active" : ""} key={section.id} linkProp={section.id} nameProp={section.id} />
                ))}
            </nav>
            <div className="md:max-w-[80%] min-[1280px]:max-w-[75%] flex content-center justify-center items-center flex-wrap">
                <div className="img flex content-center items-center justify-center rounded-full h-[220px] w-[220px] xl:h-[300px] xl:w-[300px] bg-dark-color] border-dark-color border-[6px] overflow-hidden">
                    <img src={imgLeandro} alt="Porfolio ~ Leandro Nuñez" width='290' height='290' />
                </div>
                <div className="pt-5">
                    <h1 className="text-white font-semibold text-3xl md:text-4xl xl:text-5xl mb-4 ">{infoLeandro.title}</h1>
                    <p className='text-pretty font-medium text-white text-sm leading-6 md:text-[16px] xl:text-[18px] md:leading-6 xl:leading-7 mb1'>{infoLeandro.description}</p>
                    <p className='text-pretty font-medium text-white text-sm leading-6 md:text-[16px] xl:text-[18px] md:leading-6 xl:leading-7 mb1'>{infoLeandro.description2}</p>
                    <p className='text-pretty font-medium text-white text-sm leading-6 md:text-[16px] xl:text-[18px] md:leading-6 xl:leading-7 mb1'>{infoLeandro.description3}</p>
                    <p className='text-pretty font-medium text-white text-sm leading-6 md:text-[16px] xl:text-[18px] md:leading-6 xl:leading-7 mb-4'>{infoLeandro.description4}</p>
                </div>
                <div className='links flex justify-center items-center flex-wrap'>
                    {
                        infoLeandro.tag.map((item, idx) => {
                            return <Tag text={item} key={idx} bgColor={'bg-dark-color'} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
