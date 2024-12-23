
import IconLink from "../Icons/IconLink";

interface stringProps {
    title: string,
    description: string,
    place: string,
    date: string,
    link?: string,
}

export default function ItemExperiencia({ title, description, place, date, link }: stringProps) {
    return (
        <div className="relative item-experiencia before:w-[16px] before:h-[16px] before:bg-main-color before:rounded-full before:flex before:absolute before:left-[-50px] before:top-[0.2rem] md:before:top-2 before:border-secondary-color before:border-[3px] mb-14">
            <div className="content">
                <h2 className="text-2xl md:text-3xl mb-2 leading-none font-semibold text-secondary-color">{title}</h2>
                <p className="text-[16px] md:text-[18px]">{description}</p>
                <p className="text-sm text-secondary-color mb-1">{date}</p>
                <p className="text-xs text-gray-600 mb-2">{place}</p>
                {
                    link && <IconLink link={link} />
                }
            </div>

        </div>
    )
}
