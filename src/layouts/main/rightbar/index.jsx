import Premium from "~/layouts/main/rightbar/premium";
import Search from "./search";
import Topics from "./topics";

export default function RightBar() {
    return(
        <aside className="w-[350px] mr-2.5">
            <Search/>
            <Premium/>
            <Topics/>
        </aside>
    )
}