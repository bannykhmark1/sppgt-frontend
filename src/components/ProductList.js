import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ProductItem from "./ProductItem";

const ProductList = observer(() => {
    const { product } = useContext(Context);

    return (
        <div className="flex flex-wrap">
            {product.products.map(product => (
                <div key={product.id} className="">
                    <ProductItem product={product} />
                </div>
            ))}
        </div>
    );
});

export default ProductList;
