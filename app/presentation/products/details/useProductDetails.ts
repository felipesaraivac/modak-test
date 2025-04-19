import {useGetProduct} from "@/hooks/getProducts/getProducts";
import {useRoute} from "@react-navigation/native";
import {id} from "inversify";

type RouteParams = {
    params: {
        id: number
    }
}

export const useProductDetails = () => {

    // @ts-ignore
    const route = useRoute<RouteParams>();

    const id = route?.params.id

    const {data, error, isFetching, isLoading, refetch} = useGetProduct(id)

    const onRefresh = () => {
        if (!isFetching) {
            refetch()
        }
    }

    return {
        product: data,
        hasError: !!error,
        isLoading,
        isFetching,
        onRefresh,
    }
}