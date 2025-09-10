import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ScreenWrapper from '../../components/screen-wrapper'
import { SmallText } from '../../components/text'
import { useProductsQuery } from '../../redux/authApi/authApi'

function Home() {

    const { data: products, isLoading, error } = useProductsQuery(undefined);

    useEffect(() => {
        if (products) {
            handleProduct();
        }
    }, [products]);

    const handleProduct = async () => {
        try {
            console.log("products", products)
        } catch (err) {
            console.log("Error fetching products", err);
        }
    };
    return (
        <ScreenWrapper showHeader headerTitle='Home'>
            <SmallText>Home</SmallText>
            {isLoading && <SmallText>Loading...</SmallText>}
            {error && <SmallText>Error: {JSON.stringify(error)}</SmallText>}
            {products && <SmallText>Products loaded: {products?.products?.length || 'No products'}</SmallText>}
        </ScreenWrapper>
    )
}

export default Home

