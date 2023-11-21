import classNames from "classnames"
import { NavLink } from "react-router-dom"
import Button from "~/components/button"
import { MainMenu } from "~/utils/consts"
import More from "./more"
import New from "./new"

export default function Menu() {
    return(
        <nav className="mt-0.5 mb-1">
            {MainMenu.map((menu, index) => (
                <NavLink to={menu.path} className="py-[2px] block group">
                {({isActive}) => (
                    <div className={classNames("inline-flex items-center p-3 rounded-full gap-5 group-hover:bg-[#eff3f41a] transition-colors", {
                        "font-bold": isActive
                    })}>
                    <div className="w-[26.25] h-[26.25] relative">
                        {menu?.notification && (
                            <span className="absolute -top-1.5 -right-1 bg-[#1d9bf0] w-[18px] h-[18px] rounded-full flex justify-center items-center text-[11px]">{menu?.notification}</span>
                        )}
                        {!isActive && menu.icon.passive}
                        {isActive && menu.icon.active}
                    </div>
                    <div className="pr-4 text-xl">
                        {menu.title}
                    </div>
                </div>
                )}
            </NavLink>
            ))}
            
            <More/>
            <New/>
        </nav>
    )
}