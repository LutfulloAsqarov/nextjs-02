import { getData } from "@/api/fetchData";
import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";
import Popular from "@/components/popular/Popular";
import Products from "@/components/products/Products";
import Users from "@/components/users/Users";
import Image from "next/image";

export default async function Home() {
    let productData = await getData("products?limit=8");
    return (
        <div>
            <Hero />
            <Products data={productData} />
            <Benefits />
            <Users />
            <Popular />
        </div>
    );
}
