interface InfoTitle {
    title: string
}

export default function TitleSection({ title }: InfoTitle) {
    const titleVar = title + '_id'
    return (
        <h2 id={titleVar.toLowerCase()} className="item-experiencia pt-10 before:w-[16px] before:h-[16px] before:bg-main-color before:rounded-full before:flex before:absolute before:left-[-50px] before:top-[52px] md:before:top-[57px] before:border-white before:border-[3px] mb-14 text-4xl md:text-5xl font-bold">
            {title}
        </h2>
    )
}
