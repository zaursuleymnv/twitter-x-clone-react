import classNames from "classnames"
import { NavLink } from "react-router-dom"

export default function Menu() {
    return(
        <nav className="mt-0.5 mb-1">
            {/* home */}
            <NavLink to="/" className="py-1 block group">
                {({isActive}) => (
                    <div className={classNames("inline-flex items-center p-3 rounded-full gap-5 group-hover:bg-[#eff3f41a] transition-colors", {
                        "font-bold": isActive
                    })}>
                    {!isActive && (
                        <svg width={25.25} height={26.25} className="block"
                            viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                            <path fill="#e7e9ea" d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"/>
                        </svg>
                    )}
                    {isActive && (
                        <svg width={25.25} height={26.25} className="block"
                            viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                            <path fill="#e7e9ea" d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"/>
                        </svg>
                    )}
                    <div className="pr-4 text-xl">
                        Home
                    </div>
                </div>
                )}
            </NavLink>

            {/* explore */}
            <NavLink to="/explore" className="py-1 block group">
                {({isActive}) => (
                    <div className={classNames("inline-flex items-center p-3 rounded-full gap-5 group-hover:bg-[#eff3f41a] transition-colors", {
                        "font-bold": isActive
                    })}>
                    {!isActive && (
                        <svg width={25.25} height={26.25} className="block"
                            viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                            <path fill="#e7e9ea" d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
                        </svg>
                    )}
                    {isActive && (
                        <svg width={25.25} height={26.25} className="block"
                            viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
                            <path fill="#e7e9ea" d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"/>
                        </svg>
                    )}
                    <div className="pr-4 text-xl">
                        Explore
                    </div>
                </div>
                )}
            </NavLink>
        </nav>
    )
}