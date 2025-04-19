import * as React from "react";
import {ActivityIndicator} from 'react-native';
import {Container, StateText} from "./Styles";

export const LoadingState = () => {
    return (
        <Container>
            <ActivityIndicator size="large" color="#1e40af" />
            <StateText>Loading...</StateText>
        </Container>
    );
};