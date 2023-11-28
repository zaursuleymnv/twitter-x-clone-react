import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function SidebarSection({title, children, more}) {
    return (
        <section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c] overflow-hidden">
            <h5 className="py-3 px-4 text-[#e7e9ea] flex items-center text-xl font-extrabold leading-6">
                {title}
            </h5>
            <div className="grid">
                {children}
            </div>
            {more && (
                <Link
                    to={more}
                    className="h-[52px] flex items-center px-4 text-[15px] text-[#1d9bf0] hover:bg-white/[0.03] transition-colors"
                >
                    Show more
                </Link>
            )}
        </section>
    )
}

// SidebarSection.propTypes = {
//     title: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
//     more: PropTypes.OneOfType([PropTypes.bool, PropTypes.string])
// }

// SidebarSection.defaultProps = {
//     more: false
// }