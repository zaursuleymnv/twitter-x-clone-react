import { useState, useRef } from "react"
import {useClickAway} from 'react-use'


export default function Search() {

    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState(false)

    const ref = useRef();
        useClickAway(ref, () => {
            setFocus(false);
  });

    return (
        <div
            ref={ref} 
            className="h-[53px] min-h-[32px] mb-3 flex items-center sticky top-0 bg-[color:var(--background-primary)] z-10">
            <label className="w-full h-[43px] relative rounded-full bg-[color:var(--background-third)] border border-transparent group focus-within:bg-[color:var(--background-primary)] focus-within:border-[#1d9bf0]">
            <div className="w-[56px] h-full absolute top-0 left-0 flex items-center justify-center pointer-events-none">
                <svg 
                    viewBox="0 0 24 24" 
                    height={18.75} 
                    className="min-w-[32px] text-[color:var(--color-base-secondary)] group-focus-within:text-[color:var(--color-primary)]"

                    >
                    <path
                        fill="currentColor" 
                        d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
                </svg>
            </div>
            <input
                type="text" 
                className="w-full h-full pl-[56px] text-[15px] outline-none bg-transparent"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setFocus(true)}
                placeholder="Search"
            />
            {(query && focus) && (
                <button
                    type="button" 
                    className="absolute top-1/2 right-3 -translate-y-1/2 w-[22px] min-w-[22px] h-[22px] rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-black"
                    onClick={() => setQuery('')}
                    >
                    <svg 
                        viewBox="0 0 15 15" 
                        width={10} 
                        height={10}
                    >
                        <path
                            fill="currentColor" 
                            d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"/>
                    </svg>
                </button>
            )}
            </label>
            {focus && (
                <div className="absolute top-full -left-px -translate-y-1 w-[350px] max-h-[calc(80vh-53px)] min-h-[100px] bg-[color:var(--background-primary)] shadow-box rounded-lg text-center">
                    <p className="text-[color:var(--color-base-secondary)] p-3 pt-5 leading-5">
                        Try searching for people, lists, or keywords
                    </p>
                </div>
            )}
        </div>
    )
}