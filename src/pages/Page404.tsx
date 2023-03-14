import {Helmet} from "react-helmet-async";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'

export default function Page404() {
    return <>
        <Helmet>
            <title> 404 Page Not Found | Minimal UI </title>
        </Helmet>
        <Container>
            <Stack maxWidth={480} alignItems={'center'} justifyContent={'center'}
                   sx={{py: 12, m: 'auto', textAlign: 'center'}}>
                <Typography variant={'h3'} sx={{mb: 2}}>Sorry, page not found!</Typography>
                <Typography color={'text.secondary'} variant={'body1'}>Sorry, we couldn’t find the page you’re looking
                    for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</Typography>
                <Box component={'img'} sx={{height: 260, my: {xs:5, sm:10}}}
                src={'./assets/illustrations/illustration_404.svg'}
                />

                <Button to="/" size="large" variant="contained" component={RouterLink}>
                    Go to Home
                </Button>
            </Stack>
        </Container>
    </>
}