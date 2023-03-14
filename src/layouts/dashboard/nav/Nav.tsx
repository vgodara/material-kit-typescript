import {Avatar, Box, Button, Drawer, Link, Stack, Typography} from "@mui/material";
import Scrollbar from "../../../components/scrollbar";
import {Logo} from "../../../components/logo";
import {account} from "../../../temp/data";
import {NavSection} from "../../../components/nav-section/NavSection";
import navConfig from "./config";
import useResponsive from "../../../hooks/useResponsive";
import {NavProps} from "./types";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const NAV_WIDTH = 280;
export default function Nav({openNav, onCloseNav}: NavProps) {
    const {pathname} = useLocation();
    const isDesktop = useResponsive('up', 'lg');
    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    return <>
        <Box component="nav"
             sx={{
                 flexShrink: {lg: 0},
                 width: {lg: NAV_WIDTH},
             }}>
            <Drawer
                open={isDesktop || openNav}
                onClose={onCloseNav}
                variant={(isDesktop ? 'permanent' : undefined)}
                ModalProps={{
                    ...(isDesktop && {
                        keepMounted: true,
                    })
                }}
                PaperProps={{
                    sx: {
                        width: NAV_WIDTH,
                        ...(isDesktop && {
                            backgroundColor: (theme) => theme.palette.background.default,
                            borderRightStyle: 'dashed',
                        })
                    },

                }}
            >
                <Scrollbar sx={{
                    height: 1,
                    '& .simplebar-content': {height: 1, display: 'flex', flexDirection: 'column'},
                }}>
                    <Box sx={{py: 3, px: 2.5, display: 'inline-flex'}}>
                        <Logo/>
                    </Box>
                    <Box sx={{mx: 2.5, mb: 5}}>
                        <Link underline="none">
                            <Stack spacing={2} direction={'row'} alignItems={'center'} sx={{
                                px: 2.5,
                                py: 2,
                                backgroundColor: (theme) => theme.palette.action.selected,
                                borderRadius: 1.5
                            }}>

                                <Avatar src={account.photoURL} alt={"photo url"}/>
                                <Box>
                                    <Typography color={'text.primary'}
                                                variant={'subtitle2'}>{account.displayName}</Typography>

                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        {account.role}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Link>
                    </Box>
                    <NavSection navItems={navConfig}/>
                    <Box flexGrow={1}/>
                    <Box sx={{mt: 3.5, px: 2.5, paddingBottom: 3, textAlign: 'center'}}>

                        <Box component={'img'}
                             src={"/assets/illustrations/illustration_avatar.png"}
                             width={100}
                        />

                        <Typography variant="h6">
                            Get more?
                        </Typography>

                        <Typography sx={{mt: 1}} variant="body2" color={'text.secondary'}>
                            From only $69
                        </Typography>

                        <Button sx={{mt: 3}} href="https://material-ui.com/store/items/minimal-dashboard/"
                                target="_blank"
                                variant="contained">
                            Upgrade to Pro
                        </Button>
                    </Box>
                </Scrollbar>
            </Drawer>
        </Box>
    </>
}