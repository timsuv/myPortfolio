import { useState } from "react";

export const MapModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>


            <button onClick={toggleModal} type="button" className=" hover:text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-basic-modal" data-hs-overlay="#hs-basic-modal">
                See map
            </button>

       

            {/* Modal */}
            {isOpen && (
                <div
                    id="hs-focus-management-modal"
                    className="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto flex justify-center items-center bg-black bg-opacity-50"
                    role="dialog"
                    tabIndex={-1}
                    aria-labelledby="hs-focus-management-modal-label"
                >
                    <div className="transition-all ease-out sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                                <h3
                                    id="hs-focus-management-modal-label"
                                    className="font-bold text-gray-800 dark:text-white"
                                >
                                    My location
                                </h3>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className=""
                                    aria-label="Close"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 6 6 18" />
                                        <path d="M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4 overflow-y-auto">
                            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130351.19556601232!2d17.921346341398028!3d59.30394232783645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1ssv!2sse!4v1736538032860!5m2!1ssv!2sse" width="400" height="300" loading="lazy"></iframe>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>

    )
}
