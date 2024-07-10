import React from "react";
import "./detail.scss";
import { getData } from "@/api/fetchData";
import DetailProduct from "@/components/details/DetailProduct";

const Detail = async ({ params }) => {
    let { id } = params;
    let detailData = await getData(`products/${id}`);
    console.log(detailData);

    return (
        <>
            <DetailProduct product={detailData} />
        </>
    );
};

export default Detail;
