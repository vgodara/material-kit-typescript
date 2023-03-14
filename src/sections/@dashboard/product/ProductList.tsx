import {ProductListProps} from "./types";
import Grid2 from "@mui/material/Unstable_Grid2";
import ProductCard from "./ProductCard";


export default function ProductList({sx,products}: ProductListProps) {
    return <Grid2  container spacing={3}>
        {products.map(product => (product)).map(product => (
            <Grid2 key={product.id} xs={12} sm={6} md={3}>
                <ProductCard product={product}/>
            </Grid2>
        ))}
    </Grid2>
}