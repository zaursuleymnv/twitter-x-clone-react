import { topics } from "~/utils/consts";
import Topic from "./topic";


export default function Topics() {
    return (
        <section className="bg-[#16181c] rounded-2xl border border-[#16181c]">
            <h5 className="py-3 px-4 text-[#e7e9ea] flex items-center text-xl font-extrabold leading-6">Poland trends</h5>
            <div className="grid">
                {topics.map((topic, index) => <Topic item={topic} key={index}/> )}
            </div>
        </section>
    )
}