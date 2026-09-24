


// import React from 'react';

// type RotateTextProps = {
//     text: string;
//     subItems?: string[];
// }

// const RotateText = ({ text , subItems = [] }: RotateTextProps) => {
//     return (
//         <li className="group relative inline-flex cursor-pointer list-none overflow-hidden">
//             {text.split("").map((char, index) => (
//                 <span
//                     key={index}
//                     className="relative inline-block overflow-hidden"
//                     style={{
//                         '--delay': `${index * 20}ms`,
//                     } as React.CSSProperties}
//                 >
//                     <span
//                         className="inline-block transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-full"
//                         style={{
//                             transitionDelay: 'var(--delay)',
//                         }}
//                     >
//                         {char === " " ? "\u00A0" : char}
//                     </span>

//                     {/* Hover Letter: Sits directly underneath, moves into view on hover, drops out the bottom on leave */}
//                     <span
//                         className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0"
//                         style={{
//                             transitionDelay: 'var(--delay)',
//                         }}
//                     >
//                         {char === " " ? "\u00A0" : char}
//                     </span>
//                 </span>
//             ))}
//         </li>
//     );
// };

// export default RotateText;



import React from 'react';

type RotateTextProps = {
    text: string;
    // 1. Add a prop to receive sub-items for this specific item
    subItems?: string[];
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
}

const RotateText = ({ text, subItems = [], onHoverEnd, onHoverStart }: RotateTextProps) => {
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
                <ul className="absolute left-0 top-full z-20 pt-10 min-w-[160px]  transition-all duration-200 
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
                </ul>
            )}

        </li>
    );
};

export default RotateText;



// import React from 'react';

// type RotateTextProps = {
//     text: string;
//     onHoverStart?: () => void; // Tell parent hover began
//     onHoverEnd?: () => void;   // Tell parent hover ended
// }

// const RotateText = ({ text, onHoverStart, onHoverEnd }: RotateTextProps) => {
//     return (
//         <li
//             className="group relative inline-flex cursor-pointer list-none overflow-hidden pb-1"
//             onMouseEnter={onHoverStart}
//             onMouseLeave={onHoverEnd}
//         >
//             {text.split("").map((char, index) => (
//                 <span
//                     key={index}
//                     className="relative inline-block overflow-hidden"
//                     style={{
//                         '--delay': `${index * 20}ms`,
//                     } as React.CSSProperties}
//                 >
//                     {/* Normal Letter */}
//                     <span
//                         className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-full"
//                         style={{
//                             transitionDelay: 'var(--delay)',
//                         }}
//                     >
//                         {char === " " ? "\u00A0" : char}
//                     </span>

//                     {/* Hover Letter */}
//                     <span
//                         className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0"
//                         style={{
//                             transitionDelay: 'var(--delay)',
//                         }}
//                     >
//                         {char === " " ? "\u00A0" : char}
//                     </span>
//                 </span>
//             ))}
//         </li>
//     );
// };

// export default RotateText;


