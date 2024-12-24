import { useContext } from "react";
import ItemExperiencia from "../ItemExperiencia/ItemExperiencia";
import TitleSection from "../TitleSection/TitleSection";
import { InfoDataContext } from "../../context/FetchingData";


const ExperienciaContainer: React.FC = () => {
    const context = useContext(InfoDataContext);

    if (!context) {
        return <p>Error: No se pudo cargar el contexto.</p>;
    }
    const { experienciaData } = context;

    return (
        <section id="experiencia" className="relative border-b mb-5 border-main-color">
            <TitleSection title='Experiencia' />
            {experienciaData ? (
                experienciaData.slice().reverse().map((item) => (
                    <ItemExperiencia key={item.id} title={item.title_exp} description={item.description_exp} place={item.city_exp} date={item.dates_exp} />
                ))
            ) : (
                <div className="loader mb-7 -mt-6"></div>
            )}
        </section>
    );
};

export default ExperienciaContainer;

