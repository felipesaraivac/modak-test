import {Container} from "inversify";
import PRODUCT_TOKENS from "./tokens";
import {ProductsService} from "@/data/ProductsService";
import {BaseHttpService} from "@/core/service/BaseHttpService";
import Constants from "../core/constants";

export const container = new Container({autoBindInjectable: true})

container
    .bind<BaseHttpService>(PRODUCT_TOKENS.HTTPService)
    .to(BaseHttpService)
    .inSingletonScope()

container
    .bind<ProductsService>(PRODUCT_TOKENS.ProductService)
    .to(ProductsService)
    .inSingletonScope()
