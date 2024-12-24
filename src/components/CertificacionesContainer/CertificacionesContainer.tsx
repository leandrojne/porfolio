import ItemCertif from "../ItemCertif/ItemCertif";
import TitleSection from "../TitleSection/TitleSection";
import { useContext } from "react";
import { InfoDataContext } from "../../context/FetchingData";

export default function CertificacionesContainer() {
    const context = useContext(InfoDataContext);

    if (!context) {
        return <p>Error: No se pudo cargar el contexto.</p>;
    }
    const { certificacionesData } = context;

    return (
        <section id="certificaciones" className="relative border-b mb-5 border-main-color">
            <TitleSection title='Certificaciones' />
            {certificacionesData ? (
                certificacionesData.slice().reverse().map((item) => (
                    <ItemCertif key={item.id} date={item.date_cert} title={item.title_cert} description={item.description_cert} place={item.city_cert} link={item.link_cert} />
                ))
            ) : (
                <div className="loader mb-7 -mt-6"></div>
            )}
        </section>
    )
}
