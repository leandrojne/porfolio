import IconLink from "../Icons/IconLink"
import Tag from "../Tag/Tag";
import ImagesPopUp from "../ImagesPopUp/ImagesPopUp"
import { useEffect, useState } from "react";

// const infoProjects: InfoArray[] = [
//     {
//         title: 'Porfolio',
//         date: '2024',
//         description: 'Porfolio personal desarrollado para mostrar mis habilidades de Frontend, usando tecnologia de ultimo momento.',
//         tag: ["react", "typescript", "tailwind", "json", "html"],
//         imagenes: ImageProyect6,
//         link: 'https://porfolio.idiomavisual.com',
//     },
//     {
//         title: 'Registro de Tareas',
//         date: '2024',
//         description: `Este proyecto fue realizado para pracicar el desarrollo con React Js y el fetching data, tambien lo use para aprender a crear Api's usando Node Js y Express, configurando y creando una base de datos MySql en cPanel, todo fue realizado por mi para aprender.`,
//         tag: ["react", "html", "less", "node", "mysql", "cpanel"],
//         imagenes: ImageProyect2,
//         link: 'https://tareas.idiomavisual.com',
//     },
//     {
//         title: 'Custom eCommerce',
//         date: '2024',
//         description: 'Proyecto desarrollado para practicar y aprender React js. Se usa como estructura base Bootstrap y estilos personalizados implementando Less como procesador css. Se implementa Firebase como servicio Backend para obtener la autenticacion y registro de usuarios, Base de Datos de Productos, Informacion de Pedidos y Registro de informacion del Formulario de Contacto. se implemento el servicio de reCAPTCHA de google.',
//         tag: ["html", "react", "bootstrap", "firebase", "less"],
//         link: 'https://react.idiomavisual.com/',
//         imagenes: ImageProyect1,
//     },
//     {
//         title: 'Tienda Naranja Paraguay',
//         date: '2024',
//         description: 'Este es un proyecto de la empresa Solu, donde me contrataron para realizar toda la parte del FrontEnd, guiándome segun el diseño que proporcionó el cliente en Figma, este proyecto fue realizado en Magento 2, con Less como procesador de estilos CSS.',
//         tag: ['magento', 'less', 'javascript', 'figma',],
//         imagenes: ImageProyect4,
//         link: 'https://tiendanaranja.com.py/',
//     },
//     {
//         title: 'eCommerce First Gear',
//         date: '2023',
//         description: `Proyecto de la empresa 121 eCommerce LLC, implementación de toda la parte del Front segun el mockup enviado por el cliente. Proyecto realizado en Magento 2, con Less como procesador de estilos CSS.,`,
//         tag: ['magento', 'less', 'javascript', 'figma',],
//         imagenes: ImageProyect3,
//         link: 'https://firstgearinc.com/',
//     },
//     {
//         title: 'eCommerce Flodraulic',
//         date: '2022',
//         description: `Proyecto de la empresa 121 eCommerce LLC, donde me tocó implementar el Frontend donde solicitaban respetar el "PerfectPixel" del mockup. Proyecto realizado en Magento 2, con Less como procesador de estilos CSS.`,
//         tag: ["magento", "less", "javascript", "figma"],
//         imagenes: ImageProyect3,
//         link: 'https://shop.flodraulic.com/',
//     },
//     {
//         title: 'eCommerce Pinnacle',
//         date: '2022',
//         description: `Proyecto de la empresa 121 eCommerce LLC, donde me tocó implementar parte Frontend segun mockup. Proyecto realizado en Magento 2, con Less como procesador de estilos CSS.,`,
//         tag: ['magento', 'less', 'javascript', 'figma',],
//         imagenes: ImageProyect3,
//         link: 'https://www.pinnaclepromotions.com/',
//     },
//     {
//         title: 'Rizoma Deco',
//         date: '2021',
//         description: 'Website realizado de forma Freelance, donde que toma como base un template y se ajusta sengún los requerimientos del cliente',
//         tag: ['wordpress', 'css', 'jquery',],
//         imagenes: ImageProyect5,
//         link: 'https://rizomadeco.com.ar/',
//     }
// ]



interface propsInfo {
    title_proyec: string;
    description_proyec: string;
    date_proyec: string;
    images_proyec: string;
    tags_proyec: string;
    link_proyec?: string;
}


export default function ItemProyecto({ title_proyec, description_proyec, date_proyec, images_proyec, tags_proyec, link_proyec }: propsInfo) {
    const [dataArray, setDataArray] = useState<string[]>([]);
    const parsedArray: string[] = JSON.parse(tags_proyec);
    console.log(typeof parsedArray)


    useEffect(() => {
        const fetchData = async () => {
            const apiResponse = tags_proyec
            try {

                const jsonString = apiResponse.replace(/'/g, '"');
                const parsedArray: string[] = JSON.parse(jsonString);

                setDataArray(parsedArray);
            } catch (error) {
                console.error("Error al parsear la respuesta:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <article className="relative item-experiencia before:w-[16px] before:h-[16px] before:bg-main-color before:rounded-full before:flex before:absolute before:left-[-50px] before:top-2 before:border-secondary-color before:border-[3px] mb-14">
            <span className="block mb-5 lg:absolute lg:right-[calc(100%+59px)] lg:top-[2px] text-xl font-semibold">
                {date_proyec}
            </span>
            <div className="content flex flex-wrap justify-start items-start">
                <div className="img w-full md:w-4/12 lg:w-full xl:md:w-4/12 max-w-[300px] p-1 bg-secondary-color">
                    {
                        images_proyec ?
                            <ImagesPopUp thumbnailSrc={images_proyec} fullImageSrc={images_proyec} />
                            :
                            <div className="w-full h-full">Image</div>
                    }
                </div>
                <div className="info w-full md:w-8/12 lg:w-full xl:w-8/12 md:pl-4 lg:pl-0 xl:pl-4 pt-4 md:pt-0 lg:pt-4 xl:pt-0">
                    <h2 className="text-2xl md:text-3xl mb-2 leading-none font-semibold text-secondary-color">{title_proyec}</h2>
                    <p className="text-[14px] md:text-[15px] text-pretty mb-2">{description_proyec}</p>
                    <div className="links flex justify-start items-center flex-wrap">

                        {
                            dataArray.map((item, idx) => {
                                return <Tag text={item} key={idx} />
                            })
                        }
                        {
                            link_proyec && <IconLink link={link_proyec} />
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}



