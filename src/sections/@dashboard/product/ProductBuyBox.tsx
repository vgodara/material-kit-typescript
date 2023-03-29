import {
    alpha,
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
    Stack,
    Typography
} from "@mui/material";
import {ColorSinglePicker} from "../../../components/color-utils/ColorSinglePicker";
import {useState} from "react";
import {sample} from "lodash";
import {Counter} from "../../../components/counter";
import Iconify from "../../../components/iconify";

export default function ProductBuyBox() {


    return <FormControl fullWidth component={'form'} sx={(theme) => ({
        padding: {md: theme.spacing(5, 5, 0, 2)},
    })}>
        <Stack spacing={3}>
            <ProductDescription/>
            <Divider sx={{borderStyle: 'dashed'}} flexItem variant={'fullWidth'}/>
            <ProductColorSelection/>
            <ProductSizeSelection/>
            <ProductQuantitySelection/>
            <Divider sx={{borderStyle: 'dashed'}} flexItem variant={'fullWidth'}/>
            <ProductBuyButtons/>
            <SocialMediaLinks/>

        </Stack>
    </FormControl>
}

function ProductDescription() {
    return <Stack spacing={2}>
        <Typography sx={(theme) => ({
            color: theme.palette.error.dark,
            backgroundColor: alpha(theme.palette.error.main, .16),
            minWidth: 22,
            padding: theme.spacing(0.5, 1),
            display: 'flex',
            alignItems: 'center',
            marginRight: 'auto',
            borderRadius: 1,
        })} noWrap variant={'overline'}>Out of Stock</Typography>

        <Typography color={'error'} variant={'overline'}>
            Sale
        </Typography>
        <Typography variant={'h5'}>Nike Air Force 1 NDESTRUKT</Typography>
        <Box sx={(theme) => ({
            display: 'flex',
            columnGap: theme.spacing(1),
            alignItems: 'center',
        })}>
            <Rating readOnly value={2.5} precision={0.5}/>
            <Typography color={'text.secondary'} variant={'body2'}>(7.42kreviews)</Typography>
        </Box>
        <Typography variant={'h4'}>
            {(Math.random() > 0.1 &&
                <Typography component={'span'} variant={'h4'} color={'text.disabled'}
                            sx={{textDecoration: 'line-through', mr: 0.5}}>$16.19</Typography>)}
            $16.19
        </Typography>
    </Stack>
}

function ProductColorSelection(){
    return  <Box sx={() => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    })}>
        <Typography variant={'subtitle2'}>Color</Typography>
        <ColorSinglePicker colors={['#00ab55', '#000000']}/>
    </Box>
}
function ProductSizeSelection(){
    const sizes = [...Array(5)].map((_, index) => (index + 5))
    const [size, setSize] = useState(sample(sizes)!)
    return  <Box sx={() => ({
        display: 'flex',
        justifyContent: 'space-between',
    })}>
        <Typography py={1} variant={'subtitle2'}>Size</Typography>
        <FormControl sx={{minWidth: 96}}>
            <Select  size={'small'} value={size} onChange={(event) => {
                setSize(event.target.value as number)
            }}>
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
function ProductQuantitySelection(){
    return  <Box sx={() => ({
        display: 'flex',
        justifyContent: 'space-between',
    })}>
        <Typography py={1} variant={'subtitle2'}>Quantity</Typography>
        <FormControl>
            <Counter initial={1} max={5} min={1}/>
            <FormHelperText sx={(theme) => ({m: theme.spacing(1, 0, 0, 0), textAlign: 'right'})}>
                <Typography variant="caption">
                    Available
                </Typography>
            </FormHelperText>
        </FormControl>
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