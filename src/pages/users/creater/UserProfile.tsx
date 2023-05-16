import {account, posts, postsDetails, userCards, userFollowers, userFollowings, userInfo} from "../../../temp/data";
import ImageWithOverlay from "../../../components/image/ImageWithOverlay";
import {Avatar, Box, Card, Container, Stack, styled, Tabs, Typography} from "@mui/material";
import Breadcrumbs from "../../../sections/navigation/Breadcrumbs";
import Tab from "@mui/material/Tab";
import React, {useState} from "react";
import {
    UserFollowerListSection,
    UserFollowingListSection,
    UserPostListSection,
    UserProfileSection
} from "../../../sections/@dashboard/user";
import {sample} from "lodash";
import {nonNullOnly} from "../../../utils/helper";
import Iconify from "../../../components/iconify";

const StyledTab = styled(Tab)(({theme}) => ({
    margin: 0,
    padding: 0,
    minHeight: 48,
    minWidth: 48,
}))
export default function UserProfile() {
    const [tabNumber, setTabNumber] = useState(1)
    return (<>

        <Container maxWidth={'lg'}>
            <Stack spacing={1} mb={5}>
                <Typography variant={'h4'}>Profile</Typography>
                <Breadcrumbs list={[{label: 'Dashboard', link: '/'}, {
                    label: 'User',
                    link: '/dashboard/users'
                }, {label: 'Minimal Ui', link: ''}]}/>
            </Stack>
            <Card sx={{position: 'relative', height: 280}}>
                <ImageWithOverlay sx={{height: 1}} overlayColor={(theme) => '#005249'} src={sample(userCards)!.cover}/>
                <Stack sx={(theme) => ({
                    position: 'absolute',
                    left: {xs: 0, md: 24},
                    right: {xs: 0, md: 'auto'},
                    top: {xs: 40, md: 'auto'},
                    bottom: {xs: 'auto', md: 24},
                })
                } spacing={{xs: 1, md: 3}} direction={{xs: 'column', md: 'row'}}
                       alignItems={'center'} zIndex={9}>
                    <Avatar sx={{width: {xs: 80, md: 128}, height: {xs: 80, md: 128}}} src={account.photoURL}/>
                    <Box sx={{
                        color: (theme) => theme.palette.common.white,
                        textAlign: {xs: 'center', md: 'left'},
                    }}>
                        <Typography variant={'h4'}>{account.displayName}</Typography>
                        <Typography sx={{opacity: 0.72,}}>{account.role}</Typography>
                    </Box>
                </Stack>
                <Tabs textColor={'inherit'}
                      variant="scrollable"
                      scrollButtons="auto"
                      allowScrollButtonsMobile
                      sx={{
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          right: 0,
                          zIndex: 8,
                          backgroundColor: (theme) => theme.palette.common.white,
                          '& .MuiTabs-indicator': {
                              backgroundColor: (theme) => theme.palette.success.main
                          },
                          '& .MuiTabs-flexContainer': {
                              paddingRight: {md: 3},
                              justifyContent: {sm: 'center', md: 'flex-end'},
                              columnGap: 5,
                          },
                      }} value={tabNumber} onChange={(_, value) => {
                    nonNullOnly(value, setTabNumber)
                }}>
                    <StyledTab
                        iconPosition={'start'}
                        icon={<Iconify icon={'ic:sharp-account-box'}/>}
                        label={"Profile"}
                        value={1}></StyledTab>
                    <StyledTab
                        iconPosition={'start'}
                        icon={<Iconify icon={'eva:heart-fill'}/>}
                        label={"Followers"}
                        value={2}></StyledTab>
                    <StyledTab
                        iconPosition={'start'}
                        icon={<Iconify icon={'eva:people-fill'}/>}
                        label={"Friends"}
                        value={3}></StyledTab>
                    <StyledTab

                        iconPosition={'start'}
                        icon={<Iconify icon={'ic:round-photo-library'}/>}
                        label={"Gallery"}
                        value={4}></StyledTab>
                </Tabs>

            </Card>
            {SectionSwitcher(tabNumber)}
        </Container>
    </>)
}

function SectionSwitcher(tabNumber: number) {
    switch (tabNumber) {
        case 1: {
            return (<UserProfileSection
                userInfo={userInfo}
                posts={postsDetails}
            />)
        }

        case 2 : {
            return (<UserFollowerListSection
                users={userFollowers}/>)
        }

        case 3 : {
            return (<UserFollowingListSection users={userFollowings}/>)
        }

        case 4: {
            return (<UserPostListSection posts={posts}/>)
        }
        default : {
            return (<></>)
        }
    }
}