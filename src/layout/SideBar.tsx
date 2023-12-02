import RadioTab from "../components/RadioTab"
import type { RootState } from "../store/configureStore";
import SideBarSection from "../components/SideBarSection"
import { useSelector } from "react-redux";
import { setPadding, setBar, setDarkMode, setRadious, setLang, setFont } from "../store/feature/editorSlice";
import SwitchBtn from "../components/SwitchBtn";
import NumberInput from "../components/NumberInput";
import DropdownSelect from "../components/DropdownSelect";
import { fontOptions } from "../list";

const paddingOptions = ["24", "32", "64", "80"];
const barOptions = ["Mac Os", "Window"]
const langOptions = [ "Javascript", "Typescript", "Python", "Php", "Java", "C#", "C++", "C"]

function SideBar() {

    const padding = useSelector((state: RootState) => state.editor.padding)
    // const theme = useSelector((state: RootState) => state.editor.theme)
    const bar = useSelector((state: RootState) => state.editor.bar)
    const darkMode = useSelector((state: RootState) => state.editor.darkMode)
    const radious = useSelector((state: RootState) => state.editor.radious)
    const language = useSelector((state: RootState) => state.editor.language)
    const font = useSelector((state: RootState) => state.editor.font)
    
    return (
        <aside className=" w-64 h-full bg-white box-border border-l border-l-neutral-200 flex flex-col divide-y divide-neutral-200 overflow-y-scroll">
            <SideBarSection sectionTitle="Code">
                <DropdownSelect options={langOptions} state={language} action={setLang} id="language" />
                <DropdownSelect options={Object.keys(fontOptions)} state={font} action={setFont  } id="font" />
            </SideBarSection>
            <SideBarSection sectionTitle="Style">
                <RadioTab options={barOptions} state={bar} action={setBar} id={"bar"}/>
                <RadioTab options={paddingOptions} state={padding} action={setPadding} id={"padding"}/>
                <div className=" w-full grid grid-cols-2 gap-x-8">
                    <SwitchBtn state={darkMode} action={setDarkMode} id="dark mode"/>
                    <NumberInput state={radious} action={setRadious} id="radious" />
                </div>
            </SideBarSection>
        </aside>
    )
}

export default SideBar