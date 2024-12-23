import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";


interface LinkProp {
    link: string,
}

export default function IconEmail({ link }: LinkProp) {
    return (
        <Link to={link} className="group text-white flex justify-center items-center text-xs pl-1 pr-4 my-2 mr-2 py-[6px] h-[28px] rounded-full bg-main-color w-max leading-none bg-hove hover:bg-secondary-color hover:text-main-color">
            <span className="text-white group-hover:text-main-color ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto"><HiOutlineMail /></span>
            Email
        </Link>
    )
}
