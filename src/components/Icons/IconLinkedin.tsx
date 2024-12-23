import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";


interface LinkProp {
    link: string,
}

export default function IconLinkedin({ link }: LinkProp) {
    return (
        <Link to={link} target="_blank" className="group text-white flex justify-center items-center text-xs pl-1 pr-4 my-2 mr-2 py-[6px] h-[28px] rounded-full bg-main-color w-max leading-none bg-hove hover:bg-secondary-color hover:text-main-color">
            <span className="text-[#0c66c2] group-hover:text-main-color ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto"><FaLinkedinIn /></span>
            LinkedIn
        </Link>
    )
}


