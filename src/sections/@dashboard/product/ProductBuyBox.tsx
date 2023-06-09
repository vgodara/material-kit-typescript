import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    IconButton,
    Link,
    MenuItem,
    Rating,
    Select,
    SelectChangeEvent,
    Stack,
    Typography
} from "@mui/material";
import {ColorSinglePicker} from "../../../components/color-utils/ColorSinglePicker";
import {useState} from "react";
import {sample} from "lodash";
import {Counter} from "../../../components/counter";
import Iconify from "../../../components/iconify";
import Label from "../../../components/label";
import {ProductBuyBoxProps} from "./types";
import {fCurrency, fShortenNumber} from "../../../utils/formatNumber";

export default function ProductBuyBox({product}: ProductBuyBoxProps) {

    const sizes = [...Array(5)].map((_, index) => (index + 5))
    let selectedSize = sample(sizes)!
    return <FormControl fullWidth component={'form'} sx={(theme) => ({
        padding: {md: theme.spacing(5, 5, 0, 2)},
    })}>
        <Stack spacing={3}>
            <ProductDescription product={product}/>
            <Divider sx={{borderStyle: 'dashed'}} flexItem variant={'fullWidth'}/>
            <ProductColorSelection colors={product.colors} setSelectedColor={()=>{}}/>
            <ProductSizeSelection sizes={sizes} selectedSize={selectedSize} setSelectedSize={(size)=>selectedSize=size}/>
            <ProductQuantitySelection availableQuantity={product.sellableUnit} setSelectedQuantity={()=>{}}/>
            <Divider sx={{borderStyle: 'dashed'}} flexItem variant={'fullWidth'}/>
            <ProductBuyButtons/>
            <SocialMediaLinks/>

        </Stack>
    </FormControl>
}

function ProductDescription({product}: ProductBuyBoxProps) {
    const {name, status, aggregatedRatings, price, priceSale, averageRating} = product
    const outOfStock = product.sellableUnit < 0
    const totalReviews = aggregatedRatings.map((rating) => (rating.occurrence)).reduce(((sum, rating) => (sum + rating)), 0)
    return <Stack spacing={2}>
        {<Label color={outOfStock?'error':'success'} variant={'soft'}
                sx={{
                    marginRight: 'auto',
                    textTransform: 'uppercase',
                }}>{outOfStock ? `Out of stock` : 'in stock'}</Label>}

        {status && <Typography color={status === 'sale' ? 'error' : 'info'} variant={'overline'}>
            {status}
        </Typography>}
        <Typography variant={'h5'}>{name}</Typography>
        <Box sx={(theme) => ({
            display: 'flex',
            columnGap: theme.spacing(1),
            alignItems: 'center',
        })}>
            <Rating readOnly value={averageRating} precision={0.5}/>
            <Typography color={'text.secondary'} variant={'body2'}>{`(${fShortenNumber(totalReviews)})`}</Typography>
        </Box>
        <Typography variant={'h4'}>
            {priceSale &&
                <Typography component={'span'} variant={'h4'} color={'text.disabled'}
                            sx={{textDecoration: 'line-through', mr: 0.5}}>{fCurrency(price)}</Typography>}
            {fCurrency(priceSale ? priceSale : price)}
        </Typography>
    </Stack>
}

function ProductColorSelection({colors,setSelectedColor}:{colors:string[],setSelectedColor:(color:string)=>void}){
    return <Box sx={() => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    })}>
        <Typography variant={'subtitle2'}>Color</Typography>
        <ColorSinglePicker colors={colors} onSelect={setSelectedColor}/>
    </Box>
}
function ProductSizeSelection({sizes,selectedSize,setSelectedSize}:{sizes:number[],selectedSize:number,setSelectedSize:(size:number)=>void}){
    const [size, setSize] = useState(selectedSize)
    const handleSizeSelection = (event: SelectChangeEvent<number>) => {
        const size = event.target.value as number
        setSelectedSize(size)
        setSize(size)

    }
    return <Box sx={() => ({
        display: 'flex',
        justifyContent: 'space-between',
    })}>
        <Typography py={1} variant={'subtitle2'}>Size</Typography>
        <FormControl sx={{minWidth: 96}}>
            <Select size={'small'} value={size} onChange={handleSizeSelection}>
                {sizes.map((size, index) => (<MenuItem value={size} key={index}>{size}</MenuItem>))}
            </Select>
            <FormHelperText sx={(theme) => ({m: theme.spacing(1, 0, 0, 0), textAlign: 'right'})}>
                <Link color={'inherit'} variant="caption">
                    Size Chart
                </Link>
            </FormHelperText>
        </FormControl>

    </Box>
}
function ProductQuantitySelection({availableQuantity,setSelectedQuantity}:{availableQuantity:number,setSelectedQuantity:(quantity:number)=>void}){
    return <Box sx={() => ({
        display: 'flex',
        justifyContent: 'space-between',
    })}>
        <Typography py={1} variant={'subtitle2'}>Quantity</Typography>
        <Counter initial={1} helperText={`Available ${availableQuantity}`} max={availableQuantity} min={1}
                 setQuantity={setSelectedQuantity}/>
    </Box>
}

function ProductBuyButtons() {
    return <Stack direction={'row'} spacing={2}>
        <Button startIcon={<Iconify icon={'ic:baseline-add-shopping-cart'}/>} fullWidth size={'large'}
                variant={'contained'} color={'warning'}>
            Add To Cart
        </Button> <Button sx={(theme) => ({
        color: theme.palette.common.white,
    })} fullWidth size={'large'} variant={'contained'} color={'success'}>
        Buy Now
    </Button>
    </Stack>
}

function SocialMediaLinks() {
    return <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>

        <IconButton><Iconify icon={'eva:facebook-fill'}/></IconButton>
        <IconButton><Iconify icon={'ant-design:instagram-filled'}/></IconButton>
        <IconButton><Iconify icon={'eva:linkedin-fill'}/></IconButton>
        <IconButton><Iconify icon={'eva:twitter-fill'}/></IconButton>
    </Stack>

}