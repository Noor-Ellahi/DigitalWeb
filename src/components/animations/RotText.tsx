

import Link from 'next/link';
import React from 'react';

type RotateTextProps = {
    text: string;
    // 1. Add a prop to receive sub-items for this specific item
    subItems?: string[];
    sub2Items?: string[];
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
}

const RotateText = ({ text, subItems = [], sub2Items = [], onHoverEnd, onHoverStart }: RotateTextProps) => {
    return (
        // The main container is a block layout so the dropdown can sit beneath it
        <li className="group relative list-none"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
        >
            {/* Trigger area: Contains the bouncy text */}
            <div className="inline-flex cursor-pointer overflow-hidden pb-0">
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        className="relative inline-block overflow-hidden"
                        style={{
                            '--delay': `${index * 20}ms`,
                        } as React.CSSProperties}
                    >
                        {/* Normal Letter */}
                        <span
                            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-full"
                            style={{
                                transitionDelay: 'var(--delay)',
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>

                        {/* Hover Letter */}
                        <span
                            className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0"
                            style={{
                                transitionDelay: 'var(--delay)',
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    </span>
                ))}
            </div>



            {subItems.length > 0 && (
                <div className={`${text === "Programs" ? "flex" : ""} capitalize
                pointer-events-none opacity-0 translate-y-2
                group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0
                pointer-events-none  absolute left-[-180]  z-20 pt-3 min-w-[160px]  transition-all duration-200 `}>
                    <ul className=" flex flex-col gap-1.5 pt-10 min-w-[160px]  transition-all duration-200 
                               pointer-events-none opacity-0 translate-y-2
                               group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
                        {subItems.map((item, idx) => (
                            <Link href={`/services/${item.toLowerCase()}`} key={idx}>
                                <li

                                    className="cursor-pointer text-[14px] font-medium tracking-wide text-zinc-400 hover:text-zinc-100 transition-all duration-300 ease-out transform hover:translate-x-1"
                                >
                                    {item}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <ul className=" flex flex-col gap-1.5  pt-10 min-w-[160px]  transition-all duration-200 
                               pointer-events-none opacity-0 translate-y-2
                               group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
                        {sub2Items.map((item, idx) => (
                            <li
                                key={idx}
                                className="cursor-pointer text-[14px] font-medium tracking-wide text-zinc-400 hover:text-zinc-100 transition-all duration-300 ease-out transform hover:translate-x-1"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
                // <ul className="absolute left-0 top-full z-20 pt-10 min-w-[160px] transition-all duration-200
                //                pointer-events-none opacity-0 translate-y-2
                //                group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
                //     {subItems.map((item, idx) => (
                //         <li
                //             key={idx}
                //             className="cursor-pointer pb-1.5 transition-all text-[16px] text-[#fff]/60 hover:text-[#fff]  hover:text=[#fff] "
                //         >
                //             {item}
                //         </li>
                //     ))}
                // </ul>

            )}

        </li>
    );
};

export default RotateText;

{/* <ul className="absolute left-0 top-full z-20 pt-10 min-w-[160px] hidden  transition-all duration-200
                               pointer-events-none opacity-0 translate-y-2
                               group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
    {subItems.map((item, idx) => (
        <li
            key={idx}
            className="cursor-pointer pb-1.5 transition-all text-[16px] text-[#fff]/60 hover:text-[#fff]  hover:text=[#fff] "
        >
            {item}
        </li>
    ))}
</ul> */}

