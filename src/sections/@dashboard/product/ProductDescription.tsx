import {
    Avatar,
    Box,
    Button,
    Divider,
    LinearProgress,
    Pagination,
    Paper,
    Rating as MuiRating,
    Stack,
    Typography
} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, {useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {fShortenNumber} from "../../../utils/formatNumber";
import Iconify from "../../../components/iconify";
import {fDate} from "../../../utils/formatTime";
import {ProductBuyBoxProps, RatingProps} from "./types";

export default function ProductDescription({product}: ProductBuyBoxProps) {
    const [value, setValue] = React.useState('1');
    const totalReviews = product.totalReviews
    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return  <Paper sx={(theme) => ({
            overflow: 'hidden',
            boxShadow: theme.customShadows.card,
            borderRadius: theme.spacing(2),
        })}> <TabContext value={value}>

            <TabList textColor={'inherit'} sx={(theme) => ({

                paddingLeft: theme.spacing(2),
                backgroundColor: theme.palette.background.neutral,

                '& .MuiTabs-indicator': {
                    backgroundColor: theme.palette.success.main
                },
            })} value={value} onChange={handleChange}>
                <Tab label={"Description"} value={'1'}></Tab>
                <Tab label={`Reviews(${fShortenNumber(totalReviews)})`} value={'2'}></Tab>
            </TabList>
            <Description descriptions={product.descriptions}/>
            <Reviews product={product}/>
        </TabContext>
        </Paper>


}

function Description({descriptions}: { descriptions: { heading: string, detail: string }[] }) {
    return <TabPanel value={'1'}>
        <Stack spacing={4}>
            {descriptions.map(({heading, detail}, index) => (<Stack key={index} spacing={2}>
                <Box component={'strong'}> <Box textTransform={'uppercase'} component={'small'}>{heading}</Box></Box>
                <Typography variant={'body1'}>{detail}</Typography>
            </Stack>))}
        </Stack>


    </TabPanel>
}

function Reviews({product}: ProductBuyBoxProps) {
    const [page, setPage] = useState(0)
    const rowsPerPage = 20
    const totalPages = Math.ceil(product.totalReviews / 20)
    return <TabPanel value={'2'} sx={{p: 0}}>
        <ReviewOverView totalReviews={product.totalReviews} aggregatedRatings={product.aggregatedRatings}/>
        <Divider variant={'fullWidth'}/>
        <Stack spacing={5} sx={() => ({
            paddingTop: 5,
            paddingRight: {xs: 2.5, md: 5},
            paddingLeft: {xs: 2.5, md: 0},
        })}>
            {product.ratingList.ratings.slice((page) * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rating, index) => (
                <Rating key={index} rating={rating}/>))}
            <Stack alignItems={'flex-end'}>
                <Pagination color={'secondary'} count={totalPages} page={page + 1} onChange={(_, page) => {
                    setPage(page - 1)
                }}></Pagination>
            </Stack>
        </Stack>
    </TabPanel>
}


function ReviewOverView({totalReviews,aggregatedRatings}: {totalReviews:number ,aggregatedRatings: { value: number, occurrence: number, label: string }[] }) {

    return <Grid2 sx={{
        p: 0,
        borderColor: (theme) => theme.palette.action.disabledBackground,
    }} container>
        <Grid2 xs={4} component={Stack} spacing={1} direction={'column'} sx={(theme) => ({
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(3),
            justifyContent: 'center',
            alignItems: 'center',
            padding: {md: 0},
        })}><Typography color={'text.secondary'} variant={'subtitle1'}>
            Average rating
        </Typography>
            <Typography variant={'h2'}>2.5/5</Typography>
            <MuiRating value={2.5} readOnly></MuiRating>
            <Typography color={'text.secondary'} variant={'caption'}>{fShortenNumber(totalReviews)}</Typography>
        </Grid2>
        <Grid2 xs={4} component={Stack} spacing={1.5} direction={'column'} sx={(theme) => ({
            padding: 3,
            [theme.breakpoints.up("md")]: {
                padding: theme.spacing(5, 3),
                borderRight: '1px dashed',
                borderLeft: '1px dashed',
                borderColor: theme.palette.action.disabledBackground,
            }
        })}>
            {aggregatedRatings.map(({label, value, occurrence}, index) => (
                    <Stack key={index} alignItems={'center'} spacing={2} direction={'row'}>
                        <Typography variant={'subtitle2'}>{label}</Typography>
                        <LinearProgress color={'inherit'} sx={{flexGrow: 1}} variant={'determinate'}
                                        value={occurrence * 100 / totalReviews}/>
                        <Typography color={'text.disabled'} variant={'body2'}>{fShortenNumber(occurrence)}</Typography>
                    </Stack>
                )
            )}
        </Grid2>
        <Grid2 xs={4} component={Stack} alignItems={'center'} justifyContent={'center'}>
            <Button color={'inherit'} disableElevation variant={'outlined'} size={'large'}
                    startIcon={<Iconify icon={'eva:edit-fill'}/>}>Write your review</Button>
        </Grid2>
    </Grid2>
}

function Rating({rating}: RatingProps) {

    const {user, verifiedPurchase, verifiedPurchaseText, stars, review, reviewTime, helpfulText, foundHelpful} = rating
    return <Stack direction={'row'} spacing={2}>
        <Stack width={240} justifyContent={'center'} alignItems={'center'} spacing={2} direction={'column'}>
            <Avatar sx={{width: 64, height: 64}} src={user.avatarUrl}/>
            <Box textAlign={'center'}>
                <Typography variant={'subtitle2'}>{user.name}</Typography>
                <Typography variant={'subtitle2'} color={'text.secondary'}>{fDate(reviewTime)}</Typography>
            </Box>
        </Stack>
        <Stack spacing={1}>
            <MuiRating readOnly precision={0.1} value={stars}/>
            {verifiedPurchase &&
                <Typography variant={'caption'} component={'span'} display={'flex'} alignItems={'center'}
                            color={'success.dark'}><Iconify
                    icon={'ic:baseline-verified'} width={16} sx={{marginRight: 0.5}}/>
                    {verifiedPurchaseText}</Typography>}
            <Typography variant={'body2'}>{review}</Typography>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Typography variant={'subtitle2'}>{helpfulText}</Typography>
                <Button color={'inherit'} variant={'text'} disableElevation startIcon={(<Iconify
                    icon={'ic:baseline-thumb-up'}/>)}>{foundHelpful > 0 && `Thank(${fShortenNumber(foundHelpful)})`}</Button>
            </Stack>
        </Stack>
    </Stack>

}