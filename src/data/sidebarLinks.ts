import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineSubscriptions } from 'react-icons/md'
import { VscHistory } from 'react-icons/vsc'
import { RiVideoLine } from 'react-icons/ri';
import { BsClock } from 'react-icons/bs';


export const sidebarLinks = {
    navigattion: [
        { id: 1, text: 'home', Icon: AiOutlineHome },
        { id: 2, text: 'explore', Icon: MdOutlineExplore },
        { id: 3, text: 'shorts', Icon: MdOutlineVideoLibrary },
        { id: 4, text: 'subscription', Icon: MdOutlineSubscriptions },
    ],
    aboutYourVideos: [
        { id: 5, text: 'history', Icon: VscHistory },
        { id: 6, text: 'your videos', Icon: RiVideoLine },
        { id: 7, text: 'watch later', Icon: BsClock },
    ]
}
