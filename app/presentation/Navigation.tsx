import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProductList from "@/presentation/products/list/ProductList";
import DetailsScreen from "@/presentation/products/details/DetailsScreen";
import {ActionMenu} from "@/presentation/products/components/ActionMenu/ActionMenu";

const Stack = createNativeStackNavigator()

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductList} options={{headerRight: () => <ActionMenu/>}} />
            <Stack.Screen name="Details" component={DetailsScreen}  />
        </Stack.Navigator>
    )
}