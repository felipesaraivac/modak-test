import * as React from "react";
import {FlatList} from "react-native";
import {useProductList} from "./useProductList";
import {ProductListItem} from "./components/ProductListItem";
import {ErrorState} from "@/presentation/products/components/state/ErrorState";
import {EmptyState, LoadingState} from "@/presentation/products/components";
import {ActionMenu} from "@/presentation/products/components/ActionMenu/ActionMenu";
import {ActionMenuProvider} from "@/presentation/products/components/ActionMenu/useActionMenu";
import {MenuIcon} from "@/presentation/products/components/ActionMenu/components/style";

const ProductList = () => {

    const {products, hasError, isLoading, isFetching, onRefresh, navigateTo} = useProductList()

    if (hasError) return <ErrorState text={"Couldn't load products"}/>

    if (isLoading) return <LoadingState/>

    return (
        <FlatList
            data={products}
            renderItem={(item) => <ProductListItem item={item.item} onItemPress={navigateTo}/>}
            refreshing={isFetching}
            onRefresh={onRefresh}
            ListEmptyComponent={EmptyState}
            // onEndReached={fetchMore}
        />
    )

}

export default ProductList