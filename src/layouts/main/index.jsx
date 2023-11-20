import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar";

export default function MainLayout() {
    return(
        <div className="w-[1265px] mx-auto flex">
            <Sidebar/>
            <main className="flex flex-1 gap-[30px]">
                <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
                    <Outlet/>
                </main>
                <RightBar/>
            </main>
        </div>
    )
}