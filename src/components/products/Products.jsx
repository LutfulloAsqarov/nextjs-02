// import { PRODUCTS } from "@/static";
import Image from "next/image";
import React from "react";
import "./products.scss";
import Link from "next/link";

const Products = ({ data }) => {
    console.log(data);
    let productsItems = data?.products?.map((product) => (
        <div key={product.id} className="products__card">
            <div className="products__card__img">
                <Link href={`/product/${product.id}`}>
                    <Image
                        width={200}
                        height={200}
                        alt="Product-image"
                        src={product.images[0]}
                    />
                </Link>
            </div>
            <div className="products__card__info">
                <h3>{product.title}</h3>
                <p>{product.price}$</p>
            </div>
        </div>
    ));
    return (
        <div id="products">
            <div className="container products">
                <div>
                    <h2 className="section__title">Products</h2>
                    <p className="section__desc">
                        Order it for you or for your beloved ones{" "}
                    </p>
                </div>
                <div className="products__cards">{productsItems}</div>
            </div>
        </div>
    );
};

export default Products;
