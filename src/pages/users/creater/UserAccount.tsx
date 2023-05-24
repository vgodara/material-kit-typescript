import {Container, Stack, Tabs, Typography} from "@mui/material";
import Breadcrumbs from "../../../sections/navigation/Breadcrumbs";
import React, {useState} from "react";
import {nonNullOnly} from "../../../utils/helper";
import {StyledTab} from "./styles";
import Iconify from "../../../components/iconify";
import GeneralTab from "./tabs/GeneralTab";
import NotificationTab from "./tabs/NotificationTab";
import SocialMediaLinkTab from "./tabs/SocialMediaLinkTab";
import ChangePasswordTab from "./tabs/ChangePasswordTab";

export default function UserAccount() {
    const [tabNumber, setTabNumber] = useState(0)
    return (<>

        <Container maxWidth={'lg'}>
            <Stack spacing={1} mb={5}>
                <Typography variant={'h4'}>Account</Typography>
                <Breadcrumbs list={[{label: 'Dashboard', link: '/'}, {
                    label: 'User',
                    link: '/dashboard/users'
                }, {label: 'Account Settings', link: ''}]}/>
            </Stack>
            <Tabs textColor={'inherit'}
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  sx={{
                      '& .MuiTabs-flexContainer': {
                          columnGap: {xs:3,sm:5},
                      },
                  }}
                  value={tabNumber}
                  onChange={(_, value) => nonNullOnly(value, setTabNumber)}>
                <StyledTab
                    iconPosition={'start'}
                    icon={<Iconify icon={'ic:round-account-box'}/>}
                    label={"General"}
                    value={0}
                />
                <StyledTab
                    iconPosition={'start'}
                    icon={<Iconify icon={'ic:round-receipt'}/>}
                    label={"Billing"}
                    value={1}
                />
                <StyledTab
                    iconPosition={'start'}
                    icon={<Iconify icon={'eva:bell-fill'}/>}
                    label={"Notification"}
                    value={2}/>
                <StyledTab
                    iconPosition={'start'}
                    icon={<Iconify icon={'eva:share-fill'}/>}
                    label={"Social Links"}
                    value={3}/>
                <StyledTab
                    iconPosition={'start'}
                    icon={<Iconify icon={'ic:round-vpn-key'}/>}
                    label={"Change Password"}
                    value={4}/>
            </Tabs>
            <TabSwitcher tabNumber={tabNumber}/>
        </Container>

    </>)
}

function TabSwitcher({tabNumber}: { tabNumber: number }) {
    switch (tabNumber) {
        case 0: {
            return (<GeneralTab/>)
        }
        case 1: {
            return (<></>)
        }
        case 2: {
            return (<NotificationTab/>)
        }
        case 3: {
            return (<SocialMediaLinkTab/>)
        }
        case 4: {
            return (<ChangePasswordTab/>)
        }
        default: {
            return (<></>)
        }
    }
}