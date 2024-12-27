import IconLink from "../Icons/IconLink"
import Tag from "../Tag/Tag";
import ImagesPopUp from "../ImagesPopUp/ImagesPopUp"
import { useEffect, useState } from "react";

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



