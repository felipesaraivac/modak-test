import * as React from "react";
import {Text} from "react-native";
import {Container} from "./Styles";
import {EmptyState} from "@/presentation/products/components";

export const ErrorState = (props: {text: string}) => {
    return <Container >
        <Text>{props.text}</Text>
    </Container>
}