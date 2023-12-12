import RadioTab from "../components/RadioTab";
import SwitchBtn from "../components/SwitchBtn";
import NumberInput from "../components/NumberInput";
import SideBarSection from "../components/SideBarSection";
import DropdownSelect from "../components/DropdownSelect";
import { barOptions, fontOptions, fontSizeOptions, langOptions, paddingOptions, themeOptions } from "../utils/lists";
import { useOptionsContext } from "../hooks/useOptionsContext";

function SideBar() {

    const context = useOptionsContext()
    const { language, font, fontSize, bar, padding, darkMode, radious, theme } = context.state
    
    return (
        <aside className=" w-64 h-full bg-white dark:bg-neutral-950 box-border border-l border-l-neutral-200 dark:border-l-neutral-800 flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800 overflow-y-auto">
            <SideBarSection sectionTitle="Code">
                <DropdownSelect options={langOptions} state={language}  id="language" />
                <DropdownSelect options={Object.keys(fontOptions)} state={font}  id="font" />
                <RadioTab options={fontSizeOptions} state={fontSize} id="fontSize" />
            </SideBarSection>
            <SideBarSection sectionTitle="Style">
                <RadioTab options={themeOptions} state={theme} theme={true} id="theme" />
                <RadioTab options={barOptions} state={bar} id={"bar"}/>
                <RadioTab options={paddingOptions} state={padding} id="padding"/>
                <div className=" w-full grid grid-cols-2 gap-x-8">
                    <SwitchBtn state={darkMode} id="darkMode"/>
                    <NumberInput state={radious}  id="radious" />
                </div>
            </SideBarSection>
        </aside>
    )
}

export default SideBar