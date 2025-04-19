import {ProductListItem} from "@/presentation/products/list/components/ProductListItem";

export type ProductResponse = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Array<{
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }>;
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    thumbnail: string;
    images: string[];
}

export type ProductListItem = {
    id: number
    title : string
    price: number
    thumbnail: string
    description: string
    rating: number
    stock: number
}

export type ProductListResponse = {
    "products": ProductListItem[],
    "total": 194,
    "skip": 0,
    "limit": 30
}

export type CategoryResponse = {
    slug: string,
    name: string
}