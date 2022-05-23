import { useGlobalState } from "../../Context/AppProvider";
import Actions from "./Actions";
import Logo from "./Logo";
import Search from "./Search";
import SearchMobile from "./SearchMobile";

const Navbar = () => {
    const { searchVisible } = useGlobalState();
    return (
        <div className="flex justify-between items-center py-2 px-3 sm:py-3 sm:px-6 gap-4 sm:gap-6 h-[66px] sticky top-0 bg-white z-20">
            <Logo />
            <Search />

            {/* for mobile screens */}
            { searchVisible && <SearchMobile /> }

            <Actions />
        </div>
    )
}

export default Navbar