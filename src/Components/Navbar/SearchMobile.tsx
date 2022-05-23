import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr"
import { useGlobalState } from '../../Context/AppProvider'

const SearchMobile = () => {
    const { closeSearch } = useGlobalState();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <div className={`sm:hidden absolute inset-0 z-50 bg-gray-200 grid grid-cols-[1fr_50px]`}>
            <div className="border bg-white relative">
                <input ref={inputRef} placeholder="Search..." type="text" className="absolute inset-0 px-4 outline-none border-none" />
                <BsSearch className="absolute right-4 top-2/4 -translate-y-2/4 text-xl cursor-pointer" />
            </div>
            <div className='flex justify-center items-center text-xl'>
                <GrClose onClick={closeSearch} className='cursor-pointer' />
            </div>
        </div>
    )
}

export default SearchMobile     