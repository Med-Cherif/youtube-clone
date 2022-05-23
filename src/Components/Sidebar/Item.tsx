import { useGlobalState } from "../../Context/AppProvider";

interface IProps {
    text: string;
    Icon: React.ReactNode
}

const Item = ({ text, Icon }: IProps) => {
    const { handleActiveLink, sidebarActiveLink, sidebarFluid } = useGlobalState()
    const isActive = sidebarActiveLink === text;
    return (
        <li onClick={() => handleActiveLink(text)}>
            <a onClick={(e) => e.preventDefault()} href="" className={`${isActive ? 'bg-gray-300' : 'bg-white'} flex gap-6 items-center py-2 px-6 h-10`}>
                {Icon}
                <span className={`hidden ${sidebarFluid ? 'xl:block' : 'hidden'} font-normal capitalize`}>{text}</span>
            </a>
        </li>
    )
}

export default Item