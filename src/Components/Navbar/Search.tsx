import { BsSearch } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import DescriptionHover from "./DescriptionHover";

const Search = () => {
    return (
        <div className="hidden sm:flex items-center justify-center gap-3 flex-1">
            <div className="border border-gray-400 grid grid-cols-[1fr_50px] md:grid-cols-[1fr_70px] w-full max-w-lg">
                <div className="max-w-[80px] min-w-[80px] lg:w-full">
                    <input type="text" placeholder="Search" className="py-2 px-3 border-none outline-none w-full" />
                </div>
                <DescriptionHover text="Search" classes={['flex', 'items-center', 'justify-center']}>
                    <div className="cursor-pointer flex items-center justify-center bg-slate-100 hover:bg-slate-200 border-l border-gray-400 w-full h-full">
                        <BsSearch />
                    </div>
                </DescriptionHover>
            </div>
            <DescriptionHover text="Search with your voice">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
                    <HiOutlineMicrophone className="text-2xl" />
                </div>
            </DescriptionHover>
        </div>
    )
}

export default Search