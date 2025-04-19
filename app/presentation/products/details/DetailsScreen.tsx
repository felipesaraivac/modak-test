import * as React from "react";
import {Brand, Card, Price, Row, Title} from "./DetailsScreenStyle"
import {useProductDetails} from "./useProductDetails";
import {Rating} from "@/presentation/products/details/DetailsScreenStyle";
import {Stock} from "@/presentation/products/details/DetailsScreenStyle";
import {Discount} from "@/presentation/products/details/DetailsScreenStyle";
import {LoadingState, EmptyState, Box} from "@/presentation/products/components";
import {ImageList} from "@/presentation/products/details/components/ImageList";
import {Image} from "@/presentation/products/details/components/style";
import {FlatList} from "react-native";

const DetailsScreen = () => {

    const {product, isLoading, isFetching, onRefresh} = useProductDetails()

    if (isLoading || isFetching) return <LoadingState/>

    if (!product) return <EmptyState/>

    const header = () => ( <Box direction={"column"} >
        <Card>
            <Title>{product.title}</Title>
            <Brand>{product.brand}</Brand>

            <Row>
                <Price>R$ {product.price.toFixed(2)}</Price>
                <Discount>-{product.discountPercentage}%</Discount>
            </Row>

            <Stock>
                Estoque: {product.stock > 0 ? `${product.stock} unidades` : 'Indisponível'}
            </Stock>

            <Rating>⭐ {product.rating}/5</Rating>

        </Card>

    </Box>)

    return (<FlatList
        ListHeaderComponent={header}
        data={product.images}
        style={{width: '100%'}}
        renderItem={({item}) => <Image source={{uri: item}}/>}
    />)

}

export default DetailsScreen