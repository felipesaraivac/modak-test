import {
    MenuContainer,
    MenuItem, MenuText,
    ModalBackground,
    SubitemMenuIcon,
    ScrollView
} from "@/presentation/products/components/ActionMenu/components/style";
import {Modal, ViewProps} from "react-native";
import React from "react";
import {IconNames} from "@/core/iconNames";

type ItemDescriptorProps = {
    name: string,
    onPress: (name: string) => void,
    icon?: IconNames
    selected?: boolean
}

type Props = {
    children: ItemDescriptorProps[],
    isVisible: boolean
    hideModal: () => void
    selector: (item: ItemDescriptorProps) => boolean
    scrollEnabled?: boolean
}

const MenuItemRenderer = ({name, onPress, icon, selected}: ItemDescriptorProps) =>
    <MenuItem onPress={() => onPress(name)}>
        {icon && <SubitemMenuIcon name={icon} size={16} color="#000" selected={selected} selectionColor={"#1e40af"}/>}
        <MenuText>{name}</MenuText>
    </MenuItem>


export const ActionMenuModal = ({isVisible, hideModal, selector, children, scrollEnabled}: Props) => {
    return <Modal visible={isVisible} transparent animationType="slide" onRequestClose={hideModal}>
        <ModalBackground onPress={hideModal}>
            <MenuContainer>
                {scrollEnabled ?
                    <ScrollView scrollEnabled={scrollEnabled}>{
                            children?.
                                map((item, index) => <MenuItemRenderer key={index} {...item} selected={selector(item)}/>)
                        }
                    </ScrollView> : children?.
                                map((item, index) => <MenuItemRenderer key={index} {...item} selected={selector(item)}/>)
                }
            </MenuContainer>
        </ModalBackground>
    </Modal>
}