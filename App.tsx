import 'reflect-metadata';
import {NavigationContainer} from "@react-navigation/native";
import {AppStack} from "@/presentation/Navigation";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ActionMenuProvider} from "@/presentation/products/components/ActionMenu/useActionMenu";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <ActionMenuProvider>
                    <AppStack/>
                </ActionMenuProvider>
            </NavigationContainer>
        </QueryClientProvider>
    );
}