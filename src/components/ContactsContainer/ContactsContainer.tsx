import IconEmail from "../Icons/IconEmail";
import IconLinkedin from "../Icons/IconLinkedin";
import TitleSection from "../TitleSection/TitleSection";

export default function ContactsContainer() {
    return (
        <section id="contactos" className="relative mb-3">
            <TitleSection title='Contactos' />
            <h3 className="text-2xl mt-[-30px] mb-4 leading-none font-semibold text-secondary-color">Seguime por linkein o enviame un email</h3>
            <div className="flex items-start justify-start">
                <IconLinkedin link="https://www.linkedin.com/in/leandrojne/" />
                <IconEmail link="mailto:leandrojne@gmail.com" />
            </div>
        </section>
    )
}
