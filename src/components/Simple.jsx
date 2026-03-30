import React from 'react'
import Button from './common/Button'

const Simple = () => {
    return (
        <div>
            <div className="w-full z-10 max-w-137.5">
                <h2 className="font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[130%] bg-gradient-to-r from-black to-[#494949] bg-clip-text text-transparent">
                    It's so simple, even a child can do it.
                </h2>
                <div className="mt-6 sm:mt-6.75">
                    <div className="flex items-center gap-3 sm:gap-4.25 p-3 sm:p-4">
                        <div className="py-1.5 sm:py-1.75 flex items-center px-3 sm:px-[10.08px] bg-[linear-gradient(92.96deg,#ED1C25_-1.33%,#ED1C25_106.26%)] rounded-[41px] text-[10px] font-semibold leading-[100%] text-white">
                            1
                        </div>
                        <p className="font-medium text-base sm:text-xl leading-[140%] text-black">
                            Peel the protective paper of the adhesive
                        </p>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4.25 p-3 sm:p-4">
                        <div className="py-1.5 sm:py-1.75 flex items-center px-3 sm:px-[9.5px] bg-[linear-gradient(92.96deg,#ED1C25_-1.33%,#ED1C25_106.26%)] rounded-[41px] text-[10px] font-semibold leading-[100%] text-white">
                            2
                        </div>
                        <p className="font-medium text-base sm:text-xl leading-[140%] text-black">
                            Place the frames against the wall and press firmly.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4.25 p-3 sm:p-4">
                        <div className="py-1.5 sm:py-1.75 flex items-center px-3 sm:px-2.25 bg-[linear-gradient(92.96deg,#ED1C25_-1.33%,#ED1C25_106.26%)] rounded-[41px] text-[10px] font-semibold leading-[100%] text-white">
                            3
                        </div>
                        <p className="font-medium text-base sm:text-xl leading-[140%] text-black">
                            Enjoy! (and feel free to rearrange).
                        </p>
                    </div>
                </div>
                <Button
                    className="mt-5 sm:mt-6 flex items-center py-2 sm:py-3 px-5 sm:px-[24.5px] font-semibold text-sm sm:text-lg lg:text-xl text-white rounded-[82px] bg-[#ED1C25] shadow-[0px_12px_43.8px_-10px_#ED1C25]"
                    text="Square Your Photos"
                />
            </div>
        </div>
    )
}

export default Simple