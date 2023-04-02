import {Container, Stack, Typography} from "@mui/material";
import {ProductCartWidget, ProductFilterSidebar, ProductList, ProductSort} from "../sections/@dashboard/product";
import {useState} from "react";
import {products} from "../temp/data";
import {Helmet} from "react-helmet-async";

export default function ProductsListingPage() {
       const [openFilter, setOpenFilter]=useState(false)
    return <>
        <Helmet>
            <title> Dashboard: Products | Minimal UI </title>
        </Helmet>

        <Container>
          <Stack  spacing={5} sx={{mb:5}}>
              <Typography variant={'h4'} >Products</Typography>
              <Stack minWidth={250} direction={'row'} justifyContent={'flex-end'} alignItems={'center'} flexWrap={'wrap-reverse'} spacing={1} sx={{py:1}} >
                  <ProductFilterSidebar openFilter={openFilter} setOpenFilter={setOpenFilter}/>
                  <ProductSort/>
              </Stack>

          </Stack>
            <ProductList  products={products}/>
            <ProductCartWidget />
        </Container>
    </>
}