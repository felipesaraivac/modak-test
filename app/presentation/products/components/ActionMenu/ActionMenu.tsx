import React from 'react';
import {MenuIcon} from "./components/style";
import {SortedBy, useActionMenu} from "@/presentation/products/components/ActionMenu/useActionMenu";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {ActionMenuModal} from "@/presentation/products/components/ActionMenu/components/ActionMenuModal";
import {useGetCategories} from "@/hooks/getProducts/getCategory";

export const ActionMenu = () => {

    const {isVisible, showMenu, hideMenu, sortedBy, setSortedBy, filterBy, setFilterBy, isCategoriesVisible, showCategories, hideCategories} = useActionMenu()

    const {data: categories} = useGetCategories()

    function setSorted(newSort: SortedBy) {
        setSortedBy(newSort)
        setFilterBy(undefined)
        hideMenu()
        hideCategories()
    }

    function setFilter(category: string) {
        setFilterBy(category)
        setSortedBy(undefined)
        hideCategories()
        hideMenu()
    }

    return (
        <>
            {categories &&
                <MenuIcon onPress={showCategories}>
                    <FontAwesome name="filter" size={24} color="#000"/>
                </MenuIcon>
            }

            <MenuIcon onPress={showMenu}>
                <FontAwesome name="sort" size={24} color="#000"/>
            </MenuIcon>

            <ActionMenuModal
                isVisible={isVisible}
                hideModal={hideMenu}
                selector={(item) => item.name === sortedBy}
                children={[
                    {name: 'name', onPress: () => setSorted('title'), icon: 'sort-alpha-asc'},
                    {name: 'price', onPress: () => setSorted('price'), icon: 'dollar'},
                    {name: 'rating', onPress: () => setSorted('rating'), icon: 'star'},
                    {name: 'brand', onPress: () => setSorted('brand'), icon: 'shopping-bag'},
                ]}/>

            {categories && <ActionMenuModal
                isVisible={isCategoriesVisible}
                hideModal={hideCategories}
                selector={(item) => item.name === sortedBy}
                scrollEnabled
                children={
                    categories.map((item) => ({name: item.name, onPress: () => setFilter(item.name)}))}/>}

        </>
    );
};
