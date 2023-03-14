import {BlogPostsSearchProps} from "./types";
import {Autocomplete, InputAdornment, TextField} from "@mui/material";
import Iconify from "../../../components/iconify";


export default function BlogPostsSearch({posts}: BlogPostsSearchProps) {
    return <>
        <Autocomplete
            sx={{ width: 280 }}
            popupIcon={null}
            options={posts.map((post) => post.title)}
            renderInput={(params) => <TextField
                {...params}
                placeholder="Search post..."
                InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                        <InputAdornment position="start">
                            <Iconify icon={'eva:search-fill'}
                                     sx={{
                                         ml: 1, width: 20, height: 20,
                                         color: (theme) => theme.palette.text.disabled
                                     }}/>
                        </InputAdornment>
                    ),
                }}
            />}/>
    </>
}