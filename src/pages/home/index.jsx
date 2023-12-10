import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";

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
                    1 content
                </Tab.Content>
                <Tab.Content id="following">
                    2 content
                </Tab.Content>
            </Tab>
            Home Component
        </>
    )
}