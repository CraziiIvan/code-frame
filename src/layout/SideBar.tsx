import RadioTab from "../components/RadioTab"
import type { RootState } from "../store/configureStore";
import SideBarSection from "../components/SideBarSection"
import { useSelector } from "react-redux";
import { setRatio, setPadding, setBar, setDarkMode, setRadious, setLang } from "../store/feature/editorSlice";
import SwitchBtn from "../components/SwitchBtn";
import NumberInput from "../components/NumberInput";
import DropdownSelect from "../components/DropdownSelect";

const layoutOptions = ["Auto", "1:2", "1:1", "16:9"];
const paddingOptions = ["24", "32", "64", "80"];
const barOptions = ["Mac Os", "Window"]
const langOptions = [ "Javascript", "Typescript", "Python", "Php", "Java", "C#", "C++", "C"]

function SideBar() {

    const ratio = useSelector((state: RootState) => state.editor.ratio)
    const padding = useSelector((state: RootState) => state.editor.padding)
    // const theme = useSelector((state: RootState) => state.editor.theme)
    const bar = useSelector((state: RootState) => state.editor.bar)
    const darkMode = useSelector((state: RootState) => state.editor.darkMode)
    const radious = useSelector((state: RootState) => state.editor.radious)
    const language = useSelector((state: RootState) => state.editor.language)
    
    return (
        <aside className=" w-64 h-full bg-white box-border border-l border-l-neutral-200 flex flex-col divide-y divide-neutral-200 overflow-y-scroll">
            <SideBarSection sectionTitle="Text">
                <DropdownSelect options={langOptions} state={language} action={setLang} id="language" />
                <DropdownSelect options={langOptions} state={language} action={setLang} id="font" />
            </SideBarSection>
            <SideBarSection sectionTitle="Layout">
                <RadioTab options={layoutOptions} state={ratio} action={setRatio} id={"ratio"}/>
                <RadioTab options={paddingOptions} state={padding} action={setPadding} id={"padding"}/>
            </SideBarSection>
            <SideBarSection sectionTitle="Style">
                <RadioTab options={barOptions} state={bar} action={setBar} id={"bar"}/>
                <div className=" w-full grid grid-cols-2 gap-x-8">
                    <SwitchBtn state={darkMode} action={setDarkMode} id="dark mode"/>
                    <NumberInput state={radious} action={setRadious} id="radious" />
                </div>
            </SideBarSection>
        </aside>
    )
}

export default SideBar