import * as React from "react";
import {ProductListItem as PLI} from "@/data/model/productModels";
import {Image, PriceCaption, Separator, Text, TextBox, TextCaption} from "./ProductListItemStyle";
import {Box, Touchable} from "@/presentation/products/components/Box";

type Props = {
    item: PLI,
    onItemPress: (id: number) => void
}

export const ProductListItem = ({item, onItemPress}: Props) => {

    return (
        <Touchable onPress={() => onItemPress(item.id)}>
            <TextBox>
                <Image source={{uri: item.thumbnail}} resizeMode='center' resizeMethod='auto' style={{backgroundColor: 'transparent'}}/>
                <Box direction='column'>
                    <Text>{item.title}</Text>
                    <TextCaption numberOfLines={2}>{item.description}</TextCaption>
                </Box>
                <PriceCaption>{item.price}</PriceCaption>
            </TextBox>
            <Separator/>
        </Touchable>
    )
};



