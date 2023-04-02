import {Box, Container, Stack, Typography} from "@mui/material";
import Breadcrumbs from "../sections/navigation/Breadcrumbs";
import {productDetails} from "../temp/data";
import {faker} from "@faker-js/faker";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Carousel} from "../components/carousel";
import {ProductBuyBox, ProductDescription} from "../sections/@dashboard/product";
import {useParams} from "react-router-dom";

export default function ProductDetailPage() {
    const {id}=useParams()
    console.log(id)
    const product=productDetails[faker.datatype.number({min:0,max:23})]
    return <Container maxWidth={'lg'}>
        <Stack spacing={1} marginBottom={5}>
            <Typography variant={'h4'}>Product Details</Typography>
            <Breadcrumbs list={[{label:'Dashboard',link:''},{label:'Products',link:''},{label:'Shop',link:''},{label:product.name,link:''}]}/>
        </Stack>
        <Grid2 container spacing={{xs: 3}}>
            <Grid2 xs={12} md={6} lg={7} >
                <Carousel list={[...Array(8)].map((_,index)=>(`/assets/images/products/product_${index+1}.jpg`))}/>
            </Grid2>
            <Grid2 xs={12} md={6} lg={5} >
                <ProductBuyBox product={product}/>
            </Grid2>
        </Grid2>
        <Box sx={(theme)=>({marginBottom:theme.spacing(10)})}></Box>
        <ProductDescription product={product}/>
    </Container>
}