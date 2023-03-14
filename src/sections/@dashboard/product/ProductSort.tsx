import {Button, Menu, MenuItem, Typography} from "@mui/material";
import React, {useState} from "react";
import Iconify from "../../../components/iconify";

type SortBy = 'featured' | 'newest' | 'priceDesc' | 'priceAsc'
type SortByOption = { value: SortBy, label: string }
const SORT_BY_OPTIONS: SortByOption[] = [
    {value: 'featured', label: 'Featured'},
    {value: 'newest', label: 'Newest'},
    {value: 'priceDesc', label: 'Price: High-Low'},
    {value: 'priceAsc', label: 'Price: Low-High'},
];
export default function ProductSort() {

    const [sortBy, setSortBy] = useState<SortByOption>({value: 'featured', label: 'Featured'},)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        option: SortByOption,
    ) => {

        setSortBy(option)
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <> <Button variant={'text'} type={'button'} color={"inherit"} onClick={handleButtonClick}
                      endIcon={
                          <>
                              <Iconify
                                  icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'}/>
                          </>
                      }
    >
        Sort By:&nbsp;
        <Typography sx={{color: (theme) => theme.palette.text.secondary}} variant={'subtitle2'}
                    component={'span'}>{sortBy.label}</Typography>
    </Button>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            {SORT_BY_OPTIONS.map((option) => (
                <MenuItem
                    key={option.value}
                    selected={sortBy.value === option.value}
                    onClick={(event) => handleMenuItemClick( option)}
                    sx={{typography: 'body2'}}
                >
                    {option.label}
                </MenuItem>))}
        </Menu>
    </>
}