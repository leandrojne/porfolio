interface linkProps {
    linkProp: string,
    nameProp: string,
    classActive: string,
}

export default function LinkToScroll({ linkProp, nameProp, classActive }: linkProps) {
    const handleClickScroll = () => {
        const element = document.getElementById(linkProp);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <a className={` ${classActive} mx-1 sm:mx-2 text-white hover:text-secondary-color [&.active]:text-secondary-color`} href={`#${linkProp}`} onClick={handleClickScroll}>
                <span className="capitalize text-xs sm:text-sm"
                    data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    {nameProp}
                </span>
            </a>
        </>
    );
}
