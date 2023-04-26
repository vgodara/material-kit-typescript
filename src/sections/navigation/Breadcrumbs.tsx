import React from "react";
import {Box, Breadcrumbs as MuiBreadcrumbs, Link, styled, SxProps, Theme} from "@mui/material";

type BreadcrumbLink = {
    label: string
    link: string
}

interface BreadcrumbsProps {
    list: BreadcrumbLink[]
    sx?: SxProps<Theme>
}


const Separator = styled(Box)(({theme}) => ({
    width: 4,
    height: 4,
    margin: theme.spacing(0, 1),
    borderRadius: '50%',
    backgroundColor: theme.palette.text.disabled,
})) as typeof Box
export default function Breadcrumbs({list, sx}: BreadcrumbsProps) {
    return <>
        <MuiBreadcrumbs aria-label="breadcrumb" separator={<Separator/>} sx={{
            '& .MuiBreadcrumbs-li': {
                display:'inline-flex',
                my: .25,
            },
            ...sx}
        }
        >
            {list.map(({label, link}, index) => (
                <Link
                    component="button"
                    color={'text.primary'}
                    key={index}
                    underline="hover"
                    href={link}
                    variant={'body2'}
                    disabled={index === list.length - 1}
                >
                    {label}
                </Link>
            ))}
        </MuiBreadcrumbs>
    </>
}