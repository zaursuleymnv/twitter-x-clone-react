import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function SidebarSection({title, children, more}) {
    return (
        <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
            <h5 className="py-3 px-4 flex items-center text-xl font-extrabold leading-6">
                {title}
            </h5>
            <div className="grid">
                {children}
            </div>
            {more && (
                <Link
                    to={more}
                    className="h-[3.25rem] flex items-center px-4 rounded-b-2xl text-[color:var(--color-primary)] hover:bg-[color:var(--background-third)] transition-colors"
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