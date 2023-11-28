import { topics } from "~/utils/consts";
import Topic from "./topic";
import SidebarSection from "~/components/sidebar-section";


export default function Topics() {
    return (
        <SidebarSection
            title="Poland trends"
            more="/trends"
        >
            {topics.map((topic, index) => <Topic item={topic} key={index}/>)}
        </SidebarSection>
    )
}