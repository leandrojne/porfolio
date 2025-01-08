
import ItemProyecto from "../ItemProyecto/ItemProyecto";
import TitleSection from "../TitleSection/TitleSection";
import { useContext } from "react";
import { InfoDataContext } from "../../context/FetchingData";

export default function ProyectosContainer() {
    const context = useContext(InfoDataContext);

    if (!context) {
        return <p>Error: No se pudo cargar el contexto.</p>;
    }
    const { proyectosData, language } = context;

    return (
        <section id="proyectos" className="relative border-b mb-5 border-main-color">
            {
                (language === 'ES') ? <TitleSection title='Proyectos' /> : <TitleSection title='Projects' />
            }
            {proyectosData ? (
                proyectosData.slice().reverse().map((item) => (
                    <ItemProyecto key={item.id} title_proyec={item.title_proyec} description_proyec={item.description_proyec} date_proyec={item.date_proyec} images_proyec={item.images_proyec} tags_proyec={item.tags_proyec} link_proyec={item.link_proyec} />
                ))
            ) : (
                <div className="loader mb-7 -mt-6"></div>
            )}
        </section>
    )
}


