import {StyledAppBar, StyledToolbar} from "./styles";
import {Box, IconButton, Stack} from "@mui/material";
import Iconify from "../../../components/iconify";
import Searchbar from "./Searchbar";
import LanguagePopover from "./LanguagePopover";
import NotificationPopover from "./NotificationPopover";
import AccountPopover from "./AccountPopover";
import {HeaderProps} from "./types";


export default function Header({onOpenNav}:HeaderProps) {
    return <>
        <StyledAppBar>
            <StyledToolbar>
                <IconButton
                    sx={{
                        mr: 1,
                        color: 'text.primary',
                        display: { lg: 'none' },
                    }}
                    onClick={onOpenNav}
                >
                    <Iconify icon="eva:menu-2-fill" />
                </IconButton>

                <Searchbar />
                <Box sx={{ flexGrow: 1 }} />

                <Stack  direction={"row"} alignItems="center"
                       spacing={{
                           xs: 0.5,
                           sm: 1,
                       }}>
                    <LanguagePopover/>
                    <NotificationPopover/>
                    <AccountPopover/>
                </Stack>
            </StyledToolbar>
        </StyledAppBar>
    </>

}