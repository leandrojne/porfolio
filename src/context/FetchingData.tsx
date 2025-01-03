import React, { createContext, useEffect, useState, ReactNode } from "react";

interface ExperienciaDataInfo {
    id: number;
    title_exp: string;
    description_exp: string;
    dates_exp: string;
    city_exp: string;
    link_exp?: string;
}
interface CertificacionesDataInfo {
    id: number;
    title_cert: string;
    description_cert: string;
    date_cert: string;
    city_cert: string;
    link_cert?: string;
}
interface ProyectosDataInfo {
    id: number;
    title_proyec: string;
    description_proyec: string;
    date_proyec: string;
    images_proyec: string;
    tags_proyec: string;
    link_proyec?: string;
}

interface ExperienciaDataProps {
    experienciaData: ExperienciaDataInfo[] | null;
    certificacionesData: CertificacionesDataInfo[] | null;
    proyectosData: ProyectosDataInfo[] | null;
    loadingData: boolean;
    setLoadingData: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InfoDataContext = createContext<ExperienciaDataProps | undefined>(undefined);

interface InfoDataProviderProps {
    children: ReactNode;
}

export const InfoDataProvider: React.FC<InfoDataProviderProps> = ({ children }) => {
    const [experienciaData, setExperienciaData] = useState<ExperienciaDataInfo[] | null>(null);
    const [certificacionesData, setCertificacionesData] = useState<CertificacionesDataInfo[] | null>(null);
    const [proyectosData, setProyectosData] = useState<ProyectosDataInfo[] | null>(null);
    const [loadingData, setLoadingData] = useState(false);

    const fetchingUrl: string = 'https://porfolio.idiomavisual.com/porfolio_api/';
    const requireHead: object = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    useEffect(() => {
        fetch(`${fetchingUrl}experiencia`, requireHead)
            .then(response => response.json())
            .then((data) => {

                setExperienciaData(data)
            })
            .catch(error => {
                throw error
            })

        fetch(`${fetchingUrl}certificaciones`, requireHead)
            .then(response => response.json())
            .then((data) => {
                setCertificacionesData(data)
            })
            .catch(error => {
                throw error
            })

        fetch(`${fetchingUrl}proyectos`, requireHead)
            .then(response => response.json())
            .then((data) => {
                setProyectosData(data)
            })
            .catch(error => {
                throw error
            })

    }, []);

    return (
        <InfoDataContext.Provider value={{ experienciaData, loadingData, setLoadingData, certificacionesData, proyectosData }}>
            {children}
        </InfoDataContext.Provider>
    );
};
