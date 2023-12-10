import PropTypes from "prop-types" 

export default function StickyHeader({title, children}) {
    return (
        <header
            className="sticky top-0 z-10 border-b border-[color:var(--background-third)] bg-[color:var(--background-primary-alpha)] backdrop-blur-md"
        >
            <h3 className="px-4 h-[3.313rem] flex items-center text-xl font-bold">
                {title}
            </h3>
            {children}
        </header>
    )
}

StickyHeader.propTypes = {
    title: PropTypes.string.isRequired
}