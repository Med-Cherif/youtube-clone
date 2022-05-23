import { BiVideoPlus } from "react-icons/bi";
import { IoAppsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import IconWrapper from "./IconWrapper";
import DescriptionHover from "./DescriptionHover";
import { useGlobalState } from "../../Context/AppProvider";

const picture = require('../../Assets/profile.jpeg');

const Actions = () => {

    const { openSearch } = useGlobalState()

    return (
        <div className="flex items-center gap-4 md:gap-8">

            <DescriptionHover text="Search" classes={['block', 'sm:hidden']}>
                <IconWrapper>
                    <BsSearch onClick={openSearch} />
                </IconWrapper>
            </DescriptionHover>

            <DescriptionHover text="Upload video">
                <IconWrapper>
                    <BiVideoPlus />
                </IconWrapper>
            </DescriptionHover>
            
            <DescriptionHover text="Apps" classes={['hidden', 'sm:block']}>
                <IconWrapper>
                    <IoAppsOutline />
                </IconWrapper>
            </DescriptionHover>

            <DescriptionHover text="Notifications">
                <IconWrapper>
                    <IoMdNotificationsOutline />
                </IconWrapper>
            </DescriptionHover>

            <div>
                <img src={picture} alt="Profile" className="w-10 h-10 rounded-full" />
            </div>
        </div>
    )
}

export default Actions