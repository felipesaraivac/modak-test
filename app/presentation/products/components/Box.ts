import styled from "styled-components/native";
import {WebViewProps} from "expo/build/dom/dom.types";

type BoxProps = {
    flex?: number | 'auto' | undefined
    direction: 'row' | 'column'
}

export const Box = styled.View<BoxProps>`
    flex: ${({flex}) => flex || 'auto'};
    flex-direction: ${({direction}) => direction};
`

export const Touchable = styled.TouchableOpacity`
    flex: auto;
`