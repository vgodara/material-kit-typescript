import {BlogPostSortProps} from "./types";
import React from "react";
import {MenuItem, TextField} from "@mui/material";

export default function BlogPostsSort({options, onSort}: BlogPostSortProps) {

    return <>
        <TextField select size="small" value="latest" onChange={onSort}>
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    </>

}