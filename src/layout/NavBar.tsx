import logo from "../assets/nav_bar_logo.svg"
import Button from "../components/Button"

function NavBar() {
    return(
        <nav className="w-full py-3 px-6 bg-white border-b border-b-neutral-300 flex justify-between items-center">
            <img src={logo}/>
            <Button/>
        </nav>
    )
}

export default NavBar