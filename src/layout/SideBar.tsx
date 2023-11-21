import SideBarSection from "../components/SideBarSection"

function SideBar() {
    return (
        <aside className=" w-64 h-full bg-white box-border border-l border-l-neutral-300 flex flex-col divide-y divide-neutral-300">
            <SideBarSection sectionTitle="Layout"></SideBarSection>
            <SideBarSection sectionTitle="Layout"></SideBarSection> 
        </aside>
    )
}

export default SideBar