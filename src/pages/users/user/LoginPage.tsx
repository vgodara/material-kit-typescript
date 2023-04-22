import {Box, Button, Container, Divider, Link, Stack, Typography} from "@mui/material";
import {Logo} from "../../../components/logo";
import Iconify from "../../../components/iconify";
import {LoginForm} from "../../../sections/auth";
import useResponsive from "../../../hooks/useResponsive";


export default function LoginPage() {
    const mdUp = useResponsive('up', 'md');
    return <>
        <Stack direction={'row'}>
            <Logo
                sx={{
                    position: 'fixed',
                    top: {xs: 16, sm: 24, md: 40},
                    left: {xs: 16, sm: 24, md: 40},
                }}
            />
            {mdUp && <Stack justifyContent={'center'} sx={{
                maxWidth: 480,
                width: '100%',
                boxShadow: (theme) => theme.customShadows.card,
                backgroundColor: (theme) => theme.palette.background.default,
            }}>
                <Typography variant={'h3'} sx={{px: 5, mt: 10, mb: 5}}>Hi, Welcome Back</Typography>
                <Box component={'img'}
                     src={'./assets/illustrations/illustration_login.png'}
                     maxWidth={'100%'}
                />
            </Stack>}
            <Container maxWidth="sm">
                <Stack sx={{
                    py: 12,
                    maxWidth: 480,
                    minHeight: '100vh',
                }} justifyContent={'center'}>
                    <Typography gutterBottom variant={'h4'} sx={{mb: 1}}>Sign in to Minimal</Typography>
                    <Typography variant={'body2'} sx={{mb: 5}}>Don’t have an account? {''}
                        <Link typography={'subtitle2'} component={'span'}>Get
                            started</Link> </Typography>
                    <Stack direction={"row"} spacing={2}>
                        <Button fullWidth size="large" color="inherit" variant="outlined">
                            <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22}/>
                        </Button>

                        <Button fullWidth size="large" color="inherit" variant="outlined">
                            <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22}/>
                        </Button>

                        <Button fullWidth size="large" color="inherit" variant="outlined">
                            <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22}/>
                        </Button>
                    </Stack>
                    <Divider variant={"fullWidth"} sx={{my: 3}}><Typography color={'text.secondary'} variant={'body2'}>OR</Typography></Divider>
                    <LoginForm/>
                </Stack>
            </Container>
        </Stack>
    </>
}