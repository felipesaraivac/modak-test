import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {container} from "@/di/container";
import PRODUCT_TOKENS from "@/di/tokens";
import {ProductsService} from "@/data/ProductsService";

function useGetProducts(sortedBy?: string, category?: string) {

    const repository = container.get(ProductsService)

    return useQuery({
        queryFn: () => repository.getProducts(sortedBy, category),
        queryKey: ["getProducts", sortedBy, category],
    })

}


const useGetProduct = (id: number) => {

    const repository = container.get<ProductsService>(PRODUCT_TOKENS.ProductService)

    return useQuery({
        queryFn: () => repository.getProduct(id),
        queryKey: ["getProduct", id],
    })
}

export {useGetProducts, useGetProduct}