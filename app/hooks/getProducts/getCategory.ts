import {container} from "@/di/container";
import {ProductsService} from "@/data/ProductsService";
import PRODUCT_TOKENS from "@/di/tokens";
import {useQuery} from "@tanstack/react-query";

export const useGetCategories = () => {
    const repository = container.get<ProductsService>(PRODUCT_TOKENS.ProductService)

    return useQuery({
        queryFn: () => repository.getCategories(),
        queryKey: ["getCategories"],
    })
}