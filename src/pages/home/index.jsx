import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";
import ForYou from "./for-you";

export default function Home() {
    return(
        <>
            <Tab activeTab = "for-you">
            <StickyHeader title="Main page">
                <Tab.Items>
                    <Tab.Item id="for-you">
                        For you
                    </Tab.Item>
                    <Tab.Item id="following">
                        Following
                    </Tab.Item>
                </Tab.Items>
            </StickyHeader>
                <Tab.Content id="for-you">
                    <ForYou/>
                </Tab.Content>
                <Tab.Content id="following">
                    2 content
                </Tab.Content>
            </Tab>
            Home Component
        </>
    )
}