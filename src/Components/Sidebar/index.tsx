import List from './List';
import { sidebarLinks } from '../../data/sidebarLinks';
import { useGlobalState } from '../../Context/AppProvider';

const Sidebar = () => {
    const { sidebarFluid } = useGlobalState()
    return (
        <div className={`sidebar h-[calc(100vh_-_66px)] overflow-auto ${sidebarFluid ? "xl:min-w-[15rem]" : ""} sticky top-[66px]`}>
            <div>
                {Object.entries(sidebarLinks).map(([key, value]) => {
                    return <List key={key} items={value} />
                })}
            </div>
            
        </div>
    )
}

export default Sidebar