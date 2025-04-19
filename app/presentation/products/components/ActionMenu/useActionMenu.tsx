import {createContext, ReactNode, useContext, useState} from "react";


type ActionMenuContextType = {
    isVisible: boolean,
    hideMenu: () => void,
    showMenu: () => void,
    sortedBy: SortedBy,
    setSortedBy: (sortedBy: SortedBy) => void
    filterBy: string | undefined
    setFilterBy: (filterBy: string | undefined) => void,
    isCategoriesVisible: boolean,
    showCategories: () => void,
    hideCategories: () => void
}
const ActionMenuContext = createContext<ActionMenuContextType>({} as ActionMenuContextType)

export type SortedBy = 'title' | 'price' | 'rating' | 'brand' | undefined

export const ActionMenuProvider = ({children}: { children: ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isCategoriesVisible, setIsCategoriesVisible] = useState(false)
    const [sortedBy, setSorted] = useState<SortedBy>(undefined)

    const showMenu = () => setIsVisible(true)

    const hideMenu = () => setIsVisible(false)

    const [filterBy, setFilterBy] = useState<string | undefined>(undefined)

    const showCategories = () => setIsCategoriesVisible(true)

    const hideCategories = () => setIsCategoriesVisible(false)

    const setSortedBy = (newSort: SortedBy) => {
        if (newSort === sortedBy) {
            setSorted(undefined)
            return
        }
        setSorted(newSort)
    }

    return <ActionMenuContext.Provider value={{
        isVisible,
        showMenu,
        hideMenu,
        sortedBy,
        setSortedBy,
        filterBy,
        setFilterBy,
        isCategoriesVisible,
        hideCategories,
        showCategories
    }}>
        {children}
    </ActionMenuContext.Provider>
}

export const useActionMenu = () => {
    return useContext(ActionMenuContext)
}