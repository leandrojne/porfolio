import { Link } from "react-router-dom";
import { BsLink } from "react-icons/bs";

interface LinkProp {
    link: string,
}

export default function IconLink({ link }: LinkProp) {
    return (
        <Link to={link} target="_blank" className="group text-secondary-color flex justify-center items-center text-xs pl-1 pr-4 my-2 mr-2 py-[6px] h-[28px] rounded-full bg-main-color w-max leading-none bg-hove hover:bg-secondary-color hover:text-main-color">
            <span className="text-secondary-color group-hover:text-main-color mx-2 text-[1.25rem] aspect-auto my-[-2px]"><BsLink /></span>
            Link
        </Link>
    )
}
