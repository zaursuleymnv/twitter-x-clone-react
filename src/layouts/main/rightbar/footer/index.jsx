import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-2">
            <Link to="/" className="text-[color:var(--color-base-secondary)] text-[13px] leading-4 hover:underline">Terms of Service</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] text-[13px] leading-4 hover:underline">Privacy Policy</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] text-[13px] leading-4 hover:underline">Cookie Policy</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] text-[13px] leading-4 hover:underline">Accessibility</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] text-[13px] leading-4 hover:underline">Ads info</Link>
            <Popover className='relative inline-flex leading-4'>
                    <Popover.Button
                        className="text-[color:var(--color-base-secondary)] text-[13px] leading-4 hover:underline outline-none inline-flex items-center"
                    >
                        More
                        <svg 
                            viewBox="0 0 24 24"
                            className="h-[1em] px-0.5"
                            >
                            <path
                                fill="currentColor" 
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                        </svg>

                    </Popover.Button>
                    <Popover.Panel className='absolute bottom-0 right-0 w-[150px] max-w-[384px] grid bg-[color:var(--background-primary)] shadow-box rounded-xl overflow-hidden'>
                        <Link to='/' className="py-3 px-4 text-white text-[15px] font-bold leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
                            About
                        </Link>
                        <Link to='/' className="py-3 px-4 text-white text-[15px] font-bold leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
                            Download the X app
                        </Link>
                        <Link to='/' className="py-3 px-4 text-white text-[15px] font-bold leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
                            Status
                        </Link>
                        <Link to='/' className="py-3 px-4 text-white text-[15px] font-bold leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
                            X for Business
                        </Link>
                        <Link to='/' className="py-3 px-4 text-white text-[15px] font-bold leading-5 hover:bg-[color:var(--background-secondary)] transition-colors">
                            Developers
                        </Link>
                    </Popover.Panel>
            </Popover>
            <p className="text-[color:var(--color-base-secondary)] text-[13px] leading-4">                    
                &copy; 2023 Zaur Suleymanov
            </p>
        </footer>
    )
}