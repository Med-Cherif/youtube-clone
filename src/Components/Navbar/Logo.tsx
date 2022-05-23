import { AiFillYoutube } from "react-icons/ai";
import { FcMenu } from "react-icons/fc";
import { useGlobalState } from "../../Context/AppProvider";

const Logo = () => {
    const { toggleSidebarFluid } = useGlobalState()
    return (
        <div className="flex items-center gap-4">
            <div onClick={toggleSidebarFluid} className="hidden xl:block">
                <FcMenu className="cursor-pointer text-2xl" />
            </div>
            <div className="flex items-center">
                <AiFillYoutube className="text-[red] text-3xl" />
                <h2 className="text-2xl font-semibold">Youtube</h2>
            </div>
        </div>
    )
}

export default Logo