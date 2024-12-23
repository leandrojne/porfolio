import CertificacionesContainer from "../CertificacionesContainer/CertificacionesContainer";
import ContactsContainer from "../ContactsContainer/ContactsContainer";
import ExperienciaContainer from "../ExperienciaContainer/ExperienciaContainer";
import ProyectosContainer from "../ProyectosContainer/ProyectosContainer";

export default function ContentSidebar() {
    return (
        <section
            className="w-[calc(100%-20px)] box-border bg-dark-color flex ml-auto pl-5 pr-5 pb-12 text-white before:flex before:w-1 before:h-[calc(100%+3rem)] lg:before:h-[calc(100%+6rem)] before:ml-[-40px] before:mr-[40px] before:mt-[0] lg:before:mt-[-3rem] before:bg-[#1a1d22] z-10 lg:w-5/12 xl:w-6/12">
            <div className="w-[calc(100%-4px)]">
                <ExperienciaContainer />
                <ProyectosContainer />
                <CertificacionesContainer />
                <ContactsContainer />
                <small className='text-gray-700 mt-4 mb-[-20px] text-xs'>
                    Copyright © 2024 ~ Leandro Nuñez ~
                </small>
            </div>
        </section>
    )
}

