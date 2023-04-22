import {Helmet} from "react-helmet-async";
import {Button, Container, Stack, Typography} from "@mui/material";
import Iconify from "../../../components/iconify";
import {BlogPostCard, BlogPostsSearch, BlogPostsSort} from "../../../sections/@dashboard/blog";
import {posts, SORT_OPTIONS} from "../../../temp/data";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function BlogPage() {
    return <>
        <Helmet>
            <title> Dashboard: Blog | Minimal UI </title>
        </Helmet>
        <Container>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{mb:5}}>
                <Typography gutterBottom variant={'h4'}>Blog</Typography>
                <Button variant={'contained'} startIcon={<Iconify icon={'eva:plus-fill'}/>} >New Post</Button>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{mb:5}}>
                <BlogPostsSearch posts={posts}/>
                <BlogPostsSort options={SORT_OPTIONS} onSort={()=>{}}/>
            </Stack>
            <Grid2 container spacing={3}>
                {posts.map((post,index)=>(
                        <BlogPostCard key={post.id} index={index} post={post}/>

                ))}
            </Grid2>
        </Container>
    </>
}