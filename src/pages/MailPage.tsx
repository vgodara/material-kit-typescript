import {Box, Card, Container, Typography} from "@mui/material";
import Breadcrumbs from "../sections/navigation/Breadcrumbs";
import React, {useState} from "react";
import {Outlet, useOutletContext} from "react-router-dom";
import MailNavbar from "../sections/@dashboard/mail/MailNavbar";

type ContextType = { setOpen: React.Dispatch<React.SetStateAction<boolean>> };
export default function MailPage(){
    const [open, setOpen] = useState(false);
  return  <Container maxWidth={"xl"}>
        <Box sx={{mb: 5}}>
            <Typography variant={'h4'} gutterBottom sx={{mb: 1}}>Mail</Typography>
            <Breadcrumbs list={[{label: 'Dashboard', link: '/dashboard'}, {label: 'MailPage', link: '/'}]}/>
        </Box>
        <Card sx={{
            direction: 'ltr',
            display: {md: 'flex'},
            height: {md: '72vh'}
        }}>
            <MailNavbar openNav={open} onCloseNav={()=>setOpen(false)}/>
            <Outlet context={{setOpen}}/>
        </Card>
    </Container>
}

export function useSetOpen() {
    return useOutletContext<ContextType>();
}