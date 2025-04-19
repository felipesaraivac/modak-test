import {injectable} from "inversify";
import {BaseHttpService} from "@/core/service/BaseHttpService";
import {CategoryResponse, ProductListItem, ProductListResponse, ProductResponse} from "./model/productModels";
import PRODUCT_TOKENS from "../di/tokens";
import {container} from "@/di/container";

@injectable()
export class ProductsService {

    /**
     *
     * @todo: refactor this to use @inject. Due to some issue with inversify, I could not get it to work
     *  the way it should
     */
    protected service: BaseHttpService = container.get(PRODUCT_TOKENS.HTTPService)

    productKeys = ['id',
        'title',
        'price',
        'thumbnail',
        'description',
        'rating',
        'stock',
        'thumbnail'
    ]

    async getProducts(sortBy?: string, category?: string) {
        if (category) return await this.getFilteredProducts(category)
        return await this.service.get<ProductListResponse>("/products", {
            params: {
                sortBy,
                order: 'asc',
                select: this.productKeys
            }
        })
    }

    async getProduct(id: number) {
        return await this.service.get<ProductResponse>(`/products/${id}`)
    }

    async getCategories() {
        return await this.service.get<Array<CategoryResponse>>("/products/categories")
    }

    async getFilteredProducts(category: string) {
        return await this.service.get<ProductListResponse>(`/products/category/${category}`)
    }
}