import {useGetProducts} from "@/hooks/getProducts/getProducts";
import {useNavigation} from "@react-navigation/native";
import {useActionMenu} from "@/presentation/products/components/ActionMenu/useActionMenu";

export const useProductList = () => {

    const navigation = useNavigation();

    const {sortedBy, filterBy: category } = useActionMenu();

    const {data, error, isFetching, isLoading, refetch} = useGetProducts(sortedBy, category)

    const onRefresh = () => {
        if (!isFetching) {
            refetch()
        }
    }

    return {
        products: data?.products,
        hasError: !!error,
        isLoading,
        isFetching,
        onRefresh,
        // @ts-ignore
        navigateTo: (id: number) => navigation.navigate('Details', { id }),
    }
}