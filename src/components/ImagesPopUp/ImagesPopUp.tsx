import { useState } from "react"

interface ImagePopupProps {
    thumbnailSrc: string;
    fullImageSrc: string;
    alt?: string;
}

export default function ImagesPopUp({ thumbnailSrc, fullImageSrc, alt }: ImagePopupProps) {
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => setIsOpen(true)
    const closePopup = () => setIsOpen(false);

    return (
        <>
            <div className="image-popup-container">
                {/* Miniatura */}
                <img
                    width='225'
                    height='145'
                    src={thumbnailSrc}
                    alt={alt || 'Thumbnail'}
                    className="thumbnail w-full h-auto max-w-full"
                    onClick={openPopup}
                    style={{ cursor: 'pointer' }}
                />

                {
                    isOpen &&
                    <dialog className={`flex popup-overlay fixed top-0 left-0 w-full h-full bg-dark-color bg-opacity-95 justify-center items-center z-50`} onClick={closePopup}>
                        <div className="popup-content relative p-0 max-w-[90dvw] max-h-[90dvh] flex" onClick={(e) => e.stopPropagation()}>
                            <img src={fullImageSrc} alt={alt || 'Imagen del Proyecto'} className="full-image max-w-[90dvw] max-h-[90dvh] mx-auto my-0 flex" />
                        </div>
                    </dialog>
                }
            </div >
        </>
    )
}
