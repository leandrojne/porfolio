import IconLink from "../Icons/IconLink";

interface propsInfo {
    date: string,
    title: string,
    description: string,
    place: string,
    link?: string
}

export default function ItemCertif({ title, description, place, link, date }: propsInfo) {

    return (
        <div className="relative item-experiencia before:w-[16px] before:h-[16px] before:bg-main-color before:rounded-full before:flex before:absolute before:left-[-50px] before:top-2 before:border-secondary-color before:border-[3px] mb-14">
            <span className="block mb-2 lg:absolute lg:right-[calc(100%+59px)] lg:top-[2px] text-xl font-semibold">
                {date}
            </span>
            <div className="content">
                <h2 className="text-2xl md:text-3xl mb-2 leading-none font-semibold text-secondary-color">{title}</h2>
                <p className="text-[16px] md:text-[18px]">{description}</p>
                <p className="text-xs text-gray-600 mb-2">{place}</p>
            </div>
            <div className="links flex justify-start items-center flex-wrap">
                {
                    link && <IconLink link={link} />
                }
            </div>
        </div>
    )
}


