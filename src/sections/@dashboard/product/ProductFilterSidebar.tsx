import {ShopFilterSidebarProps} from "./types";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    Drawer,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
    Rating,
    Stack,
    Typography
} from "@mui/material";
import Iconify from "../../../components/iconify";
import React from "react";
import Scrollbar from "../../../components/scrollbar";
import {ColorMultiPicker} from "../../../components/color-utils/ColorMultiPicker";

export const FILTER_GENDER_OPTIONS = ['Men', 'Women', 'Kids'];
export const FILTER_CATEGORY_OPTIONS = ['All', 'Shose', 'Apparel', 'Accessories'];
export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
    {value: 'below', label: 'Below $25'},
    {value: 'between', label: 'Between $25 - $75'},
    {value: 'above', label: 'Above $75'},
];
export const FILTER_COLOR_OPTIONS = [
    '#00AB55',
    '#000000',
    '#FFFFFF',
    '#FFC0CB',
    '#FF4842',
    '#1890FF',
    '#94D82D',
    '#FFC107',
];
export default function ProductFilterSidebar({openFilter, setOpenFilter}: ShopFilterSidebarProps) {
    return <>
        <Button
            color={'inherit'}
            endIcon={<Iconify icon={"ic:round-filter-list"}/>}
            onClick={() => setOpenFilter(true)}
        >
            Filters&nbsp;
        </Button>
        <Drawer
            anchor={"right"}
            open={openFilter}
            onClose={() => setOpenFilter(false)}
            PaperProps={{
                sx: {width: 280, border: 'none', overflow: 'hidden'},
            }}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{px: 1, py: 2}}>
                <Typography variant="subtitle1" sx={{ml: 1}}>
                    Filters
                </Typography>
                <IconButton onClick={() => setOpenFilter(false)}>
                    <Iconify icon="eva:close-fill"/>
                </IconButton>
            </Stack>
            <Divider/>
            <Scrollbar>
                <Stack spacing={3} sx={{p: 3}}>
                    <FormControl>
                        <FormLabel>
                            <Typography
                                sx={{color: (theme) => theme.palette.text.primary}}
                                variant={'subtitle1'}
                                gutterBottom>Gender</Typography>
                        </FormLabel>
                        <FormGroup>
                            {FILTER_GENDER_OPTIONS.map((gender) => (
                                <FormControlLabel key={gender} value={gender} control={<Checkbox/>} label={gender}/>))}
                        </FormGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel>
                            <Typography
                                sx={{color: (theme) => theme.palette.text.primary}}
                                variant={'subtitle1'}
                                gutterBottom>Category</Typography>
                        </FormLabel>
                        <RadioGroup>
                            {FILTER_CATEGORY_OPTIONS.map((category) => (
                                <FormControlLabel key={category} value={category} control={<Radio/>}
                                                  label={category}/>))}
                        </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel>
                            <Typography
                                sx={{color: (theme) => theme.palette.text.primary}}
                                variant={'subtitle1'}
                                gutterBottom>Colors</Typography>
                        </FormLabel>
                        <FormGroup sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            px: 1,
                        }}>
                            <ColorMultiPicker colors={FILTER_COLOR_OPTIONS} onChangeColor={() => {
                            }} selected={new Set(FILTER_CATEGORY_OPTIONS.slice(0, 2))}/>
                        </FormGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel>
                            <Typography
                                sx={{color: (theme) => theme.palette.text.primary}}
                                variant={'subtitle1'}
                                gutterBottom>Price</Typography>
                        </FormLabel>
                        <FormGroup>
                            <RadioGroup>
                                {FILTER_PRICE_OPTIONS.map((price) => (
                                    <FormControlLabel key={price.value} value={price.value} control={<Radio/>}
                                                      label={price.label}/>))}
                            </RadioGroup>
                        </FormGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            <Typography
                                sx={{color: (theme) => theme.palette.text.primary}}
                                variant={'subtitle1'}
                                gutterBottom>Rating</Typography>
                        </FormLabel>
                        <RadioGroup>
                            {FILTER_RATING_OPTIONS.map((item, index) => (
                                <FormControlLabel
                                    key={item}
                                    value={item}
                                    control={
                                        <Radio
                                            disableRipple
                                            color="default"
                                            icon={<Rating readOnly value={4 - index}/>}
                                            checkedIcon={<Rating readOnly value={4 - index}/>}
                                            sx={{
                                                ':hover': {backgroundColor: 'transparent'},
                                            }}
                                        />
                                    }
                                    label="& Up"
                                    sx={{
                                        my: 0.5,
                                        borderRadius: 1,
                                        ':hover': {opacity: 0.48},
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>

                </Stack>
            </Scrollbar>
            <Box sx={{ p: 3 }}>
                <Button
                    fullWidth
                    size="large"
                    type="submit"
                    color="inherit"
                    variant="outlined"
                    startIcon={<Iconify icon="ic:round-clear-all" />}
                >
                    Clear All
                </Button>
            </Box>
        </Drawer>
    </>
}
