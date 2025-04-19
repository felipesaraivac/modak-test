import * as React from "react";
import {Container, StateText} from "./Styles";

export const EmptyState = () => {
    return (
        <Container>
            <StateText>Could not find any products</StateText>
        </Container>
    );
}