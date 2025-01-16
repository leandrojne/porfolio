import { useContext, useEffect, useState } from "react"
import { InfoDataContext } from "../../context/FetchingData"
import DownloadIcon from "../Icons/svg/DownloadSVG";


export default function LinkCv() {
    const context = useContext(InfoDataContext);
    const [urlPDF, SetUrlPDF] = useState<string>('/pdf/cv_2025_e.pdf')
    if (!context) {
        return <p>Error: No se pudo cargar el contexto.</p>;
    }
    const { language } = context;

    const donwloadPdf = () => {
        if (language === 'ES') {
            SetUrlPDF('/pdf/cv_2025_es.pdf')
        } else {
            SetUrlPDF('/pdf/cv_2025_en.pdf')
        }

    }

    useEffect(() => {
        donwloadPdf()
    }, [language])

    return (
        <a className='fixed left-0 top-[190px] -rotate-90 -ml-[20px] z-50 bg-dark-color m-0 p-0 h-10 w-[80px] flex justify-center items-center content-center leading-none rounded-b-lg' href={urlPDF} target='_blank'>
            <span className='text-[24px] rotate-90'>
                <DownloadIcon />
            </span>
            <span className='text-sm text-white ml-1'>CV</span>
        </a>
    )
}
