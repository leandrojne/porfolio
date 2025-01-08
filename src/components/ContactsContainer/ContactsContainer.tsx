import IconEmail from "../Icons/IconEmail";
import IconLinkedin from "../Icons/IconLinkedin";
import TitleSection from "../TitleSection/TitleSection";
import { useContext } from "react";
import { InfoDataContext } from "../../context/FetchingData";

export default function ContactsContainer() {
    const context = useContext(InfoDataContext);

    if (!context) {
        return <p>Error: No se pudo cargar el contexto.</p>;
    }
    const { language } = context;

    return (
        <section id="contactos" className="relative mb-3">
            {
                (language === 'ES') ?
                    <>
                        <TitleSection title='Contactos' />
                        <h3 className="text-2xl mt-[-30px] mb-4 leading-none font-semibold text-secondary-color">Seguime por LinkedIn o enviame un Email</h3>
                        <div className="flex items-start justify-start">
                            <IconLinkedin link="https://www.linkedin.com/in/leandrojne/" />
                            <IconEmail link="mailto:leandrojne@gmail.com" />
                        </div>
                    </>
                    :
                    <>
                        <TitleSection title='Contacts' />
                        <h3 className="text-2xl mt-[-30px] mb-4 leading-none font-semibold text-secondary-color">Fallow me on LinkedIn or send me an Email</h3>
                        <div className="flex items-start justify-start">
                            <IconLinkedin link="https://www.linkedin.com/in/leandrojne/" />
                            <IconEmail link="mailto:leandrojne@gmail.com" />
                        </div>
                    </>
            }
        </section>
    )
}
