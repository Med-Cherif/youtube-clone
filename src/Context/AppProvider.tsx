import { useState, useContext, createContext } from 'react'

const AppContext = createContext({});

const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const [sidebarActiveLink, setSidebarActiveLink] = useState('home');
    const [sidebarFluid, setSidebarFluid] = useState(true);
    const [searchVisible, setSearchVisible] = useState(false);

    const openSearch = () => setSearchVisible(true);
    const closeSearch = () => setSearchVisible(false);

    const toggleSidebarFluid = () => setSidebarFluid(prev => !prev)

    const handleActiveLink = (text: string) => {
        setSidebarActiveLink(text);
    }

    return (
        <AppContext.Provider value={{
            sidebarActiveLink,
            handleActiveLink,
            sidebarFluid,
            toggleSidebarFluid,
            searchVisible,
            openSearch,
            closeSearch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

interface GlobalState {
    sidebarActiveLink: string;
    sidebarFluid: boolean;
    searchVisible: boolean;
    openSearch: () => void;
    closeSearch: () => void;
    toggleSidebarFluid: () => void;
    handleActiveLink: (text: string) => void;
}

export const useGlobalState = () => {
    return useContext(AppContext) as GlobalState
}