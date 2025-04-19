import * as React from "react";
import {FlatList} from "react-native";
import {Image} from "./style";

type Props = {
    images: string[]
}

export const ImageList = ({images}: Props) => {

    if (images.length === 0) return null

    return (
        <FlatList
            data={images}
            style={{width: '100%'}}
            renderItem={({item}) => <Image source={{uri: item}}/>}
        />
    )
}

