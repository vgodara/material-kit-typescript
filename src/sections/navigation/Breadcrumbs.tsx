import React from "react";
import {Box, Breadcrumbs as MuiBreadcrumbs, Link as MuiLink, styled, SxProps, Theme} from "@mui/material";

type BreadcrumbLink = {
    label: string
    link: string
}

interface BreadcrumbsProps {
    list: BreadcrumbLink[]
    sx?: SxProps<Theme>
}

type IsDisabled = {
    disabled: boolean
}
const Link = styled(MuiLink)<IsDisabled>(({theme, disabled}) => ({
    ...(disabled && {
        "&[disabled]": {
            color: theme.palette.text.disabled,
            cursor: "default",
            "&:hover": {
                textDecoration: "none"
            },
            ...theme.typography.subtitle2,
        }
    })
}))
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
            {list.map(({label, link}, index) => {
                const isLast = index === list.length - 1
                return <Link
                    key={index}
                    underline="hover"
                    color={isLast ? 'text.disabled' : 'text.primary'}
                    href={isLast ? '' : link}
                    disabled={isLast}
                    variant={'body2'}
                >
                    {label}
                </Link>
            })}
        </MuiBreadcrumbs>
    </>
}