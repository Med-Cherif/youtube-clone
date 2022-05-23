import { useRef } from "react";

interface IProps {
    text: string;
    isActive: boolean;
    reference: React.RefObject<HTMLLIElement> | undefined;
    navigateCategory: (item: string) => void
}

const CategoryItem = ({ text, isActive, reference, navigateCategory }: IProps) => {

    const handleClick = () => {
        navigateCategory(text)
    }

    return (
        <li
            ref={reference}
            className={`px-3 py-1 rounded-full bg-slate-50 capitalize cursor-pointer ${isActive ? 'text-white bg-black' : ''} whitespace-nowrap`}
            onClick={handleClick}
        >
            {text}
        </li>
    )
}

export default CategoryItem