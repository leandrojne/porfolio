import { useContext } from "react";
import { InfoDataContext } from "../../context/FetchingData";
import FlagArg from "../Icons/svg/FlagArgSGV";
import FlagUsa from "../Icons/svg/FlagUSASGV copy";

export default function LanguageButton() {
    const context = useContext(InfoDataContext)

    if (!context) {
        return <p>Error: No se pudo cargar el contexto.</p>;
    }
    const { language, setLanguage, setLoadingData } = context;

    function setLaguajeFunction(Info: string) {
        setLoadingData(true)
        setLanguage(Info)
    }

    const btnLanguage = (idio: string) => {
        return <>
            <button className=' bg-dark-color m-0 p-0 h-10 w-[90px] flex justify-center items-center content-center leading-none rounded-b-lg' onClick={() => { setLaguajeFunction(idio) }}>
                <span className='mr-2 text-[14px]'>
                    {
                        idio === 'EN' ? <FlagUsa /> : <FlagArg />
                    }
                </span>
                <span className='text-sm text-white'>{idio}</span>
            </button>
        </>
    }


    return (
        <div className='fixed left-0 top-24 -rotate-90 -ml-[25px] z-50'>
            {
                language === 'ES' ? btnLanguage('EN') : btnLanguage('ES')
            }
        </div>
    )
}
